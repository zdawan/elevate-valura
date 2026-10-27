import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] sm:min-h-screen flex-col justify-between overflow-hidden pt-6 sm:pt-10" style={{ background: '#F0F6FF' }}>
      {/* ── Background blob shapes (z-0 so they sit above the section bg paint) ── */}
      {/* Large left blob */}
      <div className="pointer-events-none absolute -left-32 top-[18%] z-0 h-[520px] w-[520px] rounded-full bg-[#C7DFFE] opacity-55 blur-[90px]" />
      {/* Large right blob */}
      <div className="pointer-events-none absolute -right-24 top-[30%] z-0 h-[460px] w-[460px] rounded-full bg-[#BFD9FF] opacity-50 blur-[80px]" />
      {/* Center-top soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-80px] z-0 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[#D8EAFF] opacity-60 blur-[70px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-5 sm:px-8 lg:px-10">
        {/* Top Text Content Area */}
        <div className="mx-auto max-w-4xl pt-2 text-center sm:pt-4">
          {/* Top Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0054A1]/20 bg-[#EBF3FF] px-4 py-1.5 text-xs font-semibold tracking-widest text-[#0054A1] uppercase sm:text-xs"
          >
            ELEVATE FINANCIAL SERVICES × VALURA.AI
          </motion.div>

          {/* Main Title (Centered) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-5 text-4xl sm:text-5xl md:text-[3.6rem] font-bold tracking-tight text-[#1A1A2E] leading-[1.15] sm:leading-[1.15]"
          >
            The Global Investment Desk <br className="hidden sm:inline" />
            for Indian Investors
          </motion.h1>

          {/* Supporting Subtitle (Centered) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-gray-500 font-normal leading-relaxed"
          >
            Access 4,000+ US equities, 5–9% USD income notes, and curated pre-IPO deals — from India, regulated through GIFT IFSC, managed by the same research team and RM you already trust.
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            <a
              href="#open-account"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E90C29] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#E90C29]/25 transition-all duration-200 hover:bg-[#C20A23] hover:shadow-xl hover:shadow-[#E90C29]/35 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Open an Account</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#features"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-black hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Explore Markets</span>
              <svg
                className="h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Trust Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs text-gray-600 shadow-sm">
              <span className="font-bold text-[#1A1A2E]">41b+</span>
              <span>Authorised Persons</span>
            </div>
            {/* Divider dot */}
            <span className="hidden sm:block h-1 w-1 rounded-full bg-gray-300" />
            {/* Stat 2 */}
            <div className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs text-gray-600 shadow-sm">
              <span className="font-bold text-[#1A1A2E]">30 yrs</span>
              <span>of research-led wealth advice</span>
            </div>
            {/* Divider dot */}
            <span className="hidden sm:block h-1 w-1 rounded-full bg-gray-300" />
            {/* Stat 3 — Morningstar */}
            <div className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs text-gray-600 shadow-sm">
              <span className="text-amber-400 font-bold tracking-tight">★★★★★</span>
              <span>Morningstar 5+ track record</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Image Mockup Pinned & Clipped at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative mt-8 sm:mt-10 mx-auto w-full max-w-6xl"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0054A1]/10 via-[#B8D9F8]/20 to-[#0054A1]/10 opacity-70 blur-2xl" />

          {/* Image Container Card */}
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-t-2xl sm:rounded-t-3xl border border-b-0 border-gray-200/90 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,84,161,0.14)] sm:p-3.5 max-h-[38vh] sm:max-h-[44vh] md:max-h-[48vh]">
            <div className="relative h-full overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              {/* Top light fade so image emerges gently */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />

              <img
                src="/dashboard.webp"
                alt="Elevate Financial Services × Valura.Ai Dashboard"
                fetchpriority="high"
                className="h-auto w-full object-cover object-top"
              />

              {/* Bottom gradient fade overlay on image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-48 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 via-60% to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL TO EXPLORE INDICATOR AT BOTTOM OF SCREEN */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
          <span className="h-[2px] w-5 rounded-full bg-gray-400 animate-pulse" />
          <span className="uppercase">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
