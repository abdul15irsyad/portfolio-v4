import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { APP_NAME } from '@/configs/app.config';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import MyNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnalyticsProvider from '@/components/Analytics';

const plusJakartaSans = Plus_Jakarta_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  metadataBase: new URL('https://irsyadabdul.my.id/'),
  other: {
    'google-site-verification': '-204Rp6WHentTB7kMjizFhmMKYllQEah-eSEZ-SyG8A',
  },
  keywords: [
    'backend developer',
    'fullstack developer',
    'frontend developer',
    'freelance',
    'website',
    'portfolio',
    'blog',
    'programming',
    'project',
  ],
  twitter: {
    title: APP_NAME,
    images: '/meta-image.jpg',
    description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  },
  openGraph: {
    url: new URL('https://irsyadabdul.my.id/'),
    title: APP_NAME,
    images: '/meta-image.jpg',
    description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <AnalyticsProvider>
          <MyNavbar />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
