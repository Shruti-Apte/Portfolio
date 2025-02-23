import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route
          path="/Portfolio"
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
        <Route path="/Portfolio/case-study-miru" element={<CaseStudyMiru />} />
        <Route path="/Portfolio/case-study-blog" element={<CaseStudyBlog />} />
        <Route
          path="/Portfolio/case-study-saeloun"
          element={<CaseStudySaeloun />}
        />

        <Route path="/Portfolio/blog" element={<Blog />} />
        {/* <Route path="/Portfolio/project" element={<Project />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
