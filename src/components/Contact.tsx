"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};


export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl text-center space-y-6"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          variants={item}
          className="text-slate-400 leading-relaxed"
        >
          Open to internship opportunities, collaborations, and meaningful
          discussions around technology, leadership, and impact.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <a
            href="mailto:muhammaddaffa111@gmail.com"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/riyadlussalam"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
