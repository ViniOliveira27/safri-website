"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ContatoForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company, subject, message }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };
      if (data.success) {
        setStatus("Mensagem enviada com sucesso.");
        setEmail("");
        setName("");
        setCompany("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`Erro: ${data.error ?? "Falha ao enviar mensagem."}`);
      }
    } catch {
      setStatus("Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full">
      <form onSubmit={handleSubmit} className="grid items-center justify-center gap-6">
        <h2 className={`${inter.className} text-[48px] font-[600] leading-tight tracking-[-0.02em] text-black`}>
          Envie sua mensagem
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white p-3 text-black outline-none"
            required
          />

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white p-3 text-black outline-none"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-white p-3 text-black outline-none"
            required
          />

          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-white p-3 text-black outline-none"
            required
          />
        </div>

        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full bg-white p-3 text-black outline-none"
          required
        />

        <div className="flex w-full justify-end">
          <button
            type="submit"
            className={`
              ${inter.className}
              w-1/2 bg-black py-3 text-[12px] font-[600] leading-tight tracking-[-0.02em] text-white
              transition-all duration-300 hover:bg-gray-300 hover:text-red-700
              ${loading ? "cursor-not-allowed opacity-70" : ""}
            `}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>

        {status ? (
          <p
            className={`mt-4 rounded-lg p-3 text-center ${
              status.includes("sucesso") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </p>
        ) : null}
      </form>

      <span className="mt-4 inline-block text-black">Se preferir ligar...00244 248 200 287</span>
    </main>
  );
}