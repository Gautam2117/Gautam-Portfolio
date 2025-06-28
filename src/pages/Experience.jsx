// src/pages/Experience.jsx
import Section from "../components/Section";
import experience from "../data/experience";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l-4 border-blue-600 dark:border-blue-500 pl-6 space-y-12 before:absolute before:left-2.5 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-blue-500 to-purple-500 before:rounded-full">

        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative bg-gradient-to-br from-white/70 to-white/40 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow-lg ring-2 ring-white dark:ring-gray-900"></div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white text-xl shadow-md">
                <FaBriefcase />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-blue-800 dark:text-blue-300">
                  {exp.role}
                </h3>
                <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-semibold">{exp.company}</span> • {exp.period}
                </p>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                  {exp.description}
                </p>
                
                {exp.tech && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
