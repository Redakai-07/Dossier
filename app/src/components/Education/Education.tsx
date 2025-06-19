const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    college: "Your College Name, City",
    year: "2021 – 2025",
  },
  {
    degree: "High School – Science Stream",
    college: "Your School Name, City",
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
    <section id="education" className="bg-gray-950 text-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">
          Education & Certifications
        </h2>

        {/* Education Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-orange-500 pl-4">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map((item, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded shadow-md">
                <h4 className="text-xl font-bold text-orange-300">{item.degree}</h4>
                <p className="text-gray-300">{item.college}</p>
                <p className="text-gray-400 text-sm">{item.year}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-orange-500 pl-4">
            Certifications
          </h3>
          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-300">{cert.title}</h4>
                    <p className="text-gray-300 text-sm">
                      {cert.platform} • {cert.year}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 md:mt-0 text-sm text-orange-400 hover:underline"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
