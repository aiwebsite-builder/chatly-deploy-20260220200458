import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">ChicCuts</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Transforming hair, elevating confidence. Experience bespoke styling and premium care.
          </p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ChicCuts. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="hover:text-rose-400 transition-colors duration-200">Services</a></li>
            <li><a href="#gallery" className="hover:text-rose-400 transition-colors duration-200">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-rose-400 transition-colors duration-200">Testimonials</a></li>
            <li><a href="#about" className="hover:text-rose-400 transition-colors duration-200">About Us</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Get in Touch</h4>
          <p className="mb-3">123 Chic Street, Style City, SC 90210</p>
          <p className="mb-3">Phone: (123) 456-7890</p>
          <p className="mb-6">Email: info@chicutscuts.com</p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
