'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
            U
          </div>
          <span>Unknown University</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/programs" className="text-sm hover:text-primary transition">
            Programs
          </Link>
          <Link href="/dashboard" className="text-sm hover:text-primary transition">
            Dashboard
          </Link>
          <Link href="/community" className="text-sm hover:text-primary transition">
            Community
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-secondary rounded-lg transition"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <Link
            href="/profile"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-sm font-medium hidden md:block"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-secondary/50 p-4">
          <div className="flex flex-col gap-4">
            <Link href="/programs" className="text-sm hover:text-primary transition">
              Programs
            </Link>
            <Link href="/dashboard" className="text-sm hover:text-primary transition">
              Dashboard
            </Link>
            <Link href="/community" className="text-sm hover:text-primary transition">
              Community
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
