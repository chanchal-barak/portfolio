import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Issue Tracker App",
    stack: "MERN Stack (MongoDB, Express.js, React, Node.js)",
    desc: "A collaborative issue tracker where users can create, update, and resolve issues. Added secure backend APIs and MongoDB Atlas integration.",
    link: "https://github.com/chanchal-barak/MERIAWAJ", // your repo link
  },
  {
    title: "Portfolio Website",
    stack: "React.js, Tailwind CSS, Framer Motion",
    desc: "Designed and developed a personal portfolio to showcase my projects and skills with smooth animations and modern UI.",
    link: "https://github.com/chanchal-barak/portfolio", // your repo link
  },
  {
    title: "Weather Dashboard",
    stack: "React, OpenWeather API",
    desc: "Built a weather app that fetches real-time data from OpenWeather API and shows dynamic backgrounds based on weather conditions.",
    link: "https://github.com/chanchal-barak/weather-dashboard", // your repo link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto section bg-[#111] relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white mb-10 border-b border-gray-700 inline-block pb-2"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(59,130,246,0.3)",
            }}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Tech Stack: {p.stack}
            </p>
            <p className="text-gray-300 leading-relaxed">{p.desc}</p>

            {/* View Code button */}
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition"
            >
              <Github size={18} />
              View Code
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-16 rounded-full"
      />
    </section>
  );
}

