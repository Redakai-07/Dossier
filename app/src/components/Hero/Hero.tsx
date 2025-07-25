import img from '../../assets/heroImg.png';
import DecryptedText from '../Decrypted Text/Decrypt';
import SplitText from '../Split Text/SplitText';
import { motion } from 'framer-motion';

import type { Easing } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.3, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: [0.42, 0, 0.58, 1] as Easing, duration: 0.5 } },
};

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-around px-10 py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Message Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-2xl mx-auto md:mx-0 text-left"
        variants={itemVariants}
      >
        <SplitText
          text="Welcome"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 tracking-tight"
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
          text="to My Portfolio"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"
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

        <div className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-md">
          <DecryptedText
            text="Discover my projects, skills, and experience."
            animateOn="view"
            revealDirection="center"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-red-500 hover:via-yellow-400 hover:to-orange-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg transition duration-500"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Right Image Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0"
        variants={itemVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <img
          src={img}
          alt="Hero"
          className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-3xl shadow-2xl border-4 border-gradient-to-r from-orange-400 via-yellow-400 to-red-500"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
