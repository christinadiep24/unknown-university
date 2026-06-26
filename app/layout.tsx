import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ThemeProviderComponent } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unknown University - Online Learning Platform',
  description: 'Learn modern web development, AI, data science, and cloud architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderComponent>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
