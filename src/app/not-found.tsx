import './not-found.css';

import { Metadata } from 'next';

import { NotFoundView } from '@/app/(components)/not-found-view';

export const metadata: Metadata = {
  title: 'Page Not Found - Irsyad Abdul',
};

const NotFound = () => {
  return <NotFoundView />;
};

export default NotFound;
