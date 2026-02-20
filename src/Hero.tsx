import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-50 py-24 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1800&q=80"
          alt="Abstract Background"
          className="object-cover w-full h-full mix-blend-multiply opacity-50"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4"
            variants={itemVariants}
          >
            Crafting Your{' '}
            <span className="text-rose-600">Perfect Look</span>
          </motion.h1>
          <motion.p className="text-xl text-gray-700 mb-8 max-w-lg md:mx-0 mx-auto" variants={itemVariants}>
            Experience personalized hair artistry that brings out your unique beauty and confidence.
          </motion.p>
          <motion.div className="flex gap-4 justify-center md:justify-start" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl shadow-lg hover:bg-rose-700 transition duration-300 ease-in-out transform"
            >
              Book an Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-xl bg-transparent hover:bg-rose-50 transition duration-300 ease-in-out transform"
            >
              View Services
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative group mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-rose-300 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 transform scale-95 group-hover:scale-100"></div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=900&q=80"
            alt="Stylist at work"
            className="relative w-full max-w-sm md:max-w-md h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
