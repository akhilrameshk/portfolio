// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akhil Ramesh K | Senior Full Stack Developer',
  description: 'Portfolio of Akhil Ramesh K - Senior Full Stack Developer with 10+ years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#000000' }}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000000' }}>
        {children}
      </body>
    </html>
  );
}