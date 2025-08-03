import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Easing } from 'framer-motion';

const PageNotFound = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as Easing,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden theme-transition" style={{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Animated Icon */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="relative w-24 h-24 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back Home
            </motion.button>
            <motion.button
              onClick={() => navigate(-1)}
              className="px-8 py-4 bg-transparent border-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-secondary)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
              If you believe this is an error, please contact me
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="transition-colors duration-300"
                style={{ color: 'var(--accent-primary)' }}
              >
                Email Support
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: 'var(--accent-primary)' }}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageNotFound;