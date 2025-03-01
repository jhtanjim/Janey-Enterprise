import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Ship, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ship className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold text-white">JANEY ENTERPRISE</span>
            </div>
            <p className="text-sm">
              Your trusted partner for complete marine services and solutions in Chattogram Port.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500" />
                <Link to="/" className="ml-2 hover:text-yellow-400 transition-colors">Home</Link>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500" />
                <Link to="/about" className="ml-2 hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500" />
                <Link to="/services" className="ml-2 hover:text-yellow-400 transition-colors">Services</Link>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500" />
                <Link to="/contact" className="ml-2 hover:text-yellow-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                <span>229, Stand Road, Banglabazar, Chattogram</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                <span>
                  <a href="tel:01819383224" className="hover:text-yellow-400 transition-colors">01819-383224</a>
                  , <a href="tel:01919383224" className="hover:text-yellow-400 transition-colors">01919-383224</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                <a href="mailto:merajulislam0167@gmail.com" className="hover:text-yellow-400 transition-colors">
                  merajulislam0167@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-8 py-6 text-center text-sm">
          © {new Date().getFullYear()} M/S Janey Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
