// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-8 rounded-t-3xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-md border-t border-blue-100 dark:border-gray-800 shadow-inner">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-medium">
            © {currentYear} <span className="font-semibold text-blue-600 dark:text-blue-400">Gautam Govind</span>
          </p>

          <div className="flex gap-5 text-xl text-blue-600 dark:text-blue-400">
            <a
              href="https://github.com/Gautam2117"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gautamg01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:govindgautam933@gmail.com"
              className="hover:text-blue-800 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/Gautam_Govind_Resume.pdf"
            download
            className="inline-block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold text-xs hover:scale-105 transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
