import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const platforms = ["Spotify", "Apple Music", "YouTube", "Audiomack", "Boomplay"];

export function SingleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#050505] py-24 px-6 flex flex-col items-center text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-4"
      >
        Latest Single
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-white leading-none"
        style={{ fontSize: "clamp(40px, 7vw, 90px)" }}
      >
        BUGA
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[min(320px,80%)] aspect-square my-10 relative overflow-hidden flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,180,0,0.12), transparent 65%), linear-gradient(160deg, #161208, #050505)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
        }}
      >
        <span className="font-display text-[40px] tracking-[4px] text-brand-gold">BUGA</span>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-[700px]">
        {platforms.map((p) => (
          <a
            key={p}
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 font-condensed text-[12px] tracking-[2px] uppercase text-white/65 hover:border-white/45 hover:text-white transition-all"
          >
            {p}
          </a>
        ))}
      </div>
    </section>
  );
}