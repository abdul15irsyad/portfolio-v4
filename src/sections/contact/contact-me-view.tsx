'use client';
import './contact-me.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import nProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { ApiResponse, ApiResponseError } from '@/types/api-response.type';
import { ContactMe } from '@/types/contact-me.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

import { SuccessNotification } from './success-notification';

export const ContactMeView = () => {
  const { t } = useTranslation();
  const [alert, setAlert] = useState<{
    type?: 'success' | 'danger';
    active: boolean;
    message?: string | (() => string);
  }>({ active: false });

  const createContactMeSchema = z.object({
    name: z
      .string()
      .min(1, t('validation.required'))
      .min(3, t('validation.min', { min: 3 }))
      .max(255, t('validation.max', { max: 255 }))
      .trim(),
    address: z
      .string()
      .max(255, t('validation.max', { max: 255 }))
      .trim(),
    message: z
      .string()
      .min(1, t('validation.required'))
      .max(255, t('validation.max', { max: 255 }))
      .trim(),
  });

  const methods = useForm({
    resolver: zodResolver(createContactMeSchema),
    defaultValues: {
      name: '',
      isAnonymous: false,
      address: '',
      message: '',
    },
    mode: 'all',
  });
  const {
    setError,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

  const {
    mutateAsync: mutateCreateContactMe,
    error: mutateCreateContactMeError,
  } = useMutation<
    ApiResponse<ContactMe>,
    ApiResponseError,
    Pick<ContactMe, 'name' | 'address' | 'message'>
  >({
    mutationKey: ['createContactMe'],
    mutationFn: async (data) => {
      try {
        const response = await axios.post('/api/contact-mes', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw {
            status: error?.response?.status,
            headers: error?.response?.headers,
            body: error.response?.data,
          };
        }
        throw error;
      }
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    nProgress.start();
    const response = await mutateCreateContactMe(data);
    nProgress.done();
    setAlert({
      type: 'success',
      active: true,
      message: () =>
        t('submitted-alert-message', { name: response?.data?.name }),
    });
    reset();
  });

  useEffect(() => {
    const error = mutateCreateContactMeError;
    if (!error) return;

    if (error?.body?.code === 'VALIDATION_ERROR') {
      error.body.errors?.forEach((error) => {
        setError(error.field as any, {
          type: 'required',
          message:
            error.code === 'REQUIRED'
              ? t('validation.required')
              : error.code === 'MAX'
                ? t('validation.max', { max: 255 })
                : error.message,
        });
      });
    } else if (error.status === 429) {
      setAlert({
        type: 'danger',
        active: true,
        message: t('too-many-request-message', {
          seconds: error.headers.get('X-RateLimit-Reset') ?? 'some',
        }),
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setAlert({
        type: 'danger',
        active: true,
        message: error.body.message,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    nProgress.done();
  }, [mutateCreateContactMeError]);

  return (
    <div className="contact-me section doodle-background">
      <div className="container">
        <h1 className="title text-center">
          {capitalizeEachWord(t('contact'))}
        </h1>
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-12 d-lg-flex d-none">
            <div className="contact-form-image">
              <Image
                src={'/ask.png'}
                alt="ask"
                width={320}
                height={320}
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-12" data-aos="fade-up">
            <Card className="contact-form-wrapper">
              <h2 className="fw-bold fs-4 text-primary">
                {capitalize(t('say-anything-to-me'))}
              </h2>
              <p className="text-muted fs-6">{t('say-anything-to-me-desc')}</p>
              {alert.active &&
                (alert.type === 'success' ? (
                  <SuccessNotification
                    message={
                      typeof alert.message === 'string'
                        ? alert?.message
                        : alert?.message?.()
                    }
                    onClose={() => setAlert({ active: false })}
                  />
                ) : (
                  <Alert
                    variant={'warning'}
                    onClose={() => setAlert({ active: false })}
                    dismissible
                    transition={true}
                  >
                    <div className="d-flex">
                      <i className={`bi bi-exclamation-circle me-2`}></i>
                      <p className="mb-0">
                        {typeof alert.message === 'string'
                          ? alert?.message
                          : alert?.message?.()}
                      </p>
                    </div>
                  </Alert>
                ))}
              {!(alert.active && alert.type === 'success') && (
                <FormProvider {...methods}>
                  <Form onSubmit={!isSubmitting ? onSubmit : undefined}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label className="fw-bold small">
                        {capitalize(t('name'))}
                      </Form.Label>
                      <Form.Control
                        {...register('name')}
                        type="text"
                        placeholder={t('name-placeholder')}
                        isInvalid={!!errors.name?.message}
                      />
                      {/* <Form.Check
                      name="isAnonymous"
                      className="small text-secondary"
                      inline
                      type="checkbox"
                      label={t('anonymous')}
                    /> */}
                      <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                      <Form.Label className="fw-bold small">{`${capitalize(t('address'))} (${t('optional')})`}</Form.Label>
                      <Form.Control
                        {...register('address')}
                        type="text"
                        placeholder={t('address-placeholder')}
                        isInvalid={!!errors.address?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label className="fw-bold small">
                        {capitalize(t('message'))}
                      </Form.Label>
                      <Form.Control
                        {...register('message')}
                        as="textarea"
                        rows={6}
                        placeholder={t('message-placeholder')}
                        isInvalid={!!errors.message?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                      >
                        <i className="bi bi-send me-2" />
                        {capitalize(t('submit'))}
                      </Button>
                    </div>
                  </Form>
                </FormProvider>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
