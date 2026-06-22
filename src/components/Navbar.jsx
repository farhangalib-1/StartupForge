"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Startups", href: "/startups" },
    { name: "Browse Opportunities", href: "/opportunities" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight">
            Startup
            <span className="text-blue-600">Forge</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 rounded-full bg-gray-100 p-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t md:hidden">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-2 border-t pt-4">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-xl bg-black px-4 py-3 text-center font-medium text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;