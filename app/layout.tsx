import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parsa Hesam — Software Engineer',
  description:
    'Parsa Hesam is a software engineer focused on thoughtful products and reliable systems.',
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
