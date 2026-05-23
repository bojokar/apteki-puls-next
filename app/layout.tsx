import Box from '@mui/material/Box';
import Script from 'next/script';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Денонощни аптеки Пулс',
  description: 'Денонощни аптеки Пулс - аптеки в Бургас с грижа, продукти и промоции за цялото семейство.',
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="bg">
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FZBFWVVZ6D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FZBFWVVZ6D');
          `}
        </Script>
        <Providers>
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
