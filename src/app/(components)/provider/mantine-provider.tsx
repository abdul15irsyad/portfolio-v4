import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#eef8fd',
      '#d9eef8',
      '#b6ddf1',
      '#84c6e7',
      '#4da9da',
      '#238dca',
      '#1174b2',
      '#075985',
      '#06486d',
      '#043553',
    ],
  },
  primaryShade: 7,
  fontFamily: 'outfit',
});

export const CustomMantineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
