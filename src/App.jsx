import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-gray-300">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <Skills />
      <Projects />
      <Coursework />
      <Contact />
    </div>
  );
}

