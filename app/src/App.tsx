import './App.css'
import Home from './models/Home/Home'
import Particles from '../src/components/Background/Particles'; // Adjust path as needed

function App() {


  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative',boxSizing:'border-box' }}>
      {/* <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}> */}
        <Home />
      {/* </Particles> */}
    </div>


  )
}

export default App
