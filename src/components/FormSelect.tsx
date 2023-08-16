import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  options: { value: string; label: string; selected: boolean }[];
  handleChange?: (e) => void;
}

const FormSelect = ({ options, handleChange }: Props) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={handleChange}
      defaultValue={'all'}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
};

export default FormSelect;
