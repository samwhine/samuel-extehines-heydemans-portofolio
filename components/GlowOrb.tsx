"use client";
import { motion } from "framer-motion";

export default function GlowOrb() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[70vh] -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute left-1/2 bottom-[-30%] -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #E8B75C 0%, #4FD1C5 35%, #6C63FF 60%, transparent 72%)",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 bottom-[-20%] -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent" />
    </div>
  );
}
