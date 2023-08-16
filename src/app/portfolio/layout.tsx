import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio - Irsyad Abdul',
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
