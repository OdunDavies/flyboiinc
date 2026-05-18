import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const releases = [
  {
    year: "2023",
    title: "Maverick",
    type: "Studio Album",
    artist: "Kizz Daniel",
    tint: "from-[#3a1a08] via-[#1a0d04] to-[#050505]",
    accent: "rgba(255,140,40,0.25)",
    spotify: "https://open.spotify.com/album/4HMpwGdCBsfXzCNvfqJ7tD",
    apple: "https://music.apple.com/us/album/maverick/1716818831",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_lXfWnxELIqyzr9p4SShzZdPyzcOIQQE6c",
  },
  {
    year: "2022",
    title: "BUGA (Lo Lo Lo)",
    type: "Single ft. Tekno",
    artist: "Kizz Daniel",
    tint: "from-[#2a2a08] via-[#1a1404] to-[#050505]",
    accent: "rgba(255,200,40,0.3)",
    spotify: "https://open.spotify.com/track/4OcQ0WMKxJTBvqv4PcuVAY",
    apple: "https://music.apple.com/us/album/buga-lo-lo-lo-feat-tekno/1626468020",
    youtube: "https://www.youtube.com/watch?v=Y3DLPYBSpYE",
  },
  {
    year: "2021",
    title: "Barnabas",
    type: "EP",
    artist: "Kizz Daniel",
    tint: "from-[#0a2018] via-[#04140c] to-[#050505]",
    accent: "rgba(60,220,160,0.18)",
    spotify: "https://open.spotify.com/album/3hyUSO7TFvjzAaBaR2gK4q",
    apple: "https://music.apple.com/us/album/barnabas-ep/1591411960",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_kVZQ_pgKb7sOiFD3WqVgvUVm-MqypMHHc",
  },
  {
    year: "2020",
    title: "King Of Love",
    type: "Studio Album",
    artist: "Kizz Daniel",
    tint: "from-[#2a0820] via-[#180414] to-[#050505]",
    accent: "rgba(220,80,180,0.22)",
    spotify: "https://open.spotify.com/album/4nM02nIxRPC4SBOFhgYQHy",
    apple: "https://music.apple.com/us/album/king-of-love/1503558316",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_lTDvBs6kytlqYsf-O5g-Yk5wfdEbKaScY",
  },
  {
    year: "2018",
    title: "No Bad Songz",
    type: "Studio Album",
    artist: "Kizz Daniel",
    tint: "from-[#08182a] via-[#040c18] to-[#050505]",
    accent: "rgba(80,160,220,0.22)",
    spotify: "https://open.spotify.com/album/4iVEepGsCsLpFiOSV0DiUL",
    apple: "https://music.apple.com/us/album/no-bad-songz/1438555158",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_kLpx2INW5e6h7qNCWcLVfWUVk_4tx9-eM",
  },
  {
    year: "2016",
    title: "New Era",
    type: "Debut Album",
    artist: "Kizz Daniel",
    tint: "from-[#1a1a1a] via-[#0d0d0d] to-[#050505]",
    accent: "rgba(255,255,255,0.12)",
    spotify: "https://open.spotify.com/album/5VlbAEt2vwLOgC7zRrtsgI",
    apple: "https://music.apple.com/us/album/new-era/1118330589",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_n6L84B6sN6tFxAQt8FFs9MaXEZTfqUe6Q",
  },
];

export function CatalogueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="releases" ref={ref} className="bg-black py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
              The Catalogue
            </p>
            <h2
              className="font-display text-white leading-[0.9]"
              style={{ fontSize: "clamp(44px, 7vw, 84px)" }}
            >
              Releases
            </h2>
          </div>
          <p className="font-body text-[14px] text-white/45 max-w-sm">
            Six bodies of work. One billion streams. Every release available on every major
            DSP worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className="group"
            >
              <div
                className={`relative aspect-square overflow-hidden bg-gradient-to-br ${r.tint} flex flex-col items-center justify-center p-6 text-center`}
                style={{
                  boxShadow: `inset 0 0 80px ${r.accent}, 0 20px 50px rgba(0,0,0,0.5)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `radial-gradient(ellipse at 50% 30%, ${r.accent}, transparent 65%)`,
                  }}
                />
                <span className="relative font-condensed text-[10px] tracking-[4px] uppercase text-white/40 mb-3">
                  FLYBOI · {r.year}
                </span>
                <span
                  className="relative font-display text-white leading-[0.9] tracking-wider"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                >
                  {r.title}
                </span>
                <span className="relative font-condensed text-[11px] tracking-[3px] uppercase text-white/50 mt-3">
                  {r.artist}
                </span>
              </div>
              <div className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-condensed text-[11px] tracking-[3px] uppercase text-white/75">
                    {r.type}
                  </span>
                  <span className="font-condensed text-[11px] tracking-[3px] uppercase text-brand-gold">
                    {r.year}
                  </span>
                </div>
                <div className="flex gap-3 text-[11px] font-condensed tracking-[2px] uppercase">
                  <a
                    href={r.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    Spotify
                  </a>
                  <span className="text-white/15">·</span>
                  <a
                    href={r.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    Apple
                  </a>
                  <span className="text-white/15">·</span>
                  <a
                    href={r.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
