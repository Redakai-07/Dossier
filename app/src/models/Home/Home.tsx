import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import AboutMe from "../AboutMe/AboutMe"
import Skills from "../../components/Skills/Skills"
import Projects from "../../components/Projects/Projects"
import Contact from "../Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Education from "../../components/Education/Education"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home