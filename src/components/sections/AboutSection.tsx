import { companyInfo } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Identidade Institucional</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg">
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-red-light)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Missão</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{companyInfo.mission}</p>
        </article>

        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg">
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-blue)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Visão</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{companyInfo.vision}</p>
        </article>

        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg">
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-red-light)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Valores</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {companyInfo.values.map((value) => (
              <li key={value} className="rounded-lg bg-[var(--background-alt)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]">
                {value}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
