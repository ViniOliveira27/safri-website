import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BannerCarousel } from "@/components/sections/BannerCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { MetricsSection } from "@/components/sections/MetricsSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Conheça a SAFRI Comercial, Lda.: mais de 25 anos de experiência com atuação em comércio, logística, indústria, educação e agro-pecuária.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAFRI Comercial, Lda.",
  url: "https://www.safri.co.ao",
  email: "safri@safri.co.ao",
  telephone: "00244 248 200 287",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Diogo Cão",
    addressLocality: "Kuito",
    addressRegion: "Bié",
    addressCountry: "AO",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <BannerCarousel />
      <AboutSection />
      <ServicesGrid />
      <CeoMessage />
      <MetricsSection />
    </main>
  );
}
