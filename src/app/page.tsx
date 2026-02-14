import Header from "@/components/Header";
import CareerSummary from "@/components/CareerSummary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[860px] mx-auto px-6 py-12">
      <Header />
      <CareerSummary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
