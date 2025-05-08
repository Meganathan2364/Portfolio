import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.div
      className="bg-slate-900 p-6 mt-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ cursor: 'default' }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <motion.p
          className="text-white text-center sm:text-left w-full sm:w-auto font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {year} Meganathan V • All rights reserved.
        </motion.p>

        <motion.div
          className="flex justify-around sm:w-[250px] w-full gap-6 sm:gap-12"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Email */}
          <a
            href="mailto:vmega0777@gmail.com"
            className="transition transform duration-300 hover:scale-125 hover:text-pink-500 hover:-translate-y-1"
          >
            <FiMail className="text-3xl text-white hover:text-pink-500" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/meganathan-v-b28a5b25a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform duration-300 hover:scale-125 hover:text-blue-500 hover:-translate-y-1"
          >
            <AiFillLinkedin className="text-3xl text-white hover:text-blue-500" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Meganathan2364"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform duration-300 hover:scale-125 hover:text-gray-300 hover:-translate-y-1"
          >
            <FaGithub className="text-3xl text-white hover:text-gray-300" />
          </a>
        </motion.div>
      </div>

      {/* Floating footer effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-slate-900 h-[5px] rounded-t-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
      />
    </motion.div>
  );
};

export default Footer;
