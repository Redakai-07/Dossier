// const skills = {
//   frontend: [
//     { name: "HTML5", icon: "devicon-html5-plain colored" },
//     { name: "CSS3", icon: "devicon-css3-plain colored" },
//     { name: "JavaScript", icon: "devicon-javascript-plain colored" },
//     { name: "React", icon: "devicon-react-original colored" },
//     { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
//   ],
//   backend: [
//     { name: "Node.js", icon: "devicon-nodejs-plain colored" },
//     { name: "Express", icon: "devicon-express-original colored" },
//     { name: "Django", icon: "devicon-django-plain colored" },
//     { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
//     { name: "MySQL", icon: "devicon-mysql-plain colored" },
//   ],
//   tools: [
//     { name: "Git", icon: "devicon-git-plain colored" },
//     { name: "GitHub", icon: "devicon-github-original" },
//     { name: "VS Code", icon: "devicon-vscode-plain colored" },
//     { name: "Figma", icon: "devicon-figma-plain colored" },
//     { name: "Postman", icon: "devicon-postman-plain colored" },
//   ],
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="w-full bg-gray-950 text-white py-16 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">Skills & Tech Stack</h2>

//         {/* Each Category */}
//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category} className="mb-10">
//             <h3 className="text-2xl font-semibold text-white mb-6 capitalize border-l-4 border-orange-400 pl-4">
//               {category}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//               {items.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg shadow hover:shadow-orange-400/20 transition"
//                 >
//                   <i className={`${skill.icon} text-4xl`} />
//                   <span className="text-sm font-medium text-gray-200">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

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
    <section id="skills" className="bg-gray-950 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center text-orange-400 mb-14">Skills & Tech Stack</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-orange-500/10 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <i className={`${skill.icon} text-3xl`} />
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.level}% proficient</p>
                </div>
              </div>

              {/* Skill Bar */}
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
