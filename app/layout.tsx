import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://parsa-hesam.parsahesam58.chatgpt.site'),
  title: 'Parsa Hesam — Software Engineer',
  description:
    'Parsa Hesam is a software engineer focused on thoughtful products and reliable systems.',
  openGraph: {
    title: 'Parsa Hesam — Software Engineer',
    description:
      'Thoughtful products, reliable systems, and software that feels obvious.',
    type: 'website',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parsa Hesam — Software Engineer',
    description:
      'Thoughtful products, reliable systems, and software that feels obvious.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
