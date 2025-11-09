import { motion } from "framer-motion";
import TooltipWrapper from "./TooltipWrapper";
import {
  Code2,
  Boxes,
  Database,
  Wrench,
  Users,
} from "lucide-react";

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
        <TooltipWrapper content="C++, C, JavaScript, HTML, CSS, Python">
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition">
              <Code2 className="text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-1">Languages</h3>
              <p className="text-sm text-gray-400">Hover to view details</p>
            </div>
          </div>
        </TooltipWrapper>

        {/* Frameworks */}
        <TooltipWrapper content="React.js, Node.js, Express.js, Bootstrap, Tailwind CSS">
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition">
              <Boxes className="text-purple-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-1">Frameworks / Libraries</h3>
              <p className="text-sm text-gray-400">Hover to view details</p>
            </div>
          </div>
        </TooltipWrapper>

        {/* Databases */}
        <TooltipWrapper content="MongoDB, MySQL">
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition">
              <Database className="text-green-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-1">Databases</h3>
              <p className="text-sm text-gray-400">Hover to view details</p>
            </div>
          </div>
        </TooltipWrapper>

        {/* Tools */}
        <TooltipWrapper content="Git, GitHub, VS Code, Postman">
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition">
              <Wrench className="text-yellow-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-1">Tools & Platforms</h3>
              <p className="text-sm text-gray-400">Hover to view details</p>
            </div>
          </div>
        </TooltipWrapper>

        {/* Soft Skills */}
        <TooltipWrapper content="Problem Solving, Team Collaboration, Communication, Adaptability">
          <div className="flex items-start gap-4 group cursor-pointer md:col-span-2">
            <div className="bg-pink-500/10 p-3 rounded-lg border border-pink-500/20 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">
              <Users className="text-pink-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-pink-400 mb-1">Soft Skills</h3>
              <p className="text-sm text-gray-400">Hover to view details</p>
            </div>
          </div>
        </TooltipWrapper>
      </div>
    </motion.section>
  );
}

