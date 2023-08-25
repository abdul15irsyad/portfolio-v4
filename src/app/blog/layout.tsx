import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog - Irsyad Abdul',
  description: 'My blog for sharing about programming or anything',
  twitter: {
    title: 'Blog - Irsyad Abdul',
    description: 'My blog for sharing about programming or anything',
  },
  openGraph: {
    title: 'Blog - Irsyad Abdul',
    description: 'My blog for sharing about programming or anything',
  },
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
