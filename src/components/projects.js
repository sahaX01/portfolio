import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
const projects = [
  {
    title: "WANDERLUST - Full Stack MVC Web Application",
    image: p1,
    date: "Nov 2025, CGEC",

    description: [
      "Developed a full-stack travel web application using MVC architecture with secure user authentication using cookies.",
      "Implemented core features including user registration, login/logout system, session handling, and dynamic content rendering.",
      "Built a structured backend with separation of concerns using MVC design pattern for scalability and maintainability.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/sahaX01/wanderlust",
    live: "https://wanderlust-pquf.onrender.com",
  },
  {
    title: "CROESO 7.0 - Frontend Project",
    image: p2,
    date: "Feb 2026, CGEC",
    description: [
      "Designed and developed a responsive frontend website for the college freshers' party event 'CROESO 7.0'.",
      "Created interactive UI components for schedules, registrations, and announcements.",
      "Strong focus on responsiveness and user experience.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    github: "https://github.com/sahaX01/croeso7.0",
    live: "https://croeso2k25.netlify.app",
  },
  {
    title: "VideoEdiotor Portfolio - Frontend Project ",
    image: p3,
    date: "Jan 2026, CGEC",
    description: [
      "Built a video editor portfolio website to showcase creative video editing projects and motion-based storytelling work.",
"Simulated real-world workplace experience by organizing and presenting video editing projects in a professional portfolio structure.",
"Emphasized responsive UI, visual impact, and smooth user experience for recruiters and clients.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "GSAP", "Three.js"],
    github: "https://github.com/sahaX01/VideoEditor",
    live:"https://alokdas01.netlify.app",
  },
];

export default projects;
