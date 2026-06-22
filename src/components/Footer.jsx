"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-3xl font-black text-white"
            >
              Startup<span className="text-blue-500">Forge</span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Connecting startup founders with talented developers,
              designers, marketers, and collaborators to build
              the next generation of successful startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/startups"
                  className="transition hover:text-white"
                >
                  Browse Startups
                </Link>
              </li>

              <li>
                <Link
                  href="/opportunities"
                  className="transition hover:text-white"
                >
                  Browse Opportunities
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="transition hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Social Links
            </h3>

            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-600"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-700"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-700"
              >
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p>📧 contact@startupforge.com</p>
              <p>📱 +880 1234-567890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} StartupForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;