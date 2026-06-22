"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroUi = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Effect */}
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl"
        >
          Build Your Startup
          <span className="block text-blue-600">
            With The Right Team
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl"
        >
          StartupForge connects startup founders with talented developers,
          designers, marketers, and professionals. Publish your startup idea,
          recruit collaborators, and turn vision into reality.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10"
        >
          <Link
            href="/startups"
            className="inline-flex items-center rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900"
          >
            Explore Startups
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroUi;