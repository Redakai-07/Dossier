import profileImg from '../../assets/profile.jpg'; // replace with your image

const hobbies = [
  { title: "Web Development", icon: "💻", description: "Building user-friendly interfaces and full-stack apps." },
  { title: "Tech Exploration", icon: "🧠", description: "Always learning new frameworks, tools, and trends." },
  { title: "AI & ML", icon: "🤖", description: "Fascinated by deep learning and computer vision." },
];

const timeline = [
  { year: "2021", event: "Started B.E. in Computer Science" },
  { year: "2023", event: "Built multiple full-stack projects" },
  { year: "2024", event: "Completed internships in Web Dev" },
  { year: "2025", event: "Graduating and seeking tech opportunities" },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-gray-900 text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header & Intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <img
            src={profileImg}
            alt="Venkatesh Prabhatha Kana"
            className="w-48 h-48 rounded-full shadow-lg object-cover border-4 border-orange-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-3">
              Hello! I'm <span className="text-orange-300 font-semibold">Venkatesh Prabhatha Kana</span>, a Computer Science graduate passionate about front-end & full-stack development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I love creating interactive and accessible web apps, and enjoy experimenting with AI-based tech in my free time.
            </p>
          </div>
        </div>

        {/* Hobbies / Interests Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-orange-500/30 transition-shadow"
            >
              <div className="text-4xl mb-3">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-orange-300 mb-2">{hobby.title}</h3>
              <p className="text-gray-400 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-orange-400 pl-6">
          {timeline.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="absolute -left-3 top-1 w-5 h-5 bg-orange-400 rounded-full shadow-lg"></div>
              <h4 className="text-lg font-semibold text-orange-300">{item.year}</h4>
              <p className="text-gray-300">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
