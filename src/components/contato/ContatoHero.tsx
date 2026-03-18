import Image from "next/image";

export default function ContatoHero() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-8 md:p-10">
      <Image
        src="/safri-metal.png"
        alt="SAFRI Metal"
        width={700}
        height={700}
        className="pointer-events-none absolute -bottom-10 -right-10 opacity-10"
      />

      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Contato Comercial</p>
        <h1 className="mt-4 text-3xl font-black leading-tight text-[var(--foreground)] md:text-5xl">SAFRI Comercial, Lda.</h1>
        <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
          Mais de 25 anos contribuindo para o desenvolvimento industrial e econômico de Angola.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 text-[var(--foreground)]">
          <div>
            <p className="text-2xl font-black text-[var(--safri-red-light)]">+25</p>
            <p className="text-sm text-[var(--text-secondary)]">anos de experiência</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[var(--safri-red-light)]">+10.000m²</p>
            <p className="text-sm text-[var(--text-secondary)]">infraestrutura</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[var(--safri-red-light)]">8</p>
            <p className="text-sm text-[var(--text-secondary)]">áreas de atuação</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[var(--safri-red-light)]">3</p>
            <p className="text-sm text-[var(--text-secondary)]">províncias</p>
          </div>
        </div>
      </div>
    </div>
  );
}