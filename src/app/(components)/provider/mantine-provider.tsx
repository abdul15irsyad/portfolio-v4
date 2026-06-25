import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#eef8fd', // 0
      '#d9eef8', // 1
      '#b6ddf1', // 2
      '#84c6e7', // 3
      '#4da9da', // 4
      '#238dca', // 5
      '#1174b2', // 6
      '#075985', // 7 ← Base / Primary
      '#06486d', // 8
      '#043553', // 9
    ],
  },
  primaryShade: 7,
});

export const CustomMantineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
