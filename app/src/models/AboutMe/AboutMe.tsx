import profileImg from '../../assets/profile.jpg';
import { motion } from 'framer-motion';

const timelineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const hobbies = [
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Building modern, responsive apps with React.js, NestJS, and Node.js.',
  },
  {
    title: 'Tech Exploration',
    icon: '🧠',
    description: 'Always tinkering with new tools, trends, and side projects.',
  },
];

const timeline = [
  { year: '2021', event: 'Started B.E. in Computer Science' },
  { year: '2023', event: 'Built TaskFlow Navigator & Employee Manager' },
  { year: '2024', event: 'Interned at Inventech & Rooman Technologies' },
  { year: '2025', event: 'Graduating and open to dev opportunities' },
];

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={profileImg}
              alt="Venkatesh Prabhatha Kana"
              className="relative z-10 w-48 h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10"
            />
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-blue-300 font-medium">Venkatesh Prabhatha Kana</span>, a
              Computer Science graduate passionate about building well-crafted digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With hands-on experience at <span className="text-blue-300">Inventech</span> and{' '}
              <span className="text-blue-300">Rooman Technologies</span>, I specialize in crafting
              scalable full-stack apps using technologies like <strong>React.js</strong>,{' '}
              <strong>NestJS</strong>, <strong>Redux</strong>, and <strong>MySQL</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether it's designing smooth UI or architecting clean backend logic — I love bringing ideas
              to life and pushing projects across the finish line.
            </p>
          </div>
        </div>

        {/* Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300 mb-3">
                {hobby.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">My Journey</h3>
          <div className="relative border-l-2 border-blue-500 pl-8 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={timelineVariants}
                className="relative"
              >
                <div className="absolute -left-[18px] top-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-900 shadow-lg" />
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 shadow-lg">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">{item.year}</h4>
                  <p className="text-gray-300 text-base">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
