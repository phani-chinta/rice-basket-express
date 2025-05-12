
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rice-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-4">Rice Basket Express</h3>
            <p className="mb-4 text-rice-100">
              Premium quality rice delivered directly to your doorstep. 
              We source the finest grains from sustainable farms around the world.
            </p>
            <p className="text-rice-200">© {new Date().getFullYear()} Rice Basket Express. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-rice-300 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-rice-300 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-rice-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-rice-300 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-rice-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Rice Avenue, Grain District</p>
              <p className="mb-2">Rice City, RC 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@ricebasket.com</p>
            </address>
            <div className="mt-4">
              <span className="text-sm text-rice-300">Business Hours: Mon-Fri 9am-6pm</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rice-700 mt-8 pt-6 text-center text-sm text-rice-300">
          <p>Made with ❤️ for rice lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
