import { motion } from "framer-motion";
import { Code2, Boxes, Database, Wrench, Users } from "lucide-react";

export default function Skills() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto section bg-[#111]"
    >
      <h2 className="text-2xl font-bold text-white mb-10 border-b border-gray-700 inline-block pb-2">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-gray-300">
        {/* Languages */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
            <Code2 className="text-blue-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-400 mb-1">Languages</h3>
            <p className="text-sm text-gray-400">
              C++, C, JavaScript, HTML, CSS, Python
            </p>
          </div>
        </div>

        {/* Frameworks */}
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
            <Boxes className="text-purple-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-purple-400 mb-1">
              Frameworks / Libraries
            </h3>
            <p className="text-sm text-gray-400">
              React.js, Node.js, Express.js, Bootstrap, Tailwind CSS
            </p>
          </div>
        </div>

        {/* Databases */}
        <div className="flex items-start gap-4">
          <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
            <Database className="text-green-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-green-400 mb-1">Databases</h3>
            <p className="text-sm text-gray-400">MongoDB, MySQL</p>
          </div>
        </div>

        {/* Tools */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
            <Wrench className="text-yellow-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-yellow-400 mb-1">
              Tools & Platforms
            </h3>
            <p className="text-sm text-gray-400">Git, GitHub, VS Code, Postman</p>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex items-start gap-4 md:col-span-2">
          <div className="bg-pink-500/10 p-3 rounded-lg border border-pink-500/20">
            <Users className="text-pink-400 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-pink-400 mb-1">Soft Skills</h3>
            <p className="text-sm text-gray-400">
              Problem Solving, Team Collaboration, Communication, Adaptability
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
