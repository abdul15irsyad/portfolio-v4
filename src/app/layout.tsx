import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { APP_NAME, BASE_URL } from '@/configs/app.config';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import MyNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnalyticsProvider from '@/components/Analytics';
import ReactQuery from '@/components/ReactQuery';
import 'aos/dist/aos.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
});

const commonMetaData = {
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
        <ReactQuery>
          <AnalyticsProvider>
            <MyNavbar />
            {children}
            <Footer />
          </AnalyticsProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
