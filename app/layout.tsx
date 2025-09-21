import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeciSmart - Intelligent Decisions, Accelerated',
  description: 'AI-driven insights, scenario simulations, and collaborative decision-making tools for product managers.',
  keywords: ['product management', 'AI', 'decision making', 'analytics', 'collaboration'],
  authors: [{ name: 'DeciSmart Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
