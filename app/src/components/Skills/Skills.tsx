import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Skill categories for better organization
const skillCategories = {
  frontend: {
    title: "Frontend Development",
    description: "Modern UI/UX technologies and frameworks",
    skills: [
      { name: 'HTML5', level: 95, icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', level: 90, icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', level: 88, icon: 'devicon-javascript-plain colored' },
      { name: 'React', level: 85, icon: 'devicon-react-original colored' },
      { name: 'TypeScript', level: 80, icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', level: 85, icon: 'devicon-tailwindcss-plain colored' },
    ]
  },
  backend: {
    title: "Backend Development",
    description: "Server-side technologies and databases",
    skills: [
      { name: 'Node.js', level: 78, icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', level: 75, icon: 'devicon-express-original colored' },
      { name: 'MongoDB', level: 70, icon: 'devicon-mongodb-plain colored' },
      { name: 'PostgreSQL', level: 65, icon: 'devicon-postgresql-plain colored' },
      { name: 'Django', level: 65, icon: 'devicon-django-plain colored' },
    ]
  },
  tools: {
    title: "Development Tools",
    description: "Version control, deployment, and collaboration tools",
    skills: [
      { name: 'Git & GitHub', level: 80, icon: 'devicon-git-plain colored' },
      { name: 'Docker', level: 70, icon: 'devicon-docker-plain colored' },
      { name: 'AWS', level: 65, icon: 'devicon-amazonwebservices-original colored' },
      { name: 'Figma', level: 75, icon: 'devicon-figma-plain colored' },
      { name: 'Postman', level: 80, icon: 'devicon-postman-plain colored' },
    ]
  }
};

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern web development technologies, 
            from frontend frameworks to backend systems and development tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
            <div key={categoryKey} className="space-y-8" data-aos="fade-up" data-aos-delay={categoryIndex * 200}>
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:bg-slate-800/50"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 100}
                  >
                    {/* Skill Icon and Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                        <i className={`${skill.icon} text-2xl`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {skill.level}% proficient
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                      <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-400 rounded-full transition-all duration-1000 ease-in-out shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full"></div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Additional Technologies
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Continuously expanding my toolkit with emerging technologies and best practices
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Next.js', 'GraphQL', 'Firebase', 'Jest', 'Webpack', 
              'Vite', 'Sass', 'Bootstrap', 'Material-UI', 'Three.js', 'Socket.io'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-teal-600/40 hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-105"
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
