"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BannerItem = {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  gradient: string;
};

const banners: BannerItem[] = [
  {
    label: "Destaque Institucional",
    title: "Portfólio Multissetorial com Solidez de +25 anos",
    subtitle: "Soluções em comércio, logística, indústria e agronegócio para todo o mercado angolano.",
    cta: "Solicitar apresentação comercial",
    image: "/banners/used/leadership-team.jpg",
    gradient: "from-[var(--safri-red)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
  {
    label: "Expansão de Negócios",
    title: "Infraestrutura, transporte e distribuição para grandes operações",
    subtitle: "Atendemos B2B e B2C com capacidade operacional em várias províncias.",
    cta: "Falar com equipe de vendas",
    image: "/banners/used/warehouse-operations.jpg",
    gradient: "from-[var(--safri-blue)]/20 via-transparent to-[var(--safri-red)]/20",
  },
  {
    label: "Parcerias Estratégicas",
    title: "Projetos com foco em crescimento sustentável em Angola",
    subtitle: "Construímos relações de longo prazo com eficiência, transparência e resultados.",
    cta: "Agendar reunião",
    image: "/banners/used/africa-network.jpg",
    gradient: "from-[var(--accent)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
  {
    label: "Operação Industrial",
    title: "Capacidade técnica para fabricação metálica e projetos de infraestrutura",
    subtitle: "Qualidade, produtividade e compromisso com prazos para grandes demandas.",
    cta: "Conhecer capacidade industrial",
    image: "/banners/used/metal-fabrication.jpg",
    gradient: "from-[var(--safri-red)]/20 via-transparent to-[var(--accent)]/20",
  },
  {
    label: "Agro-Pecuária",
    title: "Tecnologia no campo para uma produção mais eficiente e sustentável",
    subtitle: "Integração de inovação, monitoramento e escala operacional no setor agrícola.",
    cta: "Ver soluções agro",
    image: "/banners/used/agro-drone.jpg",
    gradient: "from-[var(--accent)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
];

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section id="banners" className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Espaço para Mídia</p>
        <h2 className="mt-2 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Banners institucionais</h2>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] shadow-2xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={banners[current].image}
              alt={banners[current].title}
              fill
              priority={current === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
            <div className={`absolute inset-0 bg-gradient-to-br ${banners[current].gradient}`} />

            <div className="relative z-10 flex h-full items-end p-6 md:p-10">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {banners[current].label}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white md:text-5xl">
                  {banners[current].title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                  {banners[current].subtitle}
                </p>
                <p className="mt-5 inline-flex rounded-lg bg-[var(--safri-red)] px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {banners[current].cta}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
              <div className="h-full w-1/3 bg-[var(--safri-red-light)]" key={current} />
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 hover:shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 hover:shadow-lg"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2 md:gap-3">
          {banners.map((banner, index) => (
            <button
              key={banner.title}
              onClick={() => setCurrent(index)}
              className={`relative overflow-hidden rounded-xl border transition ${
                index === current
                  ? "border-[var(--safri-red-light)] shadow-lg"
                  : "border-[var(--card-border)] opacity-70 hover:opacity-100"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={banner.image} alt={banner.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
