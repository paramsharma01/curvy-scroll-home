
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="footer-card transform hover:translate-y-[-5px] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <a href="mailto:info@collegekendra.com" className="hover:text-blue-500 transition-colors">info@collegekendra.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <a href="tel:+123456789" className="hover:text-blue-500 transition-colors">+1 (234) 567-8900</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <p>123 College St, Campus City</p>
              </div>
            </div>
          </div>
          
          <div className="footer-card transform hover:translate-y-[-5px] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-card transform hover:translate-y-[-5px] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-gray-200">
          <p>© 2025 Collegekendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
