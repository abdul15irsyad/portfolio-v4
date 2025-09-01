'use client';

import React, { FormEvent } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { isNotEmpty } from '@/utils/validation.util';

export const SearchBar = ({ search, setSearch, setQuerySearch }) => {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNotEmpty(search)) setQuerySearch(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='search-bar mb-3'>
        <InputGroup.Text>
          <i className='bi bi-search'></i>
        </InputGroup.Text>
        <Form.Control
          name='search'
          placeholder={`${t('search-blog-title')}...`}
          value={search ?? ''}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};
