import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    stack: "React.js, Tailwind CSS, Framer Motion",
    desc: "Developed a personal portfolio to showcase my skills and projects. Implemented smooth animations, responsive layout, and modern UI using Tailwind CSS and Framer Motion.",
  },
  {
    title: "Issue Tracker App",
    stack: "MERN Stack (MongoDB, Express.js, React, Node.js)",
    desc: "Built a full-stack issue tracking platform that allows users to report, update, and resolve issues collaboratively. Added authentication, filters, and real-time updates.",
  },
  {
    title: "Blog Web App",
    stack: "MERN Stack",
    desc: "Developed a blogging platform with JWT authentication, rich text editing, and MongoDB Atlas integration. Deployed with a responsive, clean interface.",
  },
  {
    title: "Weather Dashboard",
    stack: "React, OpenWeather API",
    desc: "A simple weather app fetching real-time weather data using REST APIs. Includes animated backgrounds depending on temperature and conditions.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto section bg-[#111]">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white mb-10 border-b border-gray-700 inline-block pb-2"
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.2, // stagger each card
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(59,130,246,0.2)",
            }}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Tech Stack: {p.stack}
            </p>
            <p className="text-gray-300 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Line Animation */}
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

