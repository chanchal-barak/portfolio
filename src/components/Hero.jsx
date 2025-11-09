import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
        {/* Profile Image */}
        <motion.img
          src="/chanchal.jpg"
          alt="Chanchal Barak"
          className="rounded-full w-48 h-48 md:w-56 md:h-56 mb-8 md:mb-0 object-cover border-4 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08 }}
        />

        {/* Intro Text */}
        <motion.div
          className="max-w-xl text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
            Hi, I’m <span className="text-indigo-400">Chanchal Barak</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
            Software Engineer | MERN Stack Developer <br />
            Building modern, scalable, and visually engaging web applications.
          </p>

        </motion.div>
      </div>

      
    </section>
  );
}
