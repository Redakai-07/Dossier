import img from '../../assets/image.png';
import DecryptedText from '../Decrypted Text/Decrypt';
import SplitText from '../Split Text/SplitText';
import { motion } from 'framer-motion';
import CountUp from '../Count Up/CountUp';
import type { Easing } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.05, 
      duration: 0.4 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      ease: [0.42, 0, 0.58, 1] as Easing, 
      duration: 0.3 
    } 
  },
};

const Hero = () => {
  return (
    <motion.section id="hero"
      className="relative min-h-screen w-full text-white overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 py-20 lg:py-0 lg:px-12 max-w-7xl mx-auto">
        
        {/* Left Content Side - Desktop Layout */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center items-start space-y-8 lg:pr-12"
          variants={itemVariants}
        >
          {/* Greeting */}
          <motion.div
            className="text-sm font-medium tracking-wider uppercase"
            style={{ color: 'var(--accent-secondary)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Hello, I'm
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <SplitText
              text="Venkatesh"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <SplitText
              text="Prabhatha Kana"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text"
              delay={300}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          {/* Description */}
          <motion.div 
            className="text-lg sm:text-xl leading-relaxed max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <DecryptedText
              text="Passionate developer crafting digital experiences with modern technologies. Let's build something amazing together."
              animateOn="view"
              revealDirection="center"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
              style={{ color: "#fff" }}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social/Stats */}
          <motion.div 
            className="flex items-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">
                <CountUp
                  from={0}
                  to={1}
                  separator=","
                  direction="up"
                  duration={3}
                  className="count-up-text"
                />+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text"
              />+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={3}
                  className="count-up-text"
                />%
              </div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden w-full flex flex-col items-center space-y-8"
          variants={itemVariants}
        >
          {/* Greeting */}
          <motion.div
            className="text-sm font-medium text-blue-300 tracking-wider uppercase text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Hello, I'm
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4 text-center">
            <SplitText
              text="Venkatesh"
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="Prabhatha Kana"
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text"
              delay={300}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          {/* Description */}
          <motion.div 
            className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <DecryptedText
              text="Passionate developer crafting digital experiences with modern technologies. Let's build something amazing together."
              animateOn="view"
              revealDirection="center"
            />
          </motion.div>

          {/* Photo - Mobile */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main image container */}
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 } 
                }}
              >
                <img
                  src={img}
                  alt="Professional headshot"
                  className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl border-4 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm"
                />
                
                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons - Mobile */}
          <motion.div 
            className="flex flex-col gap-4 pt-4 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20 text-center"
              style={{ color: "#fff" }}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social/Stats - Mobile */}
          <motion.div 
            className="flex items-center justify-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">1+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">10+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Side - Desktop Only */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-12 lg:mt-0"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Main image container */}
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
            >
              <img
                src={img}
                alt="Professional headshot"
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-sm"
              />
              
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
