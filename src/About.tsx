import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-rose-50" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
          }}
        >
          <motion.h2 className="text-4xl font-extrabold text-gray-900 mb-6" variants={textVariants}>
            Meet Your Stylist
          </motion.h2>
          <motion.p className="text-xl text-gray-700 leading-relaxed mb-8" variants={textVariants}>
            Hi, I'm Sarah, and I've been passionate about hair artistry for over 15 years. My goal is to create beautiful, healthy hair that makes you feel confident and amazing. I specialize in personalized cuts, vibrant color, and elegant styling for all occasions.
          </motion.p>
          <motion.p className="text-xl text-gray-700 leading-relaxed mb-8" variants={textVariants}>
            At ChicCuts, we believe in using high-quality products and staying updated with the latest techniques to ensure every client leaves feeling their absolute best. Come experience the difference!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl shadow-lg hover:bg-rose-700 transition duration-300 ease-in-out transform"
            variants={textVariants}
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          className="relative group mt-12 md:mt-0 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
        >
           <div className="absolute inset-0 bg-rose-300 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 transform scale-95 group-hover:scale-100"></div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Stylist Sarah"
            className="relative w-full max-w-sm md:max-w-md h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
