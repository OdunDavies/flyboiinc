import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  label: string;
  title: string;
  titleLine2: string;
  description: string;
  albumName: string;
  artistName: string;
  accentColor: string;
  bgTint?: string;
  reverse?: boolean;
}

export function AlbumSection({
  label,
  title,
  titleLine2,
  description,
  albumName,
  artistName,
  accentColor,
  bgTint = "from-[#0a0a0a] via-[#1a1000] to-[#0d0d0d]",
  reverse = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`relative w-full min-h-screen flex items-center overflow-hidden bg-[#060606] ${
        reverse ? "md:justify-end" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 max-w-[520px] px-10 md:px-16 py-20 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <p className={`font-condensed text-[11px] tracking-[4px] uppercase mb-4 ${accentColor}`}>
          {label}
        </p>
        <h2
          className="font-display text-white leading-[0.9]"
          style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
        >
          {title}
          <br />
          {titleLine2}
        </h2>
        <p className="font-body text-[14px] leading-[1.7] text-white/50 mt-5 max-w-[380px]">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="bg-white text-black px-6 py-3 font-condensed text-[12px] tracking-[3px] uppercase hover:bg-white/85 transition-colors">
            Stream Album
          </button>
          <button className="border border-white/25 text-white px-6 py-3 font-condensed text-[12px] tracking-[3px] uppercase hover:border-white/60 transition-colors">
            Watch Video
          </button>
        </div>
      </motion.div>

      <div
        className={`absolute top-0 bottom-0 w-[55%] hidden md:flex items-center justify-center ${
          reverse ? "left-0" : "right-0"
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${bgTint}`} />
        <div
          className={`absolute inset-0 ${
            reverse
              ? "bg-gradient-to-l from-black/92 via-black/40 to-transparent"
              : "bg-gradient-to-r from-black/92 via-black/40 to-transparent"
          }`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[min(420px,70%)] aspect-square flex flex-col items-center justify-center text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(255,180,0,0.18), transparent 70%), linear-gradient(160deg, #1a1408, #050505)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.6)",
          }}
        >
          <span className="font-display text-5xl tracking-[6px] text-white">{albumName}</span>
          <span className="font-condensed text-[13px] tracking-[5px] uppercase text-white/35 mt-3">
            {artistName}
          </span>
        </motion.div>
      </div>
    </section>
  );
}