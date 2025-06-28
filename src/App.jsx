import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Section from "./components/Section";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* 🔮 Futuristic Hero Section with Gradient Glow */}
        <Section id="home">
          <motion.div
            className="relative text-center px-4 py-20 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Glow behind */}
            <div className="absolute -z-10 top-[-30%] left-[50%] w-[500px] h-[500px] rounded-full bg-blue-400/30 blur-3xl transform -translate-x-1/2"></div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 drop-shadow-lg">
              Hi, I'm <span className="glow-text">Gautam Govind</span> 👋
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I build next-gen products with <span className="text-blue-600 font-semibold">React</span>,{" "}
              <span className="text-purple-600 font-semibold">Flutter</span>, and{" "}
              <span className="text-green-600 font-semibold">AI/ML</span> – blending technology, design, and impact 🚀
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <a
                href="/Gautam_Govind_Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                📄 Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300"
              >
                💼 Hire Me
              </a>
            </div>
          </motion.div>
        </Section>

        {/* 🔗 Main Sections */}
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
