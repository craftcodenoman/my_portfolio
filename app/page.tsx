import Head from "next/head";
import HeroSection from "./Hero/page";
// import EducationSection from "./Education/page"; 
// import SkillsSection from "./Skills/page";
// import ContactSection from "./ContactUs/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammad Noman Jawaid - Portfolio</title>
        <meta name="description" content="Portfolio website of Mohammad Noman Jawaid - Hafiz-e-Quran and Full Stack Developer specializing in AI technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Mohammad Noman Jawaid, Web Developer, Full Stack Developer, Hafiz-e-Quran, AI Developer, Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        
        
        <main className="flex-grow">
          <HeroSection />
          {/* <AboutSection />
          <EducationSection />
          <SkillsSection /> */}
          {/* <ContactSection /> */}
        </main>
        
        
      </div>
    </>
  );
}

