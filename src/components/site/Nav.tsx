import { motion } from "framer-motion";

const links = ["Music", "Tour", "Videos", "Store", "About"];
const socials = ["IG", "Spotify", "YT"];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/75 to-transparent"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="font-display text-xl tracking-[4px] text-white">
          FLYBOI INC
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-condensed text-[11px] tracking-[2px] uppercase text-white/80 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="font-condensed text-[11px] tracking-[2px] uppercase text-white/80 hover:text-white transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}