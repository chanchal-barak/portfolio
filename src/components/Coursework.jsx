import { motion } from "framer-motion";

export default function Coursework() {
  return (
    <section id="coursework" className="py-24 px-6 max-w-4xl mx-auto section bg-[#111]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white mb-6 border-b border-gray-700 inline-block pb-2"
      >
        Coursework / Competitive Programming
      </motion.h2>

      {/* Paragraphs (animated staggered fade-in) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.2,
            },
          },
        }}
        className="text-gray-300 leading-relaxed space-y-4"
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          🧠 Solved <b>300+ DSA problems</b> across platforms like LeetCode, Codeforces, and GeeksforGeeks.
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          📚 Completed comprehensive courses in <b>Web Development</b> and <b>Data Structures in C++</b>.
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          💻 Practiced algorithmic problem-solving using C++, improving efficiency and analytical thinking.
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          🏆 Participated in online coding contests and hackathons, collaborating with teams to design creative solutions.
        </motion.p>
      </motion.div>

      {/* Gradient Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-12 rounded-full"
      />
    </section>
  );
}
