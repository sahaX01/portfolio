import Badge from "./Badge";
import "./effect.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiThreedotjs,
  SiGreensock,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiMysql } from "react-icons/di";
import { SiRender, SiHoppscotch } from "react-icons/si";
import { FaPlug } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="cross-bg w-full py-24 px-6 md:px-20 bg-white " id="skills">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">My Tech Stack</h1>

        <p className="text-slate-600 mt-2">Code • Create • Deploy</p>
      </div>
      {/* Programming Languages */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        💻 Programming Languages
      </h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <Badge icon={FaCode} label="C" color="bg-cyan-700" />
        <Badge icon={FaDatabase} label="SQL" color="bg-indigo-500" />
        <Badge icon={FaJava} label="Java" color="bg-red-600" />
      </div>

      {/* Frontend */}
      <h2 className="text-xl font-semibold mb-4">🌐 Frontend Development</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <Badge icon={FaHtml5} label="HTML5" color="bg-orange-600" />
        <Badge icon={FaCss3Alt} label="CSS3" color="bg-blue-500" />
        <Badge
          icon={SiJavascript}
          label="JavaScript"
          color="bg-yellow-500 text-black"
        />
        <Badge icon={FaBootstrap} label="Bootstrap" color="bg-purple-600" />
        <Badge icon={FaReact} label="React.js" color="bg-cyan-500" />
        <Badge icon={SiTailwindcss} label="Tailwind CSS" color="bg-teal-500" />
        <Badge icon={SiRedux} label="Redux Toolkit" color="bg-purple-500" />
        <Badge icon={SiGreensock} label="GSAP" color="bg-green-600" />
        <Badge icon={SiThreedotjs} label="Three.js" color="bg-black" />
      </div>

      {/* Backend */}
      <h2 className="text-xl font-semibold mb-4">⚙️ Backend Development</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <Badge icon={SiNodedotjs} label="Node.js" color="bg-green-600" />
        <Badge icon={SiExpress} label="Express.js" color="bg-black" />
        <Badge icon={DiMysql} label="MySQL" color="bg-indigo-600" />
        <Badge icon={SiMongodb} label="MongoDB" color="bg-green-700" />
        <Badge icon={FaPlug} label="REST APIs" color="bg-slate-500 " />
      </div>

      {/* Tools */}
      <h2 className="text-xl font-semibold mb-4">🛠 Tools & Platforms</h2>
      <div className="flex flex-wrap gap-3">
        <Badge icon={VscVscode} label="VS Code" color="bg-blue-500" />
        <Badge icon={FaGitAlt} label="Git" color="bg-orange-500" />
        <Badge icon={FaGithub} label="GitHub" color="bg-black" />
        <Badge icon={SiRender} label="Render" color="bg-gray-800" />
        <Badge
          icon={SiHoppscotch}
          label="Hoppscotch"
          color="bg-yellow-500 text-black"
        />
      </div>
    </div>
  );
};

export default Skills;
