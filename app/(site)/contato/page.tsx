import { ContactoForm } from "@/components/contato/contatoForm";
import ContatoHero from "@/components/contato/contatoHero";
import MapSection from "@/components/contato/mapa";

export default function ContatoPage() {
  return (
    <main className="bg-gradient-to-br from-red-700 to-red-900">
      <div
        className="
        w-full 
        min-h-screen 
        grid 
        grid-cols-1 
        lg:grid-cols-2
        overflow-hidden
      "
      >
        
        
        <div
          className="
          order-1 
          lg:order-2
          flex 
          flex-col 
          justify-center
          px-6 
          md:px-10 
          lg:px-16 
          py-10

          bg-gradient-to-r from-gray-300 to-gray-400

          [clip-path:none]
          lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]

          shadow-2xl
        "
        >
          <ContactoForm />
        </div>

        
        <div
          className="
          order-2 
          lg:order-1
          min-h-[40vh] 
          lg:min-h-screen
          bg-gradient-to-r from-gray-100 to-gray-300
        "
        >
          <ContatoHero />
        </div>

      </div>
      <div className="bg-white py-16 px-6 md:px-10 lg:px-16">
  
 
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Nossa Localização
    </h2>
    <p className="text-gray-500 mt-2">
      Visite nossa sede ou entre em contato conosco
    </p>
  </div>

  
  <div className="w-full max-w-6xl mx-auto h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border" id="mapa">
   <MapSection/>
  </div>

  
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-9xl mx-auto text-center">
    
    <div>
      <h3 className="font-semibold text-gray-800">Sede</h3>
      <ul className="text-gray-500 grid text-sm">
       <p> <strong className="text-black">Sede Central:</strong> Província do Bié, Cidade do Kuito, Rua Diogo Cão. </p>
       <p><strong className="text-black">Filial Huambo:</strong> Cidade de Huambo, Avenida 5 de Outubro.</p>
       <p><strong className="text-black">Filial Luanda:</strong> Rua 1° Congresso MPLA, n° 19, 2° Andar, Apt L. </p>
       <p><strong className="text-black">Complexo SAFRI-METAL:</strong> Estrada Nacional N.250, Chissindo.</p>
       
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800">Telefone/WhatsApp</h3>
      <p className="text-gray-500 text-sm">
        +244 248 200 287
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-800">Email</h3>
      <p className="text-gray-500 text-sm">
        safri@safri.co.ao
      </p>
    </div>

  </div>
</div>
    </main>
  );
}