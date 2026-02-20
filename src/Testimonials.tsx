import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily R.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Absolutely love my new haircut and color! The stylist truly understood what I wanted and made it even better.',
    rating: 5,
  },
  {
    name: 'David L.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Best haircut I\'ve had in years. The attention to detail is amazing, and the atmosphere is so welcoming.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'My bridal hair was perfection! It stayed flawless all day and I received so many compliments. Thank you!',
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          Hear from our happy clients about their experience and transformations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-zinc-50 rounded-2xl p-8 border border-gray-200 shadow-fine hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow-md"
              />
              <div className="flex text-amber-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold text-xl">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
