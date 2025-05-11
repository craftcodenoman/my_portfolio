// function SkillsSection() {
//   const skills = [
//     { id: 1, name: "Quran", percentage: 95 },
//     { id: 1, name: "HTML-5", percentage: 85 },
//     { id: 2, name: "Web Development", percentage: 70 },
//     { id: 3, name: "Next.js", percentage: 65 },
//     { id: 4, name: "TypeScript", percentage: 60 },
//     { id: 5, name: "Tailwind CSS", percentage: 75 },
//     { id: 6, name: "AI & ML Basics", percentage: 50 },
//   ];

//   return (
//     <section id="skills" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//           My Skills
//         </h2> */}

// <h2 className="text-4xl font-bold text-white bg-indigo-600 py-2 mb-6 text-center rounded-md shadow">
//           My Skills
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//           {skills.map((skill) => (
//             <div key={skill.id} className="mb-6">
//               <div className="flex justify-between mb-1">
//                 <span className="text-gray-700 font-medium">{skill.name}</span>
//                 <span className="text-gray-600">{skill.percentage}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div
//                   className="bg-emerald-600 h-2.5 rounded-full"
//                   style={{ width: `${skill.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default SkillsSection;

// import Image from "next/image";

// function SkillsSection() {
//   const skills = [
//     { id: 1, name: "Quran", percentage: 95, logo: "/logos/quran.png" },
//     { id: 2, name: "HTML-5", percentage: 85, logo: "/logos/html5.png" },
//     { id: 3, name: "Web Development", percentage: 70, logo: "/logos/webdev.png" },
//     { id: 4, name: "Next.js", percentage: 65, logo: "/logos/nextjs.png" },
//     { id: 5, name: "TypeScript", percentage: 60, logo: "/logos/typescript.png" },
//     { id: 6, name: "Tailwind CSS", percentage: 75, logo: "/logos/tailwind.png" },
//     { id: 7, name: "AI & ML Basics", percentage: 50, logo: "/logos/ai.png" },
//   ];

//   return (
//     <section id="skills" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white bg-indigo-600 py-2 mb-6 text-center rounded-md shadow">
//           My Skills
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//           {skills.map((skill) => (
//             <div key={skill.id} className="mb-6">
//               <div className="flex items-center justify-between mb-1">
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src={skill.logo}
//                     alt={skill.name}
//                     width={24}
//                     height={24}
//                     className="rounded-sm"
//                   />
//                   <span className="text-gray-700 font-medium">{skill.name}</span>
//                 </div>
//                 <span className="text-gray-600">{skill.percentage}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div
//                   className="bg-emerald-600 h-2.5 rounded-full"
//                   style={{ width: `${skill.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SkillsSection;

import {
  SiHtml5,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LiaQuranSolid } from "react-icons/lia";

function SkillsSection() {
  const skills = [
    {
      id: 1,
      name: "Quran",
      percentage: 95,
      icon: <LiaQuranSolid className="text-green-700" />,
    },
    {
      id: 2,
      name: "HTML-5",
      percentage: 85,
      icon: <SiHtml5 className="text-orange-600" />,
    },
    {
      id: 3,
      name: "Python",
      percentage: 70,
      icon: <FaPython className="text-blue-500" />,
    },
    {
      id: 4,
      name: "Next.js",
      percentage: 65,
      icon: <SiNextdotjs className="text-black" />,
    },
    {
      id: 5,
      name: "TypeScript",
      percentage: 60,
      icon: <SiTypescript className="text-blue-700" />,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      percentage: 75,
      icon: <SiTailwindcss className="text-teal-500" />,
    },
    {
      id: 7,
      name: "AI & ML Basics",
      percentage: 50,
      icon: <GiArtificialIntelligence className="text-purple-700" />,
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white bg-indigo-600 py-2 mb-6 text-center rounded-md shadow">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="text-xl">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">
                    {skill.name}
                  </span>
                </div>
                <span className="text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-emerald-600 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
