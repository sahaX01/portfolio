import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import projects from "./projects";
function Project() {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white" id="projects">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Projects Grid */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-50 shadow-md rounded-xl overflow-hidden w-full md:w-1/3 hover:shadow-xl transition flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-slate-600 text-sm mb-3">
                {project.description.map((line, i) => (
                  <span key={i} className="block">
                    • {line}
                  </span>
                ))}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Icons (fixed at bottom) */}
              <div className="flex gap-4 mt-auto pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-green-600 hover:text-green-800 text-xl"
                >
                  <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-slate-800 hover:text-black text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/sahaX01"
          target="_blank"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          More Projects <span className="ml-2">➜</span>
        </a>
      </div>
    </section>
  );
}

export default Project;
