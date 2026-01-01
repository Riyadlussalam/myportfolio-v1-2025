"use client";

import SocialLinks from "@/components/SocialLinks";
import { useTypewriter } from "@/hooks/useTypewriter";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  const roles = [
    "President of BEM FILKOM UB 2026",
    "UI/UX Enthusiast",
    "Project Management Passionate",
  ];

  const { text, isActive } = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* <HeroBackground /> */}
      <div className="max-w-3xl text-center space-y-6">
        <div className="flex justify-center">
          <span
            className="font-geist inline-flex items-center px-4 py-1.5 rounded-full
            bg-gradient-to-r from-slate-400/20 to-slate-900/20
            border border-slate-700/50
            text-sm tracking-wide text-slate-200 backdrop-blur"
          >
            Hello World, I&apos;m
          </span>
        </div>

        <h1 className="font-geist text-4xl md:text-6xl font-bold tracking-tight">
          M. Daffa Riyadlussalam
        </h1>
        <p className="text-lg md:text-xl h-8">
          <span
            className={`
      inline-flex items-center px-3 py-1 rounded-md
      transition-all duration-500
      ${
        isActive
          ? "bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          : "bg-transparent"
      }
    `}
          >
            <span className="font-medium text-emerald-400">{text}</span>

            <span className="ml-0.5 h-5 w-[2px] bg-emerald-400 animate-blink" />
          </span>
        </p>

        <p className="font-inter text-slate-400 text-lg md:text-xl">
          Information Technology Student of Brawijaya University
        </p>

        <p className="font-inter text-slate-300">
          Bridging technology, leadership, and execution to create real impact.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#"
            className="px-6 py-3 rounded-xl
            bg-gradient-to-r from-slate-700 to-slate-900
            border border-slate-700
            hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
            transition-all duration-300"
          >
            View Resume
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-xl
            border border-slate-700
            hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
            transition-all duration-300"
          >
            See My Work
          </a>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}
