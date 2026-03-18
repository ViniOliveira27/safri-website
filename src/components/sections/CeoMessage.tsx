import { companyInfo } from "@/lib/data";

export function CeoMessage() {
  return (
    <section id="direcao" className="bg-[var(--background)] py-18">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-7 shadow-lg md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Mensagem da Direção</p>
          <blockquote className="mt-5 border-l-4 border-[var(--safri-red-light)] pl-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            &ldquo;{companyInfo.ceoMessage}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-bold text-[var(--foreground)]">{companyInfo.ceoName}</p>
        </article>
      </div>
    </section>
  );
}
