'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type Prop = {
  queryString: (name: string, value: string) => string;
};

const SearchBar = ({ queryString }: Prop) => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search'));

  useEffect(() => {
    setSearch(searchParams.get('search'));
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) router.push(`/blog?${queryString('search', search)}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="search-bar mb-3">
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          name="search"
          placeholder={`${t('search-blog-title')}...`}
          value={search ?? ''}
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
