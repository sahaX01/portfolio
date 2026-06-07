import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="relative mt-24 text-slate-800 bg-white">
      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-white to-white"></div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-wide">
            Subham Saha
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Building clean & modern web experiences
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm">
          {["Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-slate-600 hover:text-blue-600 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/subham-saha-"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
             hover:bg-blue-600 hover:text-white hover:scale-110
             transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/subhsa__"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
             hover:bg-black hover:text-white hover:scale-110
             transition-all duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://m.facebook.com/subham.saha.935782/"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
                       hover:bg-blue-500 hover:text-white hover:scale-110
                       transition-all duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com/subhsa__"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
                       hover:bg-pink-500 hover:text-white hover:scale-110
                       transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/sahaX01"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
                       hover:bg-slate-800 hover:text-white hover:scale-110
                       transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:subham42cse@gmail.com"
            className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm
                       hover:bg-red-500 hover:text-white hover:scale-110
                       transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-200"></div>

        {/* Bottom */}
        <p className="text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Subham Saha — Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
