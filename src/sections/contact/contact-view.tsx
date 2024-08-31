'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
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

export const ContactMeView = () => {
  const { t } = useTranslation();
  const [alert, setAlert] = useState<{
    type?: 'success' | 'danger';
    active: boolean;
    message?: string | (() => string);
  }>({ active: false });

  const schema = z.object({
    name: z.string().min(1, t('validation.required')).trim(),
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
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      isAnonymous: false,
      address: '',
      message: '',
    },
    mode: 'all',
  });
  const {
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
    mutationFn: async (data) =>
      (
        await fetch('/api/contact-mes', {
          method: 'post',
          body: JSON.stringify(data),
        })
      ).json(),
  });

  const onSubmit = handleSubmit(async (data) => {
    nProgress.start();
    const response = await mutateCreateContactMe(data);
    if (response) nProgress.done();
    setAlert({
      type: 'success',
      active: true,
      message: () => t('submitted-alert-message'),
    });
    reset();
  });

  useEffect(() => {
    const error = mutateCreateContactMeError;
    if (!error) return;

    setAlert({ type: 'danger', active: true, message: error.message });
  }, []);

  return (
    <div className="contact section doodle-background">
      <div className="container">
        <h1 className="title text-center">
          {capitalizeEachWord(t('contact-me'))}
        </h1>
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-12 d-lg-flex d-none">
            <div style={{ padding: '8rem' }}>
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
            <Card
              className="mx-3"
              style={{ borderRadius: '1rem', padding: '2rem' }}
            >
              <h2 className="fw-bold fs-4 text-primary">
                {capitalize(t('say-anything-to-me'))}
              </h2>
              <p className="text-muted fs-6">{t('say-anything-to-me-desc')}</p>
              {alert.active && (
                <Alert
                  variant={alert.type}
                  onClose={() => setAlert({ active: false })}
                  dismissible
                  transition={true}
                >
                  <div className="d-flex">
                    <i className="bi bi-check-circle me-2"></i>
                    <p className="mb-0">
                      {typeof alert.message === 'string'
                        ? alert?.message
                        : alert?.message?.()}
                    </p>
                  </div>
                </Alert>
              )}
              {!(alert.active && alert.type === 'success') && (
                <FormProvider {...methods}>
                  <Form onSubmit={onSubmit}>
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
                        rows={4}
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
                        {capitalize(t('submit-message'))}
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
