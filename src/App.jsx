import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary min-h-screen text-stone-900 font-sans relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <Projects />
                  <Services />
                  <About />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-stone-900 mb-4">404</h1>
        <p className="text-stone-500 mb-8">Page not found.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-stone-900 text-white rounded-full text-sm hover:bg-stone-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default App;
