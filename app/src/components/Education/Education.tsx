const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    college: "Govt Sri Krishnarajendra Technological Institute, Bengaluru",
    year: "2021 – 2025",
  },
  {
    degree: "Pre-University – Science Stream",
    college: "Sri Sathya Sai Loka Seva Pre-University College, Alike",
    year: "2019 – 2021",
  },
];

const certifications = [
  {
    title: "React - The Complete Guide",
    platform: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/example", // optional
  },
  {
    title: "Python for Data Science",
    platform: "Coursera",
    year: "2023",
    link: "https://coursera.org/verify/example",
  },
  {
    title: "DSA Self-Paced Course",
    platform: "GeeksforGeeks",
    year: "2023",
    link: "",
  },
];

const Education = () => {
  return (
    <section 
      id="education" 
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Education & Certifications
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            My academic journey and professional certifications that shape my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-sm p-6 rounded-2xl border shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-secondary)',
                    boxShadow: '0 4px 6px var(--shadow-secondary)'
                  }}
                >
                  <h4 className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300 mb-2" style={{ color: 'var(--accent-secondary)' }}>
                    {item.degree}
                  </h4>
                  <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{item.college}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-sm p-6 rounded-2xl border shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-secondary)',
                    boxShadow: '0 4px 6px var(--shadow-secondary)'
                  }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300 mb-2" style={{ color: 'var(--accent-secondary)' }}>
                        {cert.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {cert.platform} • {cert.year}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border rounded-xl transition-all duration-300 text-sm font-medium"
                        style={{
                          background: 'var(--bg-tertiary)',
                          borderColor: 'var(--border-primary)',
                          color: 'var(--accent-primary)'
                        }}
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm border rounded-2xl p-8" style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-secondary)'
          }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Continuous Learning</h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              I believe in lifelong learning and constantly update my skills through online courses, 
              workshops, and hands-on projects to stay current with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
