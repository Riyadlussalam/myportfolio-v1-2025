"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "President",
    org: "BEM FILKOM UB",
    year: "2026",
    desc: "Leading faculty-wide student organization, coordinating departments, and driving strategic initiatives impacting thousands of students.",
  },
  {
    role: "Staff Expert",
    org: "Department of Human Resource Development",
    year: "2024",
    desc: "Contributed to internal development programs, talent management initiatives, and organizational capacity building.",
  },
  {
    role: "Committee Lead",
    org: "Various Academic & Non-Academic Events",
    year: "2023–2024",
    desc: "Led and coordinated teams in executing large-scale student events, ensuring smooth cross-division collaboration.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full space-y-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Experience
        </h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="border border-slate-800 rounded-xl p-6 bg-slate-900/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  {exp.role} — {exp.org}
                </h3>
                <span className="text-sm text-slate-400">
                  {exp.year}
                </span>
              </div>

              <p className="mt-3 text-slate-300 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
