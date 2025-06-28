// src/pages/About.jsx
import Section from "../components/Section";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div
        className="relative bg-gradient-to-br from-white/50 to-blue-50/30 dark:from-gray-800/40 dark:to-gray-900/30 backdrop-blur-xl shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Floating glow orb */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full z-0" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 underline decoration-blue-500 decoration-2 underline-offset-4">
            Let me introduce myself
          </h2>

          <p className="mb-5 leading-relaxed text-lg">
            I'm <span className="font-bold text-blue-700">Gautam Govind</span>, a passionate developer and 
            final-year <span className="font-medium">Information Technology</span> student at 
            <span className="font-semibold text-purple-600"> Manipal University Jaipur</span>.
            I thrive at the intersection of <span className="font-semibold text-green-600">engineering, design, and intelligence</span> —
            crafting <span className="text-blue-500 font-semibold">full-stack web & mobile applications</span> that are smart, scalable, and impactful.
          </p>

          <p className="mb-5 text-lg">
            My technical toolkit spans across 
            <span className="text-blue-400"> React</span>, <span className="text-purple-500">Flutter</span>, 
            <span className="text-yellow-600"> Firebase</span>, <span className="text-green-600">Spring Boot</span>, 
            <span className="text-pink-500">Python</span>, and modern cloud & DevOps stacks. 
            I love turning <span className="font-semibold text-indigo-600">ideas into production-grade systems</span>.
          </p>

          <p className="mb-5 text-lg">
            I’ve contributed at esteemed institutions like 
            <span className="text-blue-700 font-semibold"> CRIS</span>, 
            <span className="text-blue-700 font-semibold"> Sneaco</span>, and 
            <span className="text-blue-700 font-semibold"> Celebal Technologies</span>, 
            and also completed the 
            <span className="text-blue-700 font-semibold"> J.P. Morgan Software Engineering Virtual Experience</span>.
            From building entire SaaS products to engineering AI-powered tools and dashboards, 
            I’ve owned projects end-to-end.
          </p>

          <p className="mb-5 text-lg">
            I specialize in designing smart systems with 
            <span className="font-bold text-green-500"> AI/ML pipelines</span>, 
            modern APIs, secure backends, and pixel-perfect frontends. 
            I'm driven by a mission to build digital experiences that matter.
          </p>

          <motion.div
            className="mt-6 p-4 border-l-4 border-green-500 bg-green-100/30 dark:bg-green-900/30 rounded-md text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            🌟 <span className="font-semibold">Currently building Botify — an AI-powered customer service chatbot SaaS</span> to help small businesses go 24/7 without writing a line of code. Always open to collaborations, internships, or full-time roles where I can build, lead, and innovate.
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
