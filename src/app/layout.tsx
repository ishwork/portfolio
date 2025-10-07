import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Ishwor Khadka',
  description: 'Full Stack Developer specializing in modern web applications',
  openGraph: {
    title: 'Portfolio | Ishwor Khadka',
    description: 'Portfolio of Ishwor Khadka, a Full Stack Developer',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ishwor Khadka Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
