import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import '@/app/(components)/layout/navbar.css';
import 'aos/dist/aos.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Inter, Outfit } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import React from 'react';

import { Footer, Navbar } from '@/app/(components)/layout';
import { ScrollToTop } from '@/app/(components)/layout/scroll-to-top';
import { ProgressBar } from '@/app/(components)/progress-bar/progress-bar';
import { AllProvider } from '@/app/(components)/provider/all-provider';
import { APP_NAME, BASE_URL } from '@/app/(configs)/app.config';
import { yearsOfExperience } from '@/data/work-experiences.data';

export const geist = Geist({
  fallback: ['sans-serif'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
export const inter = Inter({
  fallback: ['sans-serif'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
export const outfit = Outfit({
  fallback: ['sans-serif'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const commonMetaData = {
  title: APP_NAME,
  images: `${BASE_URL}/me2.jpg`,
  description: `Creative and detail-oriented Full Stack Developer with over ${yearsOfExperience}+ years of experience building scalable web applications and backend systems using modern JavaScript/TypeScript stacks. Specializing in Node.js, Golang, and REST API and WebSocket, with strong focus on performance, maintainability, and elegant user experiences`,
};

export const metadata: Metadata = {
  title: `${APP_NAME} - Web Portfolio`,
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  themeColor: '#075985',
  metadataBase: new URL(BASE_URL),
  other: {
    'google-site-verification': '-204Rp6WHentTB7kMjizFhmMKYllQEah-eSEZ-SyG8A',
  },
  keywords: [
    'irsyad abdul',
    'irsyad',
    'abdul',
    'web',
    'developer',
    'backend',
    'fullstack',
    'frontend',
    'freelance',
    'website',
    'portfolio',
    'blog',
    'programming',
    'project',
  ],
  twitter: { ...commonMetaData },
  openGraph: {
    url: new URL(BASE_URL),
    type: 'website',
    locale: 'id_ID',
    ...commonMetaData,
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} ${inter.style.fontFamily} ${geist.style.fontFamily}`}
      >
        <AllProvider>
          <NuqsAdapter>
            <ProgressBar />
            <Navbar />
            {children}
            <SpeedInsights />
            <Footer />
          </NuqsAdapter>
        </AllProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
