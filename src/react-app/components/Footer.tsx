import { Link } from 'react-router';
import { Waves, Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'AI Assistants', path: '/ai-assistants' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Wave decoration */}
      <div className="relative">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-3xl font-bold"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                Nobel Sea
              </h3>
            </div>
            <p 
              className="text-blue-100 leading-relaxed mb-6"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Sustainable Travel, Thriving Oceans. Join us in protecting marine ecosystems while experiencing the beauty of East Africa's coastline.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-blue-800/50 hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors duration-300 hover:underline"
                    style={{ fontFamily: 'Book Antiqua, serif' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Initiatives */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Our Initiatives
            </h4>
            <ul className="space-y-3 text-blue-100" style={{ fontFamily: 'Book Antiqua, serif' }}>
              <li>• Plastic Mapping with Drones</li>
              <li>• Ocean Cleanup Projects</li>
              <li>• WasteShark/Submerger Technology</li>
              <li>• AI-Powered Marine Research</li>
              <li>• Community Empowerment Programs</li>
              <li>• Sustainable Tourism Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                <p 
                  className="text-blue-100"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  East African Coast<br />
                  Marine Conservation Hub
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a 
                  href="mailto:info@nobelsea.com"
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  info@nobelsea.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <p 
                  className="text-blue-100"
                  style={{ fontFamily: 'Book Antiqua, serif' }}
                >
                  +254 707 494 278
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="text-blue-200 text-center md:text-left"
              style={{ fontFamily: 'Book Antiqua, serif' }}
            >
              © 2024 Nobel Sea. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-400" /> for our oceans.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Book Antiqua, serif' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
