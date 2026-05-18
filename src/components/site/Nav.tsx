import { motion } from "framer-motion";

const links = ["Label", "Roster", "Releases", "Tour", "Contact"];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/75 to-transparent"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="font-display text-xl tracking-[4px] text-white">
          FLYBOI <span className="text-brand-gold">INC</span>
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
        <a
          href="https://open.spotify.com/artist/2yczTYG2reJjOZ8Le3DqOK"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-condensed text-[11px] tracking-[2px] uppercase border border-white/25 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
        >
          Listen on Spotify
        </a>
      </div>
    </motion.nav>
  );
}