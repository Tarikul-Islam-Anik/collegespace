import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import { Flex } from '@radix-ui/themes';
import { Inter as FontSans } from 'next/font/google';
import { siteConfig } from '@/config/site';
import Providers from '../context/providers';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import Main from './components/main';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <Flex direction='column' className='relative min-h-screen'>
            <SiteHeader />
            <Main>{children}</Main>
            <SiteFooter />
          </Flex>
          <Toaster position='bottom-left' />
        </Providers>
      </body>
    </html>
  );
}
