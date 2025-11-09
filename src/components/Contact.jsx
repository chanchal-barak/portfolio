import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import TooltipWrapper from "./TooltipWrapper"; // from your Skills section

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      label: "Email",
      value: "chanchal@gmail.com",
      link: "mailto:chanchal@gmail.com",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      label: "Phone",
      value: "+91 9310365700",
      link: "tel:+919310365700",
      color: "from-green-500 to-lime-400",
    },
    {
      icon: <Github className="w-6 h-6 text-gray-300" />,
      label: "GitHub",
      value: "chanchal-barak",
      link: "https://github.com/chanchal-barak",
      color: "from-gray-500 to-gray-300",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      label: "LinkedIn",
      value: "Chanchal Barak",
      link: "https://www.linkedin.com/in/chanchal-barak-378582323",
      color: "from-blue-600 to-purple-500",
    },
  ];

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-[#0f0f0f] text-gray-300 text-center border-t border-gray-800"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white mb-12 border-b border-gray-700 inline-block pb-2"
      >
        Details
      </motion.h2>

      {/* Contact Grid */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-3xl mx-auto">
        {contacts.map((c, i) => (
          <TooltipWrapper key={i} content={c.value}>
            <motion.a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`flex flex-col items-center justify-center w-32 h-32 bg-gradient-to-br ${c.color} p-[2px] rounded-2xl group shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition`}
            >
              <div className="bg-[#111] w-full h-full flex flex-col justify-center items-center rounded-2xl gap-2 group-hover:bg-[#151515] transition">
                {c.icon}
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                  {c.label}
                </span>
              </div>
            </motion.a>
          </TooltipWrapper>
        ))}
      </div>

      {/* Footer line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-16 rounded-full"
      />

      {/* Copyright */}
      <p className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white">Chanchal Barak</span> — Built with ❤️ using React, Tailwind & Framer Motion.
      </p>
    </motion.footer>
  );
}
