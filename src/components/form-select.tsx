import { capitalizeEachWord } from '@/utils/change-case';
import React, { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface Props {
  options: { value: string; label: string; selected: boolean }[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect = ({ options, handleChange }: Props) => {
  const { t } = useTranslation();
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={handleChange}
      defaultValue={'all'}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {capitalizeEachWord(t(label))}
        </option>
      ))}
    </Form.Select>
  );
};

export default FormSelect;
