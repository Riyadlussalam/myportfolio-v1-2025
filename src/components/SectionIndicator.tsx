"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = sections.map((s) =>
      document.getElementById(s.id)
    );

    const observers: IntersectionObserver[] = [];

    elements.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.body.scrollHeight;

      // 🔝 HERO fallback
      if (scrollY < windowH * 0.3) {
        setActive(0);
      }

      // 🔻 EXPERIENCE fallback (mentok bawah)
      if (scrollY + windowH >= docH - 50) {
        setActive(sections.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          aria-label={section.label}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            active === index
              ? "bg-emerald-400 scale-125"
              : "bg-slate-600 hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}
