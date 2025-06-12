import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import '@/components/layout/navbar.css';
import 'aos/dist/aos.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Footer, Navbar } from '@/components/layout';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { ProgressBar } from '@/components/progress-bar/progress-bar';
import { AllProvider } from '@/components/provider/all-provider';
import { APP_NAME, BASE_URL } from '@/configs/app.config';

const plusJakartaSans = Plus_Jakarta_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
  fallback: ['sans-serif'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

// const figtree = Figtree({
//   style: 'normal',
//   subsets: ['latin-ext'],
//   fallback: ['sans-serif'],
// });

export const commonMetaData = {
  title: APP_NAME,
  // images: `${BASE_URL}/meta-image.jpg`,
  images: `${BASE_URL}/me2.jpg`,
  description: `Hello, I'm Irsyad Abdul, I have experience in PHP, Node JS, Golang and also several frameworks such as Laravel, Express JS, Nest JS and Gin`,
};

export const metadata: Metadata = {
  title: `${APP_NAME} - Web Portfolio`,
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  // themeColor: '#40b193',
  // themeColor: '#075985',
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
    <html lang="en">
      <body className={plusJakartaSans.className}>
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
