import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

        <Experiences />
        <Testimonial />
        
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;