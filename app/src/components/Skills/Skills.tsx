import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tooltip } from 'antd';

// Skill categories for better organization
const skillCategories = {
  languages: {
    title: "Languages",
    description: "Programming languages and frameworks",
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored', description: 'High-level programming language for web development, data science, and automation' },
      { name: 'C', icon: 'devicon-c-plain colored', description: 'Low-level programming language for system programming and embedded development' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored', description: 'Object-oriented programming language for system software and game development' },
      { name: 'Java', icon: 'devicon-java-plain colored', description: 'Platform-independent language for enterprise applications and Android development' },
    ]
  },
  frontend: {
    title: "Frontend Development",
    description: "Modern UI/UX technologies and frameworks",
    skills: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored', description: 'Markup language for structuring web content and semantic elements' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored', description: 'Styling language for web design, animations, and responsive layouts' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', description: 'Dynamic programming language for interactive web applications' },
      { name: 'React', icon: 'devicon-react-original colored', description: 'JavaScript library for building user interfaces with component-based architecture' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored', description: 'Typed superset of JavaScript for better code quality and maintainability' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', description: 'Utility-first CSS framework for rapid UI development' },
    ]
  },
  backend: {
    title: "Backend Development",
    description: "Server-side technologies and databases",
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', description: 'JavaScript runtime for building scalable server-side applications' },
      { name: 'Nest.js', icon: 'devicon-nestjs-plain colored', description: 'Progressive Node.js framework for building efficient server-side applications' },
      { name: 'Django', icon: 'devicon-django-plain colored', description: 'High-level Python web framework for rapid development and clean design' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', description: 'Relational database management system for structured data storage' },
    ]
  },
  tools: {
    title: "Development Tools",
    description: "Version control, deployment, and collaboration tools",
    skills: [
      { name: 'Git & GitHub', icon: 'devicon-git-plain colored', description: 'Version control system for tracking changes and collaborative development' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored', description: 'Powerful code editor with extensive extensions and debugging tools' },
      { name: 'Figma', icon: 'devicon-figma-plain colored', description: 'Collaborative design tool for UI/UX prototyping and design systems' },
      { name: 'Postman', icon: 'devicon-postman-plain colored', description: 'API development and testing platform for backend integration' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored', description: 'Google\'s platform for app development with backend services' },
    ]
  },
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section 
      id="skills" 
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive skill set spanning modern web development technologies, 
            from frontend frameworks to backend systems and development tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
            <div key={categoryKey} className="space-y-8" data-aos="fade-up" data-aos-delay={categoryIndex * 25}>
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
                <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                  {category.description}
                </p>
              </div>

              {/* Skills Flex Container */}
              <div className="flex flex-wrap justify-center items-center gap-6">
                                                  {category.skills.map((skill, skillIndex) => (
                   <Tooltip
                     key={skill.name}
                     title={
                       <div className="text-center">
                         <div className="font-semibold text-blue-300 mb-1">{skill.name}</div>
                         <div className="text-gray-300 leading-relaxed">{skill.description}</div>
                       </div>
                     }
                     placement="bottom"
                     color="#1f2937"
                     overlayStyle={{ maxWidth: '280px' }}
                   >
                     <div
                       className="group relative backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:bg-slate-800/50 text-center w-32 h-32 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
                       style={{
                         background: 'var(--bg-secondary)',
                         borderColor: 'var(--border-secondary)',
                         boxShadow: '0 4px 6px var(--shadow-secondary)'
                       }}
                       data-aos="zoom-in"
                       data-aos-delay={skillIndex * 100}
                     >
                                               {/* Skill Icon */}
                        <div className="flex justify-center items-center mb-3 relative z-10">
                          <div className="p-3 rounded-xl transition-all duration-300 flex justify-center items-center w-12 h-12 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/30" style={{ background: 'var(--bg-tertiary)' }}>
                            <i className={`${skill.icon} text-2xl group-hover:scale-110 group-hover:opacity-0 transition-all duration-300`} />
                          </div>
                        </div>

                       {/* Skill Name */}
                       <h4 className="text-xs font-semibold group-hover:text-blue-300 transition-colors duration-300 text-center relative z-10" style={{ color: 'var(--text-primary)' }}>
                         {skill.name}
                       </h4>

                       {/* Enhanced Hover Effect Background */}
                       <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-teal-500/10"></div>
                       
                       {/* Glow Effect */}
                       <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-sm"></div>
                     </div>
                   </Tooltip>
                 ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Additional Technologies
          </h3>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Continuously expanding my toolkit with emerging technologies and best practices
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux','Axios', 'Vite', 'Sass', 'Bootstrap', 'Material-UI', 'CI/CD', 'DevOps', 'Agile', 'Scrum',
              'RESTful APIs',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-primary)',
                  color: 'var(--accent-primary)'
                }}
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
