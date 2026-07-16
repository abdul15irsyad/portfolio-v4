'use client';

import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { CustomMantineProvider } from '@/app/(components)/provider/mantine-provider';
import { capitalizeEachWord } from '@/utils/change-case';

export interface PortfolioFilterProps {
  year: string;
  setYear: (value: string | null) => void;
  portfolioYears: {
    value: string;
    label: string;
  }[];
  type: string;
  setType: (value: string | null) => void;
  portfolioCategories: {
    value: string;
    label: string;
  }[];
}

const PortfolioFilter2Content = ({
  year,
  setYear,
  portfolioYears,
  type,
  setType,
  portfolioCategories,
}: PortfolioFilterProps) => {
  const { t } = useTranslation();
  return (
    <div className='filters'>
      <div className='filter filter-year'>
        <Select
          value={year}
          data={portfolioYears.map(({ value, label }) => ({
            value,
            label: capitalizeEachWord(t(label)),
          }))}
          onChange={(value) => setYear(value)}
        />
      </div>
      <div className='filter filter-type'>
        <Select
          value={type}
          data={portfolioCategories.map(({ value, label }) => ({
            value,
            label: capitalizeEachWord(t(label)),
          }))}
          onChange={(value) => setType(value)}
        />
      </div>
    </div>
  );
};

export const PortfolioFilter2 = (props: PortfolioFilterProps) => (
  <CustomMantineProvider>
    <PortfolioFilter2Content {...props} />
  </CustomMantineProvider>
);
