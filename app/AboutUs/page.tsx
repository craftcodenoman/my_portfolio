import React from "react";

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full Stack Developer & Agentic AI Enthusiast
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Personal Introduction */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                My Profile
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I-m Mohammad Noman Jawaid, a passionate and self-taught Full
                Stack Developer and Agentic AI enthusiast, focused on building
                smart, scalable, and future-ready web solutions. My journey
                combines a foundation in traditional knowledge with modern
                technical expertise, providing me with a unique perspective on
                problem-solving and innovation.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Technical Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I specialize in modern frontend technologies including HTML-5,
                TypeScript, Next.js, Tailwind CSS, shadcn ui, and Python.
                Currently, I am expanding my expertise in OpenAI Agents and
                Agentic AI systems, focusing on developing intelligent
                applications that leverage the latest advancements in artificial
                intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  HTML-5
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  Agentic AI
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  OpenAI
                </span>
              </div>
            </div>

            {/* Education & Background */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Education & Training
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My educational journey is diverse, beginning as a Hafiz-e-Quran
                (2001) and continuing through traditional academics at Citizen
                Public School followed by intermediate studies. Currently, I am
                enrolled in prestigious programs at GIAIC (since February 2024)
                and PIAIC (since December 2024), where I am gaining expertise in
                cutting-edge technologies and modern development methodologies.
              </p>
            </div>

            {/* Professional Goals */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Vision & Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                My mission is to pioneer the next wave of futuristic
                technologies by mastering cutting-edge AI systems and emerging
                digital frameworks. I am committed to harnessing these
                transformative tools to create solutions that not only solve
                todays challenges but anticipate tomorrow needs. Through
                continuous exploration of advanced technologies, I aim to
                contribute to a world where innovation drives positive change
                and technology empowers individuals and organizations to achieve
                their fullest potential.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">
                Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-emerald-800 mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-600">
                    Committed to ongoing professional development and acquiring
                    new skills
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-emerald-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    Constantly exploring new technologies and approaches to
                    problem-solving
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-emerald-800 mb-2">
                    Quality-Focused
                  </h4>
                  <p className="text-gray-600">
                    Dedicated to producing clean code and high-performance
                    applications
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-emerald-800 mb-2">
                    Collaboration
                  </h4>
                  <p className="text-gray-600">
                    Effective team player with strong communication skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
