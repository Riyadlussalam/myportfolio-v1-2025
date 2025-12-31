"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin:
            section.id === "home"
              ? "0px 0px -60% 0px"
              : "-50% 0px -50% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div
        className="
          mx-auto
          max-w-6xl
          rounded-2xl
          bg-black/40
          backdrop-blur-md
          border border-white/10
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]
        "
      >
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Brand */}
          <span className="font-semibold tracking-tight">
            Daffa Riyadlussalam
          </span>

          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`
                  transition-all duration-300
                  ${
                    activeSection === section.id
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {section.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                md:hidden
                border-t
                border-white/10
                bg-black/60
                backdrop-blur-md
                rounded-b-2xl
              "
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      transition
                      ${
                        activeSection === section.id
                          ? "text-white font-medium"
                          : "text-white/60"
                      }
                    `}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
