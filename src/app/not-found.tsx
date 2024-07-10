import './not-found.css';
import { Metadata } from 'next';
import React from 'react';
import { NotFoundView } from '@/sections/not-found/not-found-view';

export const metadata: Metadata = {
  title: 'Page Not Found - Irsyad Abdul',
};

const NotFound = () => {
  return <NotFoundView />;
};

export default NotFound;
