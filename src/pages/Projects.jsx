// src/pages/Projects.jsx
import Section from "../components/Section";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        className="grid lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative group bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                {project.title}
              </h3>

              {/* Gradient Divider */}
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4" />

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-[15px]">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-sm mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-transform"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline hover:scale-105 transition-transform"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
