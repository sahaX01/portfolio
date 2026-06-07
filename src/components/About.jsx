import photo from "../assets/profile.png";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
function About() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 px-6 md:px-20" id="about">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          About Me
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Text Section */}
        <div className="flex-1 text-slate-700 text-lg leading-relaxed">
          <p className="mb-6">
            Currently a <b>2nd-year </b> Computer Science and Engineering B.Tech student 
            at Cooch Behar Government Engineering College, I am passionate about
            problem-solving and scalable real-time systems. I serve my
            department as a <b>Class Representative </b> and <b>Training & Placement
            Coordinator</b>, assisting in academic and placement coordination.
          </p>

          <p className="mb-10">
            With over{" "}
            <span className="font-bold text-black">200+ problems solved</span>{" "}
            on platforms like LeetCode, Codeforces and CodeChef, I have
            developed a strong foundation in Data Structures and Algorithms,
            primarily using{" "}
            <span className="text-emerald-600 font-semibold">Java</span>. I
            apply these problem-solving skills to build efficient and scalable
            software solutions using{" "}
            <span className="text-emerald-600 font-semibold">
              Modern Web Technologies
            </span>
            . .
          </p>

          {/* Stats */}

          <div className="flex flex-wrap gap-4 mt-10">
            {/* CGPA */}
            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-sm hover:shadow-md transition relative overflow-hidden">
              <span className="relative z-10">8.03 CGPA</span>
              <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 rotate-12 animate-shine"></span>
            </div>

            {/* LeetCode */}
            <a
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
              href="https://leetcode.com/Subhsa/"
            >
              <SiLeetcode className="text-yellow-500 text-xl" />
              <span className="font-semibold text-slate-900">
                LeetCode • 1440+
              </span>
            </a>

            {/* Codeforces */}
            <a
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
              href="https://codeforces.com/profile/subhamsaha"
            >
              <SiCodeforces className="text-blue-600 text-xl" />
              <span className="font-semibold text-slate-900">
                Codeforces • Newbie
              </span>
            </a>

            {/* CodeChef */}
            <a
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
              href="https://www.codechef.com/users/subhamsaha01"
            >
              <SiCodechef className="text-amber-700 text-xl" />
              <span className="font-semibold text-slate-900">
                CodeChef • 1★
              </span>
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={photo}
            alt="profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
