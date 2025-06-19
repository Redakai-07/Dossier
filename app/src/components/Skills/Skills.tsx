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

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const skills = [
    { name: "HTML5", level: 95, icon: "devicon-html5-plain colored" },
    { name: "CSS3", level: 90, icon: "devicon-css3-plain colored" },
    { name: "JavaScript", level: 88, icon: "devicon-javascript-plain colored" },
    { name: "React", level: 85, icon: "devicon-react-original colored" },
    { name: "Node.js", level: 78, icon: "devicon-nodejs-plain colored" },
    { name: "MongoDB", level: 70, icon: "devicon-mongodb-plain colored" },
    { name: "Git & GitHub", level: 80, icon: "devicon-git-plain colored" },
    { name: "Django", level: 65, icon: "devicon-django-plain colored" },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <section id="skills" className="bg-gray-950 text-white py-16 px-4 md:px-12">
            <div className="max-w-5xl mx-auto space-y-2" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">Skills & Tech Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-2" data-aos="fade-up">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-2" data-aos="fade-up">
                            {/* Icon and Tooltip */}
                            <div className="flex items-center gap-3 group relative space-y-2" data-aos="fade-up">
                                <i className={`${skill.icon} text-3xl`} />
                                <span className="text-lg font-semibold text-white">{skill.name}</span>
                                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    {skill.level}% proficient
                                </span>
                            </div>

                            {/* Skill Bar */}
                            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden space-y-2">
                                <div
                                    className="bg-orange-500 h-4 rounded-full transition-all duration-1000 ease-in-out space-y-2" data-aos="fade-up"
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
