import { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { capitalizeEachWord } from '@/utils/change-case';

interface Props {
  defaultValue?: string;
  options: { value: string; label: string; selected: boolean }[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

export const FormSelect = ({
  defaultValue = 'all',
  options,
  handleChange,
}: Props) => {
  const { t } = useTranslation();
  return (
    <Form.Select
      aria-label='Default select example'
      onChange={handleChange}
      defaultValue={defaultValue}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {capitalizeEachWord(t(label))}
        </option>
      ))}
    </Form.Select>
  );
};
