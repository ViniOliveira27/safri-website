import ContatoHero from "@/components/contato/ContatoHero";
import { ContatoForm } from "@/components/contato/ContatoForm";

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex items-center bg-[var(--background-alt)] px-6 py-10 md:px-10 lg:order-1 lg:px-16">
          <ContatoHero />
        </div>
        <div className="order-1 flex items-center bg-[var(--off-white)] px-6 py-10 md:px-10 lg:order-2 lg:px-16">
          <ContatoForm />
        </div>
      </section>
    </main>
  );
}
