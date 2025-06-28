import Section from "../components/Section";
import skills from "../data/skills";
import { motion } from "framer-motion";
import {
  FaCode, FaCogs, FaTools, FaCloud, FaDatabase,
  FaChartBar, FaPenNib, FaBrain, FaProjectDiagram
} from "react-icons/fa";

const SkillGroup = ({ title, icon, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition"
  >
    <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
      <span className="text-xl">{icon}</span>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, idx) => (
        <motion.span
          key={idx}
          className="bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 text-gray-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.02 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillGroup title="Languages" icon={<FaCode />} items={skills.languages} delay={0.1} />
        <SkillGroup title="Frameworks" icon={<FaCogs />} items={skills.frameworks} delay={0.15} />
        <SkillGroup title="Libraries & Utilities" icon={<FaProjectDiagram />} items={skills.libraries} delay={0.2} />
        <SkillGroup title="Tools & IDEs" icon={<FaTools />} items={skills.tools} delay={0.25} />
        <SkillGroup title="Cloud Platforms" icon={<FaCloud />} items={skills.cloud} delay={0.3} />
        <SkillGroup title="Databases" icon={<FaDatabase />} items={skills.databases} delay={0.35} />
        <SkillGroup title="Data Visualization" icon={<FaChartBar />} items={skills.dataViz} delay={0.4} />
        <SkillGroup title="LLM & GenAI Tools" icon={<FaBrain />} items={skills.llmTools} delay={0.45} />
        <SkillGroup title="Design Tools" icon={<FaPenNib />} items={skills.design} delay={0.5} />
      </div>
    </Section>
  );
};

export default Skills;
