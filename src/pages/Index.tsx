import { useEffect, useState } from "react";
import AOS from "aos";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background3D from "../components/Background3D";
import heroBg from "../assets/hero-bg.jpg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <div className="relative min-h-screen">
        {/* 3D Background Layer */}
        <Background3D />

        {/* Static Image Background */}
        <div
          className="fixed inset-0 z-[1]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certification />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
