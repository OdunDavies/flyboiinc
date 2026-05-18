import { motion } from "framer-motion";

export function MerchBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative w-full min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#111008] px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(255,180,0,0.08),transparent_70%)]" />
      <div className="relative z-10">
        <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-4">
          Shop The Drop
        </p>
        <h2
          className="font-display text-white leading-[0.88]"
          style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
        >
          FLYBOI
          <br />
          STORE
        </h2>
        <p className="font-condensed text-[12px] tracking-[6px] uppercase text-brand-gold-dim mt-4">
          Exclusive Drops · Limited Edition · Ships Worldwide
        </p>
        <button className="mt-10 bg-white text-black px-8 py-4 font-condensed text-[12px] tracking-[3px] uppercase hover:bg-white/85 transition-colors">
          Visit Store
        </button>
      </div>
    </motion.section>
  );
}