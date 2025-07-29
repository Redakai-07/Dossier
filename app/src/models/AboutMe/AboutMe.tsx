import profileImg from '../../assets/profile.jpg';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const timelineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const passions = [
  {
    title: 'Problem Solving',
    icon: '🧩',
    description: 'I love breaking down complex challenges into elegant solutions. Every bug is a puzzle waiting to be solved.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Learning New Tech',
    icon: '🚀',
    description: 'Always excited to dive into emerging technologies. Currently exploring AI/ML and cloud architecture.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Open Source',
    icon: '🌟',
    description: 'Contributing to the developer community. Building tools that others can use and improve upon.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Clean Code',
    icon: '✨',
    description: 'Writing code that reads like poetry. Maintainable, scalable, and beautiful solutions.',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'User Experience',
    icon: '🎨',
    description: 'Creating interfaces that users love to interact with. Every pixel matters in the user journey.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Coffee & Code',
    icon: '☕',
    description: 'Best debugging sessions happen with a good cup of coffee. The perfect fuel for late-night coding.',
    color: 'from-amber-500 to-orange-500'
  }
];

const timeline = [
  { year: '2021', event: 'Started B.E. in Computer Science' },
  { year: '2023', event: 'Built TaskFlow Navigator & Employee Manager' },
  { year: '2024', event: 'Interned at Inventech & Rooman Technologies' },
  { year: '2025', event: 'Graduating and open to dev opportunities' },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate Computer Science graduate crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Profile Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Venkatesh Prabhatha Kana"
                className="relative z-10 w-48 h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl"
              />
            </motion.div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Venkatesh Prabhatha Kana</h3>
              <p className="text-blue-300 font-medium mb-4">Full-Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">100%</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science graduate passionate about building well-crafted digital experiences. 
                With hands-on experience at <span className="text-blue-300 font-medium">Inventech</span> and{' '}
                <span className="text-blue-300 font-medium">Rooman Technologies</span>, I specialize in crafting
                scalable full-stack applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My expertise spans modern technologies including <strong className="text-blue-300">React.js</strong>,{' '}
                <strong className="text-blue-300">NestJS</strong>, <strong className="text-blue-300">Redux</strong>, and{' '}
                <strong className="text-blue-300">MySQL</strong>. Whether it's designing smooth UI or architecting clean backend logic — 
                I love bringing ideas to life and pushing projects across the finish line.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm always exploring new technologies and best practices to stay at the forefront of web development.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TypeScript', 'NestJS', 'MySQL', 'Redux', 'Tailwind CSS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* What I Love Section - Completely Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              What Drives Me
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond the code, these are the things that make me excited to be a developer every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-2xl group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <div className="flex flex-col h-full">
                    <div className={`text-3xl bg-gradient-to-br ${passion.color} p-3 rounded-xl w-fit mb-4`}>
                      {passion.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {passion.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {passion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Completely Redesigned */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              My Journey
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional growth and achievements in the tech world.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={timelineVariants}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                        <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 text-lg font-medium">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
