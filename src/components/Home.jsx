import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Home() {
  return (
    <div
      className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center"
      id="home"
    >
      <div className="max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-sora">
          Hi, I'm <span className="text-emerald-500">Subham Saha</span>
          <span className="wave">👋</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 font-Inter">
          Software Developer & Competitive Programmer
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl font-JetBrains Mono">
          I develop full-stack web applications and solve algorithmic
          challenges, creating efficient and impactful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row">
          <div className="flex gap-6 mb-10">
            <a
              href="#projects"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              View Projects
              <span className="ml-2">➜</span>
            </a>
            <a
              href={resume}
              download="SubhamSaha.pdf"
              className="
    inline-flex items-center justify-center gap-2

    border-2 border-emerald-500 text-emerald-600
    hover:bg-emerald-50

    font-bold
    text-base sm:text-lg

    py-3 px-6 sm:px-8
    w-full sm:w-auto

    rounded-lg
    whitespace-nowrap

    transition-all duration-300
  "
            >
              Resume
              <span className="text-xl">⭳</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 md:mt-3 ml-4">
            <a href="https://github.com/sahaX01" target="_blank">
              <FaGithub size={26} />
            </a>

            <a href="https://linkedin.com/in/subham-saha-" target="_blank">
              <FaLinkedin size={26} />
            </a>

            <a href="https://twitter.com/subhsa__" target="_blank">
              <FaTwitter size={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
