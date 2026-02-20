import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import About from './About';
import CallToAction from './CallToAction';
import Footer from './Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm py-4">
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-rose-600">ChicCuts</div>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">Services</a></li>
            <li><a href="#gallery" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">Gallery</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">Testimonials</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-[72px]"> {/* Adjust padding for fixed header height */}
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
