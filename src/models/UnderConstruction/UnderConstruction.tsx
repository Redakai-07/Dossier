import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Easing } from 'framer-motion';

const UnderConstruction = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as Easing,
      },
    },
  };

  // const floatingVariants = {
  //   animate: {
  //     y: [0, -20, 0],
  //     rotate: [0, 5, -5, 0],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: "easeInOut" as Easing,
  //     },
  //   },
  // };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as Easing,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden theme-transition" style={{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)'
    }}>
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Main Message */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              🚧 Under Construction 🚧
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6" 
              style={{ color: 'var(--text-primary)' }}
              variants={pulseVariants}
              animate="animate"
            >
              We're Building Something Amazing!
            </motion.h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              This page is currently being developed with love and care. 
              Concerned person is at work making it awesome!
            </p>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate('/')}
              className="px-10 py-5 text-white font-bold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back Home
            </motion.button>
            <motion.button
              onClick={() => navigate(-1)}
              className="px-10 py-5 bg-transparent border-2 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-secondary)'
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back
            </motion.button>
          </motion.div>

          {/* Enhanced Fun Message */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg mb-6 font-medium" 
              style={{ color: 'var(--text-muted)' }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Construction workers need coffee breaks too! 
            </motion.p>
            <div className="flex justify-center space-x-8">
              {['🚧', '👷', '⚡', '🔨', '✨'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="text-3xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderConstruction; 