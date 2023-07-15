import React, {useState} from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Navigation from "./components/Navigation";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import 'boxicons';
import ParticleBackground from "./components/ParticleBackground";

function App() {
const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="App">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      <ParticleBackground setActiveTab={setActiveTab}/>
      <Home setActiveTab={setActiveTab}/>
      <About setActiveTab={setActiveTab}/>
      <Work setActiveTab={setActiveTab}/>
      <Skills setActiveTab={setActiveTab}/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;