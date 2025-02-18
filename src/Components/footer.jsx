import React from "react";
import { Mail, Phone, MapPin, Ship, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ship className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">
                JANEY ENTERPRISE
              </span>
            </div>
            <p className="text-sm">
              Your trusted partner for complete marine services and solutions in
              Chattogram Port.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-blue-400">
                BIN: 003462851-0503
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                <a
                  href="/"
                  className="ml-2 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                <a
                  href="#about"
                  className="ml-2 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                <a
                  href="#services"
                  className="ml-2 hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="flex items-center group">
                <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                <a
                  href="#contact"
                  className="ml-2 hover:text-blue-400 transition-colors"
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
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                  <a
                    href={`/services#${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="ml-2 hover:text-blue-400 transition-colors"
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
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <span>229, Stand Road, Banglabazar, Chattogram</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                <span>
                  <a href="tel:01819383224">01819-383224</a>,{" "}
                  <a href="tel:01919383224">01919-383224</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <a
                  href="mailto:merajulislam0167@gmail.com"
                  className="hover:text-blue-400 transition-colors"
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
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} M/S Janey Enterprise. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-sm hover:text-blue-400 transition-colors"
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
