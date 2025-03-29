import Navbar from "./components/nav-bar"
import Nav2 from './components/nav-2'
import HomePage from "./components/home"
import AboutSection from "./components/about-section"
import Loader from "./components/loader-page"
import Skill from "./components/skill"
import Projects from "./components/projects"
import ContactPart from "./components/contacts"
import Fotter from "./components/fotter"
import ForOfor from "./components/404"
import Certified from "./assets/ceriteficate"
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Loader />
          <Navbar />
          <HomePage />
          <AboutSection />
          <Skill />
          <Projects />
          <Certified />
          <ContactPart />
          <Fotter />
        </>} />

        <Route path="/about" element={<>
          <Loader />
          <Nav2 />
          <AboutSection />
          <Fotter />
        </>} />

        <Route path="/projects" element={<>
          <Loader />
          <Navbar />
          <Skill />
          <Projects />
          <Fotter />
        </>} />

        <Route path="/contact" element={<>
          <Loader />
          <Nav2 />
          <ContactPart />
          <Fotter />
        </>} />

        <Route path="/certeficate" element={<>
          <Loader />
          <Nav2 />
          <Certified />
          <Fotter />
        </>} />

        <Route path="*" element={<ForOfor />} />
      </Routes>
    </>
  )
}

export default App
