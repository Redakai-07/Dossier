import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './models/Home/Home'
import Education from './components/Education/Education';
import AboutMe from './models/AboutMe/AboutMe';
import Contact from './models/Contact/Contact';
import PageNotFound from './models/PageNotFound/PageNotFound';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

// function App() {

// import Particles from '../src/components/Background/Particles';
  // return (
  //   <div style={{ width: '100%', height: '100vh', position: 'relative',boxSizing:'border-box' }}>
  //     {/* <Particles
  //       particleColors={['#ffffff', '#ffffff']}
  //       particleCount={500}
  //       particleSpread={10}
  //       speed={0.1}
  //       particleBaseSize={100}
  //       moveParticlesOnHover={true}
  //       alphaParticles={false}
  //       disableRotation={false}> */}
  //       <Home />
  //     {/* </Particles> */}
  //   </div>


 function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;