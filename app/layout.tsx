import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ThemeProviderComponent } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unknown Metaverse',
  description:
    'A 2D virtual campus for learning, realtime community, AI support, events, and portfolio building.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProviderComponent>
          <Navbar />
          <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_34rem),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_28rem)]">
            {children}
          </main>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
