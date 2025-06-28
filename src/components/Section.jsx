// src/components/Section.jsx
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24"
    >
      {title && (
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-10 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.h2>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default Section;
