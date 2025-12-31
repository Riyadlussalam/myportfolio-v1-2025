"use client";

import { motion } from "framer-motion";

export default function Lanyard() {
  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="fixed top-24 right-6 z-40 cursor-grab"
    >
      <div className="w-56 rounded-2xl border border-slate-700 bg-slate-900/90 backdrop-blur p-4 shadow-lg">
        <p className="text-sm text-slate-400">Identity</p>

        <h3 className="mt-1 font-semibold tracking-tight">
          M. Daffa Riyadlussalam
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          President of BEM FILKOM UB 2026
        </p>

        <div className="mt-3 h-1 w-full rounded-full bg-emerald-500/70" />
      </div>
    </motion.div>
  );
}
