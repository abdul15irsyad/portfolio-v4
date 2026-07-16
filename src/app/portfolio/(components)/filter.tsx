'use client';

import { FormSelect } from '@/app/(components)/form-select/form-select';

export const PortfolioFilter = ({
  year,
  setYear,
  portfolioYears,
  type,
  setType,
  portfolioCategories,
}: {
  year: string;
  setYear: (value: string) => void;
  portfolioYears: {
    value: string;
    label: string;
    selected: boolean;
  }[];
  type: string;
  setType: (value: string) => void;
  portfolioCategories: {
    value: string;
    label: string;
    selected: boolean;
  }[];
}) => {
  return (
    <div className='filters'>
      <div className='filter filter-year'>
        <FormSelect
          defaultValue={year}
          options={portfolioYears}
          handleChange={(e) => setYear(e.target?.value)}
        />
      </div>
      <div className='filter filter-type'>
        <FormSelect
          defaultValue={type}
          options={portfolioCategories}
          handleChange={(e) => setType(e.target?.value)}
        />
      </div>
    </div>
  );
};
