import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Meri Awaj (My One Mile)",
    stack: "MERN Stack (MongoDB, Express.js, React, Node.js, Socket.io)",
    desc: "A full-stack civic engagement platform where users can report, discuss, and resolve local community issues like potholes, waste management, and public safety with real-time updates and collaborative visibility.",
    link: "https://github.com/chanchal-barak/MyOneMile",
  },
  {
    title: "CardioAI Pro",
    stack: "Machine Learning, FastAPI, React.js, Vite, Random Forest",
    desc: "A heart disease prediction system that analyzes clinical patient data using a Random Forest Classifier and provides risk prediction, confidence score, and medical guidance through an interactive healthcare dashboard.",
    link: "https://github.com/chanchal-barak/ML_heart_disease_model",
  },
  {
    title: "CoLive",
    stack: "React.js, Tailwind CSS, TypeScript, Vite",
    desc: "An AI roommate matching platform designed for women-focused co-living. It offers compatibility assessment, smooth UI interactions, modern dashboard pages, and a safe roommate discovery experience.",
    link: "https://github.com/chanchal-barak/CoLive",
  },
  {
    title: "Finance AI",
    stack: "MERN Stack, Chart.js, JWT Auth, OpenAI Integration",
    desc: "A smart expense tracker with AI-powered financial insights where users can manage expenses, track savings, analyze spending behavior, and view dashboard-based reports with intelligent recommendations.",
    link: "https://github.com/chanchal-barak/finance-ai-client",
  },
  {
    title: "Portfolio Website",
    stack: "React.js, Tailwind CSS, Framer Motion",
    desc: "Designed and developed a personal portfolio to showcase my projects and skills with smooth animations, elegant transitions, and a modern developer-focused UI.",
    link: "https://github.com/chanchal-barak/portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto section bg-[#111] relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 border-b border-gray-700 inline-block pb-2"
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
              delay: i * 0.15,
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(59,130,246,0.25)",
            }}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {p.title}
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              <span className="font-medium text-gray-300">Tech Stack:</span>{" "}
              {p.stack}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {p.desc}
            </p>

            {/* View Code Button */}
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition"
            >
              <Github size={18} />
              View Code
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Gradient Line */}
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