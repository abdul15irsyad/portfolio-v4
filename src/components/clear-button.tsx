import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { capitalizeEachWord } from '@/utils/change-case';

export const ClearButton = ({
  onClick,
  ...props
}: Omit<ButtonProps, 'onClick'> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="outline-danger"
      size="sm"
      style={{ borderRadius: '.75em' }}
      onClick={onClick}
      {...props}
    >
      <i className="bi bi-trash me-1"></i>
      <span>{capitalizeEachWord(t('clear-filter'))}</span>
    </Button>
  );
};
