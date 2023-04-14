import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Terminal } from "@/components/Terminal";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-2/3 h-full flex flex-col px-5 md:px-10 mx-auto">
      <Navbar />
      <Hero />
      <Terminal />
      <Projects />
    </div>
  );
}
