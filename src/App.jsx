import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GithubStats from "./components/GithubStats";
import ParticlesBackground from "./components/ParticlesBackground";
import LeetcodeShowcase from "./components/LeetcodeShowcase";
import Certifications from "./components/Certifications";


function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Projects />
      <GithubStats />
      <LeetcodeShowcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
