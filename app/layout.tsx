import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { siteConfig } from '@/config/site';
import Providers from '@/context/providers';
import { Flex } from '@/components/layout/flex';
import SiteHeader from '@/app/components/layout/site-header';
import SiteFooter from '@/app/components/layout/site-footer';

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
          'min-h-screen scroll-smooth bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <Flex position='relative' direction='column' className='min-h-screen'>
            <SiteHeader />
            <main className='flex-1'>{children}</main>
            <SiteFooter />
          </Flex>
          <Toaster position='bottom-left' />
        </Providers>
        <script async src="https://cdn.splitbee.io/sb.js" />
      </body>
    </html>
  );
}
