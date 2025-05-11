function EducationSection() {
  const education = [
    {
      id: 1,
      title: "Hifz-e-Quran",
      institution: "Taleem-ul-Quran",
      period: "1999-2001",
      description:
        "Completed memorization of the Holy Quran (Hafiz) with proper Tajweed rules and recitation techniques",
      icon: "📖",
    },
    {
      id: 2,
      title: "Matriculation (HSC)",
      institution: "Citizen Public School",
      period: "2010",
      description:
        "Successfully completed Secondary School Certificate with focus on Commerce subjects and achieved excellent academic standing",
      icon: "🎓",
    },
    {
      id: 3,
      title: "FSC (Intermediate)",
      institution: "Private Study",
      period: "2013",
      description:
        "Completed Higher Secondary Certificate in Commerce through self-discipline and dedicated independent study",
      icon: "📚",
    },
    {
      id: 4,
      title: "GIAIC Program",
      institution: "Governor Initiative for AI Computing",
      period: "February 2024 - Present",
      description:
        "Pursuing advanced technology skills including artificial intelligence, cloud computing, and modern web development practices",
      icon: "💻",
    },
    {
      id: 5,
      title: "PIAIC Program",
      institution: "Presidential Initiative for AI & Computing",
      period: "December 2024 - Present",
      description:
        "Expanding expertise in cutting-edge programming frameworks, artificial intelligence technologies, and industry-standard development workflows",
      icon: "🤖",
    },
    {
      id: 6,
      title: "Continuous Professional Development",
      institution: "Self-Directed Learning",
      period: "Continously",
      description:
        "Consistently pursuing new technical skills and knowledge through online courses, technical workshops, and practical project applications",
      icon: "🔄",
    },
  ];

  return (
    <section id="education" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Education & Learning Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational path combines traditional Islamic knowledge with
            modern technology skills, reflecting my commitment to lifelong
            learning and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-700">
                      {item.title}
                    </h3>
                    <p className="text-emerald-600 text-sm">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 px-3 py-1 rounded-full text-emerald-800 text-sm font-medium inline-block mb-4">
                  {item.period}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual representation */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute h-1 w-full bg-emerald-200 top-1/2 transform -translate-y-1/2"></div>

            {/* Timeline points */}
            <div className="flex justify-between relative">
              {[2001, 2010, 2013, 2024, 2025].map((year, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-emerald-600 rounded-full z-10"></div>
                  <p className="mt-2 text-emerald-700 font-medium">{year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
