import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Seema Portfolio',
  description:
    'Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience',
  keywords: [
    'Seema',
    'Portfolio',
    'Developer',
    'AI',
    'Interactive',
    'Memoji',
    'Web Development',
    'Full Stack',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Seema',
      url: 'https://seema',
    },
  ],
  creator: 'Seema',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seema',
    title: 'Seema Portfolio',
    description:
      'Interactive portfolio with an AI-powered Memoji that answers questions about me',
    siteName: 'Seema Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seema Portfolio',
    description:
      'Interactive portfolio with an AI-powered Memoji that answers questions about me',
    creator: '@seema',
  },
  icons: {
    icon: [
      {
        url: '/logo-toukoum.svg?v=3',
        sizes: 'any',
      },
    ],
    shortcut: '/logo-toukoum.svg?v=3',
    apple: '/logo-toukoum.svg?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/logo-toukoum.svg" sizes="any" />
        <Script
          defer
          data-website-id="68e067ba369b1b7f1f096056"
          data-domain="toukoum.fr"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
        ></Script>
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <main className="flex min-h-screen flex-col">{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
