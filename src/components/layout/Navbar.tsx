import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="SAFRI Comercial Logo" 
            width={220}
            height={80}
            className="h-14 w-auto rounded-sm"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--text-secondary)] md:flex">
          <Link href="/#sobre" className="transition hover:text-[var(--foreground)]">
            Sobre
          </Link>
          <Link href="/#servicos" className="transition hover:text-[var(--foreground)]">
            Serviços
          </Link>
          <Link href="/#direcao" className="transition hover:text-[var(--foreground)]">
            Direção
          </Link>
          <Link href="/#banners" className="transition hover:text-[var(--foreground)]">
            Mídia
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://wa.me/244248200287"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-[var(--safri-red)] px-4 py-2 text-sm font-semibold text-[var(--safri-red)] transition hover:-translate-y-0.5 hover:bg-[var(--safri-red)] hover:text-white md:inline-flex"
          >
            WhatsApp
          </a>
          <Link href="/contato">
            <Button>Fale Conosco</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
