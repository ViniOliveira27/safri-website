"use client";

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-6 shadow-lg md:p-8">
      <h2 className="text-3xl font-black tracking-tight text-[var(--foreground)]">Envie sua mensagem</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[var(--card-border)] bg-[var(--off-white)] p-3 text-[var(--foreground)] outline-none focus:border-[var(--safri-red-light)]"
          required
        />
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-[var(--card-border)] bg-[var(--off-white)] p-3 text-[var(--foreground)] outline-none focus:border-[var(--safri-red-light)]"
          required
        />
        <input
          type="text"
          placeholder="Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full rounded-md border border-[var(--card-border)] bg-[var(--off-white)] p-3 text-[var(--foreground)] outline-none focus:border-[var(--safri-red-light)]"
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-md border border-[var(--card-border)] bg-[var(--off-white)] p-3 text-[var(--foreground)] outline-none focus:border-[var(--safri-red-light)]"
          required
        />
      </div>

      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="mt-4 w-full rounded-md border border-[var(--card-border)] bg-[var(--off-white)] p-3 text-[var(--foreground)] outline-none focus:border-[var(--safri-red-light)]"
        required
      />

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className={`rounded-lg bg-[var(--safri-red)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--safri-red-dark)] ${loading ? "cursor-not-allowed opacity-70" : ""}`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </div>

      {status ? (
        <p className="mt-4 rounded-md bg-[var(--background-alt)] p-3 text-sm text-[var(--text-secondary)]">{status}</p>
      ) : null}
    </form>
  );
}