import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML5', level: 95, icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', level: 90, icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', level: 88, icon: 'devicon-javascript-plain colored' },
  { name: 'React', level: 85, icon: 'devicon-react-original colored' },
  { name: 'Node.js', level: 78, icon: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', level: 70, icon: 'devicon-mongodb-plain colored' },
  { name: 'Git & GitHub', level: 80, icon: 'devicon-git-plain colored' },
  { name: 'Django', level: 65, icon: 'devicon-django-plain colored' },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="skills" className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My expertise spans across modern web technologies, from frontend frameworks to backend systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl">
                  <i className={`${skill.icon} text-2xl`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.level}% proficient</p>
                </div>
              </div>

              {/* Skill Bar */}
              <div className="relative w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-400 rounded-full transition-all duration-1000 ease-in-out shadow-lg"
                  style={{ width: `${skill.level}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'Postman'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-teal-600/40 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
