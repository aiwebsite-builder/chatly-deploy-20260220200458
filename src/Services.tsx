import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, ShowerHead, Gem } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Haircuts',
    description: 'Expert cuts tailored to your face shape and personal style, from classic to contemporary.',
  },
  {
    icon: Palette,
    title: 'Vibrant Color',
    description: 'Custom color formulations, highlights, balayage, and root touch-ups for stunning results.',
  },
  {
    icon: Sparkles,
    title: 'Elegant Styling',
    description: 'Perfect looks for any occasion, including blowouts, updos, and special event styling.',
  },
  {
    icon: ShowerHead,
    title: 'Restorative Treatments',
    description: 'Deep conditioning, keratin treatments, and scalp therapies to rejuvenate your hair.',
  },
  {
    icon: Gem,
    title: 'Bridal Hair',
    description: 'Bespoke bridal hair packages, ensuring you look breathtaking on your wedding day.',
  },
  {
    icon: Scissors, // Re-using an icon for variety, ideally use another if available
    title: 'Men\'s Grooming',
    description: 'Modern and classic cuts, beard trims, and styling services for men.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Our Signature Services
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Discover a range of premium hair services designed to enhance your natural beauty and express your unique style.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zinc-50 rounded-2xl p-8 border border-gray-200 shadow-fine hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-4 bg-rose-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
