import { ContactoForm } from "@/components/contato/contatoForm";
import ContatoHero from "@/components/contato/contatoHero";

export default function ContatoPage() {
  return (
    <main>
      <div className="
        w-full 
        min-h-screen 
        grid 
        grid-cols-1 
        lg:grid-cols-2
      ">

        
        <div className="
          order-1 
          lg:order-2
          flex 
          flex-col 
          justify-center 
          px-6 
          md:px-10 
          lg:px-16 
          py-10
          bg-red-700
        ">
          <ContactoForm />
        </div>

       
        <div className="
          order-2 
          lg:order-1
          min-h-[40vh] 
          lg:min-h-screen
        ">
          <ContatoHero />
        </div>

      </div>
    </main>
  );
}