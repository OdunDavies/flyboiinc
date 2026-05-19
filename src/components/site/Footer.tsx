const socials = [
  { label: "Instagram", href: "https://instagram.com/flyboinchq" },
  { label: "YouTube", href: "https://www.youtube.com/@KizzDanielchannel" },
  { label: "Roster", href: "#roster" },
  { label: "Releases", href: "#releases" },
  { label: "Tour", href: "#tour" },
  { label: "Contact", href: "#contact" },
];
const legal = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-10 border-t border-white/10 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10">
          <a href="#top" className="font-display text-2xl tracking-[5px] text-white">
            FLYBOI INC
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-[11px] tracking-[2px] uppercase text-white/40 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-7">
          <p className="font-body text-[11px] text-white/25">
            © {new Date().getFullYear()} FLYBOI INC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-[11px] text-white/25 hover:text-white/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}