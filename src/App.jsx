// import { useState } from 'react'
// import Portfolio from './dash/Portifo'
// import HeroSection from './dash/Hero'
// import Navbar from './components/Nav'
// import Skills from './dash/Skills'
// import Projects from './dash/Projects'
// import Experience from './dash/Experience'
// import About from './dash/About'
// import Contact from './dash/Contact'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Skills />
//       <Projects />
//       <Experience />
//       <About />
//       <Contact />
//       <Footer />
//     </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import HeroSection from "./dash/Hero";
import Skills from "./dash/Skills";
import Projects from "./dash/Projects";
import Experience from "./dash/Experience";
import About from "./dash/About";
import Contact from "./dash/Contact";
import ProjectDetails from "./detial/Detial";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Skills />
              <Projects />
              <Experience />
              <About />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detial" element={<ProjectDetails />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
