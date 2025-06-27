import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">MAGNOLIA-SKYVIEW</h3>
            <p className="text-gray-300 mb-4">
              A modern housing society committed to transparency, community welfare, and sustainable living.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>123 Green Avenue, Garden City - 560001</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 80 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@magnoliaskyview.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>Office Hours: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="/notices" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Latest Notices
              </a>
              <a href="/finance" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Financial Reports
              </a>
              <a href="/meetings" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                Meeting Minutes
              </a>
              <a href="/grievances" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                File Grievance
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MAGNOLIA-SKYVIEW. All rights reserved. Built for transparency and community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
