// src/pages/Contact.jsx
import Section from "../components/Section";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2dc04l4", "template_b2xaq8o", form.current, "0b2irzrO1uYfEg3sa")
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Section id="contact" title="Contact Me">
      <motion.div
        className="max-w-2xl mx-auto bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition h-32 resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition"
          >
            <FiSend className="text-lg" />
            Send Message
          </motion.button>

          {sent && (
            <motion.p
              className="text-green-600 mt-4 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
