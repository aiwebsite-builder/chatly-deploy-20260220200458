import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-rose-600 text-white" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Ready for a Transformation?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Book your personalized consultation and let's create the hair of your dreams.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-white text-rose-700 font-bold rounded-xl text-xl shadow-lg hover:bg-zinc-100 transition duration-300 ease-in-out transform"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          Book Your Appointment Now
        </motion.button>
      </div>
    </section>
  );
}
