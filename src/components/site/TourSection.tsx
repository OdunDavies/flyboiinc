import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dates = [
  { date: "Jul 12, 2025", venue: "O2 Academy Brixton", city: "London, United Kingdom" },
  { date: "Jul 19, 2025", venue: "Hammerstein Ballroom", city: "New York, USA" },
  { date: "Aug 02, 2025", venue: "Afro Nation", city: "Portimão, Portugal" },
  { date: "Aug 23, 2025", venue: "Eko Convention Centre", city: "Lagos, Nigeria" },
  {
    date: "Sep 06, 2025",
    venue: "Accra International Conference Centre",
    city: "Accra, Ghana",
  },
];

export function TourSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#060606] py-24 flex justify-center">
      <div className="w-full max-w-[900px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
            On Tour
          </p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(40px, 7vw, 90px)" }}
          >
            Live Dates
          </h2>
        </motion.div>
        <div>
          {dates.map((d, i) => (
            <motion.div
              key={d.date}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-pointer gap-4"
            >
              <span className="font-condensed text-[12px] tracking-[3px] uppercase text-brand-gold min-w-[110px]">
                {d.date}
              </span>
              <div className="flex-1">
                <div className="font-condensed text-[16px] md:text-[18px] tracking-wider text-white">
                  {d.venue}
                </div>
                <div className="font-body font-light text-[13px] text-white/40">{d.city}</div>
              </div>
              <a
                href="#"
                className="font-condensed text-[11px] tracking-[2px] uppercase border border-white/15 px-4 py-2 text-white/60 hover:text-white hover:border-white/45 transition-all whitespace-nowrap"
              >
                Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}