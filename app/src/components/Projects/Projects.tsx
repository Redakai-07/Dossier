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
    <section id="projects" className="bg-gray-900 text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-orange-400/20 transition p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-orange-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-700 rounded-full text-orange-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
