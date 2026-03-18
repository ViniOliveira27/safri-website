import { ContactForm } from "@/components/ui/ContactForm";
import { contacts } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <section className="grid gap-8 md:grid-cols-2">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Contato B2B / B2C</p>
          <h1 className="mt-3 text-3xl font-extrabold text-[var(--foreground)]">Fale com a equipe SAFRI</h1>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Envie sua solicitacao comercial e retornaremos pelo e-mail ou telefone informado.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            <li>
              <span className="font-semibold text-[var(--foreground)]">Telefone:</span>{" "}
              <a className="text-[var(--safri-red-light)] underline" href={`tel:${contacts.phone.replace(/\s+/g, "")}`}>
                {contacts.phone}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[var(--foreground)]">E-mail:</span>{" "}
              <a className="text-[var(--safri-red-light)] underline" href={`mailto:${contacts.email}`}>
                {contacts.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[var(--foreground)]">WhatsApp:</span>{" "}
              <a
                className="text-[var(--safri-red-light)] underline"
                href={`https://wa.me/${contacts.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                +{contacts.whatsapp}
              </a>
            </li>
            {contacts.addresses.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-[var(--foreground)]">{item.title}:</span> {item.address}
              </li>
            ))}
          </ul>

          <iframe
            title="Mapa SAFRI"
            className="mt-6 h-64 w-full rounded-lg border border-slate-700"
            loading="lazy"
            src="https://www.google.com/maps?q=Kuito%20Bie%20Angola&output=embed"
          />
        </article>

        <ContactForm />
      </section>
    </main>
  );
}
