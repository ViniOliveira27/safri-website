"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">
              Solidez + 25 Anos
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              Crescimento<br />
              <span className="text-[var(--safri-red-light)]">Estratégico</span>
              <br />
              em Angola
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Solução multissetorial com expertise em comércio, logística, indústria, turismo, educação e agronegócio.
              Parceiro certo para o crescimento sustentável do seu negócio.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contato" className="group">
                <Button className="flex items-center gap-2">
                  Solicitar Proposta
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://wa.me/244248200287" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  Fale no WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="relative rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--off-white)] to-[var(--background)] p-8 shadow-2xl">
              <div className="space-y-5">
                <div className="rounded-xl border border-[var(--card-border)] bg-[var(--background-alt)] p-5">
                  <p className="text-sm font-bold text-[var(--safri-red-light)]">Comércio Geral</p>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">6 estabelecimentos • +10.000m²</p>
                </div>
                <div className="rounded-xl border border-[var(--card-border)] bg-[var(--background-alt)] p-5">
                  <p className="text-sm font-bold text-[var(--safri-red-light)]">Logística & Transportes</p>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">Frota própria • Entrega expressa</p>
                </div>
                <div className="rounded-xl border border-[var(--card-border)] bg-[var(--background-alt)] p-5">
                  <p className="text-sm font-bold text-[var(--safri-red-light)]">Educação</p>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">Instituto Politécnico • +3.600 alunos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 border-t border-[var(--card-border)] pt-10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
          {[
            { value: "+25", label: "Anos de Experiência" },
            { value: "+10.000m²", label: "Capacidade de Armazenagem" },
            { value: "+3.600", label: "Alunos em Educação" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] p-4 text-center">
              <p className="text-3xl font-black text-[var(--safri-red-light)]">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
