const projects = [
  {
    title: "Deepfake Detection System",
    description:
      "A Django-based web app that detects AI-generated videos using a frame-based classification model.",
    github: "https://github.com/yourusername/deepfake-detection",
    demo: "https://deepfake-demo.vercel.app/",
    tech: ["Python", "Django", "React", "TensorFlow"],
  },
  {
    title: "Password Vault",
    description:
      "A React.js web app to securely store and manage passwords in local storage with CRUD operations.",
    github: "https://github.com/yourusername/password-vault",
    demo: "https://passwordvault.vercel.app/",
    tech: ["React", "JavaScript", "LocalStorage", "CSS"],
  },
  {
    title: "Vendor Registration Portal",
    description:
      "An Ant Design-powered React app with country-state-city selectors, modals, and validation.",
    github: "https://github.com/yourusername/vendor-form",
    demo: "https://vendor-form-demo.netlify.app/",
    tech: ["React", "Ant Design", "Redux", "Form Validation"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-sm font-medium text-center hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-xl bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm font-medium text-center hover:scale-105"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
