// import React from "react";
// import { Facebook, Twitter, Linkedin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white w-full">
//       <div className="w-full px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">M/S JANEY ENTERPRISE</h3>
//             <p className="text-blue-200">
//               Your trusted partner for complete marine services and solutions in
//               Chattogram.
//             </p>
//             <p className="text-sm text-blue-200">BIN: 003462851-0503</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="text-blue-200 hover:text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="text-blue-200 hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="text-blue-200 hover:text-white">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-blue-200 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               <li className="text-blue-200">Ship Chandler</li>
//               <li className="text-blue-200">Tank Cleaning</li>
//               <li className="text-blue-200">Bunker Provision</li>
//               <li className="text-blue-200">Technical Support</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//             <div className="space-y-2 text-blue-200">
//               <p>229, Stand Road,</p>
//               <p>Banglabazar, Chattogram</p>
//               <p>Phone: 01819-383224</p>
//               <p>Email: merajulislam0167@gmail.com</p>
//             </div>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-blue-200 hover:text-white">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-blue-200 hover:text-white">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-blue-200 hover:text-white">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
//           <p>
//             &copy; {new Date().getFullYear()} M/S JANEY ENTERPRISE. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
              {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                <li key={item} className="flex items-center group">
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                  <a
                    href="#"
                    className="ml-2 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
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
                    href="#"
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
                <span>01819-383224, 01919-383224</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <span>merajulislam0167@gmail.com</span>
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
                href="#"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
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
