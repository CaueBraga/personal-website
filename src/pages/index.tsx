import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Terminal } from "@/components/Terminal";
import Projects from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-2/3 h-full flex flex-col px-5 md:px-10 mx-auto">
      <Navbar />
      <Hero />
      <Terminal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

//mudar as cors do project section
//mudar as cores do footer
//corrigir movimentos invonluntarios do botoes
//adicionar os meus projetos
// botar no git  hub
