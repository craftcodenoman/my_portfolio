import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Vercel Projects",
      description: "E-commerce business with sourcing and branding strategy.",
      links: [
        {
          label: "Milestone 1 - Dynamic Resume",
          url: "https://milestone-1-phi-teal.vercel.app/",
        },
        {
          label: "Nike Website",
          url: "https://nike-nu-lovat.vercel.app/",
        },
      ],
    },
    {
      name: "GitHub Projects Code ",
      description: "Personal portfolio built using Next.js and Tailwind CSS.",
      links: [
        {
          label: "Streamlit Civic Project Code",
          url: "https://github.com/craftcodenoman/Sir_Zia_Assigment-five.git",
        },

        {
          label: "Streamlit Unit Convertor Code",
          url: "https://github.com/craftcodenoman/Sir-Zia-Class-Project.git",
        },
        {
          label: "Nike Website Code",
          url: "https://github.com/craftcodenoman/nike.git",
        },
      ],
    },
    {
      name: "AI Resume Showcase",
      description: "My Streamlit projects using Python.",
      links: [
        {
          label: "Civic App (Streamlit)",
          url: "https://civicapp-mumg9cgrakfra6nhd6v7n8.streamlit.app/",
        },
        {
          label: "Unit Convertor",
          url: "https://sir-zia-class-project-7pb79aypf93fv92bso5gqs.streamlit.app/",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white bg-blue-900 py-3 mb-6 text-center rounded-md shadow">
          My Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.name}
              </h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-700 to-indigo-400 shadow-2xl shadow-emerald-200 hover:from-indigo-800 hover:to-indigo-500 transition duration-300 text-sm font-semibold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// "use client";

// import React from "react";

// function Projects  ()  {
//   const projects = [
//     {
//       name: "Vercel Projects",
//       description: "E-commerce business with sourcing and branding strategy.",
//       links: [
//         { label: "Milestone 1 - Dynamic Resume" },
//         { label: "Nike Website" },
//       ],
//     },
//     {
//       name: "GitHub Projects Code",
//       description: "Personal portfolio built using Next.js and Tailwind CSS.",
//       links: [
//         { label: "Streamlit Civic Project Code" },
//         { label: "Streamlit Unit Convertor Code" },
//         { label: "Nike Website Code" },
//       ],
//     },
//     {
//       name: "AI Resume Showcase",
//       description: "My Streamlit projects using Python.",
//       links: [
//         { label: "Civic App (Streamlit)" },
//         { label: "Unit Convertor" },
//       ],
//     },
//   ];

//   return (
//     <section className="min-h-screen py-20 px-6 bg-gray-100">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-white bg-blue-900 py-3 mb-6 text-center rounded-md shadow">
//           My Projects
//         </h2>

//         <div className="grid gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.name}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//                 {project.name}
//               </h2>
//               <p className="text-gray-600 mb-6">{project.description}</p>

//               {/* Replaced anchor tags with divs */}
//               <div className="space-y-3">
//                 {project.links.map((link, index) => (
//                   <div
//                     key={index}
//                     className="block w-full text-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-700 to-indigo-400 shadow-2xl shadow-emerald-200 text-sm font-semibold cursor-default"
//                   >
//                     {link.label}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
