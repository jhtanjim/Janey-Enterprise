import React from "react";
import { Mail, Phone, MapPin, Ship, ChevronRight } from "lucide-react";

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://www.facebook.com/profile.php?id=100054328518414",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
        </svg>
      ),
      url: "https://instagram.com/janeyenterprise",
      color: "bg-pink-600",
    },
  ]
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* Main Footer */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ship className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold text-white">
                JANEY ENTERPRISE
              </span>
            </div>
            <p className="text-sm">
              Your trusted partner for complete marine services and solutions in
              Chattogram Port.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-yellow-500">
                BIN: 003462851-0503
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-md font-semibold text-white mb-2">
                Work Experience With:
              </h3>
              <ul className="space-y-1">
                <li className="text-sm">01. Meghna Group Of Industries</li>
                <li className="text-sm">02. SR Shipping LTD</li>
                <li className="text-sm">03. Vanguird Maritime LTD</li>
                <li className="text-sm">04. HR Lines LTD</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400" />
                <a
                  href="/"
                  className="ml-2 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400" />
                <a
                  href="#about"
                  className="ml-2 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400" />
                <a
                  href="#services"
                  className="ml-2 hover:text-yellow-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400" />
                <a
                  href="#contact"
                  className="ml-2 hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              {[
                "Ship Chandler",
                "Tank Cleaning",
                "Bunker Provision",
                "Labor Supply",
                "Gas Supply",
                "Technical Support",
              ].map((service) => (
                <li key={service} className="flex items-center group">
                  <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400" />
                  <a
                    href={`/services#${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="ml-2 hover:text-yellow-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                <span>229, Stand Road, Banglabazar, Chattogram</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                <span>
                  <a
                    href="tel:01819383224"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    01819-383224
                  </a>
                  ,{" "}
                  <a
                    href="tel:01919383224"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    01919-383224
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                <a
                  href="mailto:merajulislam0167@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  merajulislam0167@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} M/S Janey Enterprise. All rights
              reserved.
            </p>
             {/* Social Media Footer Bar */}
  <div className="my-auto  bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="text-gray-600 font-medium text-center sm:text-left">Follow us on social media:</div>
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-2 rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center justify-center`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-sm hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-sm hover:text-yellow-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
