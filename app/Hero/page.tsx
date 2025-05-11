"use client";

import Image from "next/image";

function HeroSection() {
  const galleryImages = [
    { src: "/pic-2.webp", alt: "Gallery Image 1" },
    { src: "/pic-10.jpg", alt: "Gallery Image 2" },
    { src: "/pic-11.jpg", alt: "Gallery Image 3" },
    { src: "/pic-9.jpg", alt: "Gallery Image 4" },
    { src: "/pic-6.jpg", alt: "Gallery Image 5" },
    { src: "/pic-12.png", alt: "Gallery Image 6" },
    { src: "/pic-1.jpg", alt: "Gallery Image 7" },
    { src: "/pic-8.webp", alt: "Gallery Image 8" },
  ];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-300 via-gray-500 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight drop-shadow-sm">
              Hi <br /> I am <br />
              <span className="text-indigo-900">Mohammad Noman Jawaid</span>
            </h1>

            <p className="text-lg text-slate-800 mt-4 font-bold">
              Full-Stack Developer | Agentic AI Creator | GIAIC & PIAIC Learner
            </p>

            <div className="mt-6">
              <button className="bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 hover:scale-105 transition duration-300">
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-[21.25rem] md:h-[21.25rem] rounded-full overflow-hidden border-[8px] border-gray-700 shadow-xl hover:rotate-1 hover:scale-105 transition duration-500 ease-in-out">
              <Image
                src="/profile-pic.jpg"
                alt="Mohammad Noman Jawaid"
                fill
                sizes="(max-width: 640px) 16rem, 21.25rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-white bg-blue-900 py-3 mb-6 text-center rounded-md shadow">
            My Passion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
