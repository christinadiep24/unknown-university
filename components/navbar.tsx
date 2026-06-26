'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { LogOut, Menu, Moon, Orbit, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { campusRooms } from '@/lib/campus-data';
import { getCurrentUser, signOut } from '@/lib/supabase';

const primaryLinks = campusRooms.filter((room) =>
  ['/library', '/ai-room', '/social', '/startup-lab', '/events'].includes(
    room.href
  )
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
            <Orbit className="h-5 w-5" />
          </div>
          <span>Unknown Metaverse</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((room) => (
            <Link
              key={room.href}
              href={room.href}
              className={`rounded-full px-3 py-2 text-sm transition ${
                pathname === room.href
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground'
              }`}
            >
              {room.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-xl p-2 transition hover:bg-secondary"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 transition hover:bg-secondary lg:hidden"
            aria-label="Open navigation menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="rounded-xl border px-3 py-2 text-sm transition hover:bg-secondary"
                >
                  Profile
                </Link>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Join campus
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t bg-background/95 p-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {campusRooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm transition hover:bg-secondary"
              >
                {room.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 border-t pt-4">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border px-3 py-2 text-center text-sm"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
