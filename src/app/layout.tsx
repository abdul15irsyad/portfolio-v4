import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
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
  title: 'Irsyad Abdul',
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
  metadataBase: new URL('https://abdul15irsyad.vercel.app/'),
  openGraph: {
    images: '/meta-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
