import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import '@/components/layout/navbar.css';
import { APP_NAME, BASE_URL } from '@/configs/app.config';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Footer, Navbar } from '@/components/layout';
import 'aos/dist/aos.css';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { AllProvider } from '@/components/provider/all-provider';

const plusJakartaSans = Plus_Jakarta_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
  fallback: ['sans-serif'],
});

// const figtree = Figtree({
//   style: 'normal',
//   subsets: ['latin-ext'],
//   fallback: ['sans-serif'],
// });

export const commonMetaData = {
  title: APP_NAME,
  images: `${BASE_URL}/meta-image.jpg`,
  description: `Hello, I'm Irsyad Abdul, I have experience in PHP, Node JS, Golang and also several frameworks such as Laravel, Express JS, Nest JS and Gin`,
};

export const metadata: Metadata = {
  title: `${APP_NAME} - Web Portfolio`,
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  themeColor: '#40b193',
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
          <Navbar />
          {children}
          <Footer />
        </AllProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
