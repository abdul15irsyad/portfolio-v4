'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  useEffect(() => {
    setSearch(searchParams.get('search') ?? '');
  }, [searchParams]);

  const queryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      if (value === '') params.delete(name);
      else params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog?${queryString('search', search ?? '')}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="search-bar mb-3">
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          name="search"
          placeholder="search blog title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
