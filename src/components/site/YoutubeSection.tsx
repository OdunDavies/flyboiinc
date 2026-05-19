import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  { id: "Y3DLPYBSpYE", title: "Buga (Lo Lo Lo) ft. Tekno" },
  { id: "Im_VleEWPDQ", title: "Twe Twe" },
  { id: "qFLpRG9P6Yo", title: "Cough (Odo) ft. Becky G" },
  { id: "rk7Ept6dLeI", title: "Lie" },
  { id: "Wd5Bb6Y9C-w", title: "RTID (Rich Till I Die)" },
  { id: "9w_qO9Pp8WI", title: "Shu-Peru" },
];

export function YoutubeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="videos"
      ref={ref}
      className="bg-black py-20 md:py-28 px-5 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
              On YouTube
            </p>
            <h2
              className="font-display text-white leading-[0.9]"
              style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
            >
              Watch
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KizzDanielchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-[11px] tracking-[3px] uppercase border border-white/25 px-5 py-3 text-white/85 hover:bg-white hover:text-black transition-colors self-start"
          >
            Subscribe on YouTube
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group"
            >
              <div
                className="relative aspect-video overflow-hidden bg-[#0a0a0a]"
                style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="pt-4 font-condensed text-[13px] tracking-[2px] uppercase text-white/75">
                {v.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
