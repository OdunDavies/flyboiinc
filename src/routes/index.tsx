import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { AlbumSection } from "@/components/site/AlbumSection";
import { SingleSection } from "@/components/site/SingleSection";
import { TourSection } from "@/components/site/TourSection";
import { MerchBanner } from "@/components/site/MerchBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FLYBOI INC — Kizz Daniel Official" },
      {
        name: "description",
        content:
          "FLYBOI INC — the official record label of Kizz Daniel. New album Twe Twe out now. Tour dates, music, and exclusive merch.",
      },
      { property: "og:title", content: "FLYBOI INC — Kizz Daniel Official" },
      {
        property: "og:description",
        content: "The official home of Kizz Daniel & FLYBOI INC.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-black text-white font-body min-h-screen">
      <Nav />
      <Hero />
      <AlbumSection
        label="The New Album"
        title="Twe"
        titleLine2="Twe"
        description="The genre-defining new project from Kizz Daniel. Eleven tracks of unapologetic vibe, rhythm, and movement — produced across Lagos, London, and Los Angeles."
        albumName="TWE TWE"
        artistName="Kizz Daniel"
        accentColor="text-brand-gold"
        bgTint="from-[#0a0a0a] via-[#1a1000] to-[#0d0d0d]"
      />
      <AlbumSection
        label="Fan Favourite"
        title="No"
        titleLine2="Do"
        description="The smash that took over the airwaves. A timeless reminder of what made Kizz Daniel the voice of a generation."
        albumName="NO DO"
        artistName="Kizz Daniel"
        accentColor="text-brand-gold-dim"
        bgTint="from-[#0a0a0a] via-[#10140a] to-[#0d0d0d]"
        reverse
      />
      <SingleSection />
      <TourSection />
      <MerchBanner />
      <Footer />
    </div>
  );
}
