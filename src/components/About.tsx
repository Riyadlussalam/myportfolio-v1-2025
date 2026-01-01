"use client";

import AboutImage from "./AboutImage";
import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="origin-left h-px w-full bg-gradient-to-r from-emerald-400/40 via-slate-700/40 to-transparent"
    />
  );
}

const skills = [
  "UI/UX Design",
  "Product Thinking",
  "Project Management",
  "Leadership",
  "Public Speaking",
  "Social Media Management",
];

function Skills() {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="
            px-4 py-2 rounded-xl text-sm
            border border-slate-700
            text-slate-300
            bg-slate-900/40
            backdrop-blur
            transition
            hover:border-emerald-400/60
            hover:text-emerald-300
            hover:shadow-[0_0_20px_-6px_rgba(16,185,129,0.6)]
          "
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

const education = [
  {
    year: "2023 – Now",
    title: "Brawijaya University",
    desc: "Bachelor of Information Technology",
    grade: "3.86 / 4.00 GPA",
  },
  {
    year: "2020 – 2023",
    title: "SMA Negeri 2 Kendal",
    desc: "Science Program",
    grade: "87.56 Average Score",
  },
];

function Education() {
  return (
    <div className="relative pl-6 space-y-8">
      <div className="absolute left-[2px] top-0 h-full w-px bg-emerald-400/60" />

      {education.map((edu, i) => (
        <div key={i} className="relative">
          <span className="absolute -left-[26.5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />

          <div className="space-y-1">
            <span className=" text-xs text-slate-500">{edu.year}</span>
            <h4 className="font-medium text-white">{edu.title}</h4>
            <p className="text-sm text-slate-400">{edu.desc}</p>
            <p className="text-xs text-emerald-400">{edu.grade}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#000000] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="md:text-7xl text-emerald-400 text-sm tracking-tight font-semibold">
              Meet Daffa
            </h2>
          </div>

          <p className="text-slate-300 leading-relaxed">
            I am an Information Technology student at Universitas Brawijaya with
            a strong interest in leadership, UI/UX design, and project
            execution. I enjoy bridging technology with people to create
            initiatives that deliver real and measurable impact.
          </p>

          <Divider />

          <Skills />

          <Divider />

          <Education />
        </div>

        <div className="relative h-[520px] md:h-[640px] rounded-2xl overflow-hidden">
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
