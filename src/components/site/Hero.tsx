import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1000] to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[340px] h-[520px] bg-gradient-to-b from-[rgba(255,200,50,0.06)] to-transparent drop-shadow-[0_0_80px_rgba(255,160,0,0.08)]"
          style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 left-0 p-10 pb-14 md:pb-20"
      >
        <motion.p
          variants={item}
          className="font-condensed text-[11px] tracking-[4px] uppercase text-white/55 mb-2.5"
        >
          Flyboi Inc. Presents
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-white leading-[0.92] tracking-wide"
          style={{ fontSize: "clamp(52px, 9vw, 110px)" }}
        >
          Kizz
          <br />
          Daniel
        </motion.h1>
        <motion.p
          variants={item}
          className="font-condensed text-[13px] tracking-[5px] uppercase text-white/50 mt-3.5"
        >
          The New Album · Twe Twe · Out Now
        </motion.p>
        <motion.button
          variants={item}
          className="mt-7 inline-flex items-center gap-2.5 bg-white/10 border border-white/25 px-6 py-3 font-condensed text-[12px] tracking-[3px] uppercase text-white hover:bg-white/20 hover:border-white/50 transition-all"
        >
          Listen Now
          <span aria-hidden>→</span>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-7 right-10 hidden md:flex flex-col items-center gap-3">
        <motion.div
          animate={{ scaleY: [1, 1.1, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-white origin-top"
        />
        <span className="font-condensed text-[10px] tracking-[3px] uppercase text-white/50">
          Scroll
        </span>
      </div>
    </section>
  );
}