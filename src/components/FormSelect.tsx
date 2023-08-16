import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  options: { value: string; label: string; selected: boolean }[];
}

const FormSelect = ({ options }: Props) => {
  return (
    <Form.Select aria-label="Default select example">
      {options.map(({ value, label, selected }) => (
        <option value={value} selected={selected}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
};

export default FormSelect;
