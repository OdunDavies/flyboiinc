import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import k1 from "@/assets/kizz-1.jpg";
import k3 from "@/assets/kizz-3.jpg";
import k4 from "@/assets/kizz-4.jpg";

export function ArtistSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roster"
      ref={ref}
      className="relative bg-[#060606] py-28 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
            The Roster · Flagship Artist
          </p>
          <h2
            className="font-display text-white leading-[0.9]"
            style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
          >
            Kizz Daniel
          </h2>
          <p className="font-condensed text-[12px] tracking-[4px] uppercase text-white/40 mt-3">
            Founder · Recording Artist · Songwriter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 aspect-[3/4] overflow-hidden"
          >
            <img src={k4} alt="Kizz Daniel portrait" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-5 font-body text-[15px] leading-[1.8] text-white/65 md:pt-6"
          >
            <p>
              Oluwatobiloba Daniel Anidugbe, known professionally as
              <span className="text-white"> Kizz Daniel</span>, is a Nigerian singer, songwriter
              and the founder of FLYBOI INC. He first rose to fame in 2014 with the hit
              "Woju" and has since become one of Africa's most consistently charting artists.
            </p>
            <p>
              His 2022 single <span className="text-white">BUGA (Lo Lo Lo)</span> ft. Tekno
              became a worldwide phenomenon — racking up over a billion combined streams,
              topping charts across 15+ African nations and earning a 2023 Grammy nomination.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href="https://open.spotify.com/artist/2yczTYG2reJjOZ8Le3DqOK"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-5 py-3 font-condensed text-[11px] tracking-[3px] uppercase text-white/80 hover:bg-white hover:text-black transition-colors text-center"
              >
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/kizz-daniel/919393321"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-5 py-3 font-condensed text-[11px] tracking-[3px] uppercase text-white/80 hover:bg-white hover:text-black transition-colors text-center"
              >
                Apple Music
              </a>
              <a
                href="https://www.instagram.com/kizzdaniel"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-5 py-3 font-condensed text-[11px] tracking-[3px] uppercase text-white/80 hover:bg-white hover:text-black transition-colors text-center"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@KizzDanielVEVO"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-5 py-3 font-condensed text-[11px] tracking-[3px] uppercase text-white/80 hover:bg-white hover:text-black transition-colors text-center"
              >
                YouTube
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={k1} alt="Kizz Daniel editorial" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={k3} alt="Kizz Daniel editorial" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
