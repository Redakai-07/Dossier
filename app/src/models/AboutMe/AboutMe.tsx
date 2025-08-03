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
  {
    year: '2016-2019',
    title: 'High School',
    subtitle: 'Science Stream',
    description: 'Completed my high school education with a strong foundation in science and mathematics.',
    image: '🎓',
    link: '#',
    type: 'education'
  },
  {
    year: '2019-2021',
    title: 'Pre-University Course',
    subtitle: 'PUC - Science',
    description: 'Focused on advanced science subjects and prepared for engineering entrance exams.',
    image: '📚',
    link: '#',
    type: 'education'
  },
  {
    year: '2021-2025',
    title: 'Bachelor of Engineering',
    subtitle: 'Computer Science & Engineering',
    description: 'Currently pursuing my BE degree with focus on software development and modern technologies.',
    image: '💻',
    link: '#',
    type: 'education'
  },
  {
    year: '2025',
    title: 'Software Developer Intern',
    subtitle: 'Inventech',
    description: 'Working on real-world projects, gaining hands-on experience in full-stack development.',
    image: '🏢',
    link: 'https://inventech.com',
    type: 'experience'
  }
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative text-white py-20 px-6 md:px-16 overflow-hidden theme-transition"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
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
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A passionate Computer Science graduate crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Profile Section */}
          <div className="flex flex-col items-center">
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
                className="relative z-10 w-48 h-48 rounded-full object-cover border-4 shadow-2xl"
                style={{ borderColor: 'var(--border-primary)' }}
              />
            </motion.div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Venkatesh Prabhatha Kana</h3>
              <p className="font-medium mb-4" style={{ color: 'var(--accent-secondary)' }}>Full-Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-primary)' }}>1+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-secondary)' }}>10+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent-tertiary)' }}>100%</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>My Story</h3>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm a Computer Science graduate passionate about building well-crafted digital experiences. 
                With hands-on experience at <span className="font-medium" style={{ color: 'var(--accent-secondary)' }}>Inventech</span> and{' '}
                <span className="font-medium" style={{ color: 'var(--accent-secondary)' }}>Rooman Technologies</span>, I specialize in crafting
                scalable full-stack applications.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                My expertise spans modern technologies including <strong style={{ color: 'var(--accent-secondary)' }}>React.js</strong>,{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>NestJS</strong>, <strong style={{ color: 'var(--accent-secondary)' }}>Redux</strong>, and{' '}
                <strong style={{ color: 'var(--accent-secondary)' }}>MySQL</strong>. Whether it's designing smooth UI or architecting clean backend logic — 
                I love bringing ideas to life and pushing projects across the finish line.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I'm always exploring new technologies and best practices to stay at the forefront of web development.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TypeScript', 'NestJS', 'MySQL', 'Redux', 'Tailwind CSS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border rounded-full text-sm"
                    style={{
                      background: 'var(--bg-tertiary)',
                      borderColor: 'var(--border-primary)',
                      color: 'var(--accent-primary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Personal Information Section - Simple & Cool */}
        <div id="personal-info" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Personal Information
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Get to know me better</p>
            </div>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-primary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Location</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>India, Karnataka</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-language" style={{ color: 'var(--accent-secondary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Languages</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>English, Kannada, Hindi</p>
                  </div>
                </div>

                {/* Timezone */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--accent-tertiary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Timezone</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>⏰ IST (UTC+5:30)</p>
                  </div>
                </div>

                {/* Work Preference */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-briefcase" style={{ color: 'var(--accent-primary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Work Preference</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>🌍 Remote & Hybrid</p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-graduation-cap" style={{ color: 'var(--accent-secondary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Education</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>🎓 B.E. Computer Science</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                    <i className="fas fa-code" style={{ color: 'var(--accent-tertiary)' }}></i>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Experience</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>💼 1+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Love Section - Completely Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              What Drives Me
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
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
                <div className="absolute inset-0 rounded-2xl group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-300" style={{ background: 'var(--bg-tertiary)' }}></div>
                <div className="relative backdrop-blur-sm p-6 rounded-2xl border hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full" style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-secondary)'
                }}>
                  <div className="flex flex-col h-full">
                    <div className={`text-3xl bg-gradient-to-br ${passion.color} p-3 rounded-xl w-fit mb-4`}>
                      {passion.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                      {passion.title}
                    </h4>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {passion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline Section */}
        <div id="journey">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              My Journey
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              A timeline of my educational and professional growth in the tech world.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500 h-full rounded-full"></div>
            
            <div className="space-y-8">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 shadow-lg z-10" style={{ borderColor: 'var(--bg-primary)' }}></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="backdrop-blur-sm p-6 rounded-xl border hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group" style={{
                      background: 'var(--bg-secondary)',
                      borderColor: 'var(--border-secondary)'
                    }}>
                      {/* Image and Year */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{item.image}</div>
                        <div>
                          <span className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{item.year}</span>
                          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      
                      {/* Title and Subtitle */}
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent-secondary)' }}>
                        {item.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                      
                      {/* Link Button */}
                      {item.link && item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--accent-primary)'
                          }}
                        >
                          Visit {item.type === 'education' ? 'Institution' : 'Company'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
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
