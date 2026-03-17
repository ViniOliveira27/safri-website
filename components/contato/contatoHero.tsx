import Image from "next/image";

export default function ContatoHero() {
  return (
    <div className="relative flex flex-col justify-center px-8 md:px-16 bg-gray-100 min-h-screen overflow-hidden">
      
      
      <Image
        src="/safri-metal.png"
        alt="SAFRI"
        width={800}
        height={800}
        className="absolute right-0 bottom-0 opacity-10 pointer-events-none"
      />

      
      <div className="relative z-10 max-w-xl">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          SAFRI Comercial, Lda.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600">
          Mais de 25 anos contribuindo para o desenvolvimento industrial e econômico de Angola.
        </p>

        {/* NÚMEROS */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-gray-800">
          <div>
            <p className="text-2xl font-bold">+25</p>
            <p className="text-sm">anos de experiência</p>
          </div>

          <div>
            <p className="text-2xl font-bold">+10.000m²</p>
            <p className="text-sm">infraestrutura</p>
          </div>

          <div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm">áreas de atuação</p>
          </div>

          <div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">províncias</p>
          </div>
        </div>

        {/* BOTÃO */}
        <button className="mt-10 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
          Conhecer serviços
        </button>

      </div>
    </div>
  );
}