import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">LSEM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nigeria's premier institution for export management and international trade education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400">
                  Courses
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#events')} 
                  className="text-gray-400 hover:text-blue-400"
                >
                  Events
                </button>
              </li>
              <li>
                <a 
                  href="https://blog.lsem.edu.ng" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <span>Level 5, Suite 1, Dominion Plaza, Lekki, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-2" />
                <a href="tel:+2348012345678" className="hover:text-blue-400">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-2" />
                <a href="mailto:info@lsem.edu.ng" className="hover:text-blue-400">
                  info@lsem.edu.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lagos School of Export Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;