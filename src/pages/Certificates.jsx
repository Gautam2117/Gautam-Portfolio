// src/pages/Certificates.jsx
import Section from "../components/Section";
import certificates from "../data/certificates";
import { motion } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaStar } from "react-icons/fa";

const Certificates = () => {
  return (
    <Section id="certificates" title="Certificates">
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Glowing background pulse */}
            <div className="absolute -z-10 top-[-25%] right-[-25%] w-56 h-56 bg-gradient-to-br from-purple-400/30 to-blue-400/30 blur-3xl rounded-full group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-white text-2xl shadow-md">
                <FaCertificate />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300">{cert.name}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-1 font-medium">{cert.issuer}</p>

                {/* Optional grade */}
                {cert.grade && (
                  <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 mb-1 gap-1">
                    <FaStar className="text-sm" />
                    <span className="font-medium">Grade: {cert.grade}</span>
                  </div>
                )}

                {/* Optional issued date */}
                {cert.issued && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1 gap-1">
                    <FaCalendarAlt className="text-sm" />
                    <span>{cert.issued}</span>
                  </div>
                )}

                {/* Certificate link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-sm font-medium text-blue-500 hover:underline"
                  >
                    🎓 View Certificate
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

export default Certificates;
