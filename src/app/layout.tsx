'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import MyNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { initGA, logPageView } from '@/utils/google-analytics';

const plusJakartaSans = Plus_Jakarta_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Irsyad Abdul',
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  openGraph: {
    images: '/meta-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
