import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Navigation from "./components/Navigation";
import ContactMe from "./components/Contact";
import CaseStudyMiru from "./components/CaseStudyMiru";
import CaseStudyBlog from "./components/CaseStudyBlog";
import CaseStudySaeloun from "./components/CaseStudySaeloun";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "./App.css";
import "boxicons";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <HashRouter>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="Wrapper">
              <ParticleBackground />
              <Home setActiveTab={setActiveTab} />
              <Skills setActiveTab={setActiveTab} />
              <Work setActiveTab={setActiveTab} />
              <About setActiveTab={setActiveTab} />
              <ContactMe setActiveTab={setActiveTab} />
            </div>
          }
        />
        {/* Case Study Page */}
        <Route path="/case-study-miru" element={<CaseStudyMiru />} />
        <Route path="/case-study-blog" element={<CaseStudyBlog />} />
        <Route path="/case-study-saeloun" element={<CaseStudySaeloun />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
