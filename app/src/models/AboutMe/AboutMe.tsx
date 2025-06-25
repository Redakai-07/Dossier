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
      className="bg-[#0f0f0f] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <motion.img
            src={profileImg}
            alt="Venkatesh Prabhatha Kana"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-44 h-44 rounded-full object-cover border-4 border-orange-500 shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm <span className="text-orange-300 font-medium">Venkatesh Prabhatha Kana</span>, a
              Computer Science graduate passionate about building well-crafted digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              With hands-on experience at <span className="text-orange-300">Inventech</span> and{' '}
              <span className="text-orange-300">Rooman Technologies</span>, I specialize in crafting
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
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 shadow hover:shadow-orange-500/20 transition duration-300"
            >
              <div className="text-3xl mb-3">{hobby.icon}</div>
              <h3 className="text-lg font-semibold text-orange-300 mb-2">{hobby.title}</h3>
              <p className="text-gray-400 text-sm">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-500 pl-6 space-y-12">
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
              <div className="absolute -left-[14px] top-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-[#0f0f0f]" />
              <h4 className="text-base font-semibold text-orange-300">{item.year}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
