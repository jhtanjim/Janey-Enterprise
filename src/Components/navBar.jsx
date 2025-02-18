// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="bg-blue-900 text-white w-full">
//       <div className="w-full px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Company Name */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10">
//               <svg viewBox="0 0 100 100" className="fill-current">
//                 <circle cx="50" cy="50" r="40" className="text-blue-500" />
//                 <path
//                   d="M50 10 L50 90 M30 50 L70 50"
//                   stroke="white"
//                   strokeWidth="8"
//                 />
//               </svg>
//             </div>
//             <span className="font-bold text-xl">M/S JANEY ENTERPRISE</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.path}
//                 className="hover:text-blue-300 transition-colors duration-200"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md hover:bg-blue-800"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.path}
//                 className="block py-2 hover:bg-blue-800 px-4 rounded"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">JANEY</span>
            <span className="text-2xl font-light text-gray-600">
              ENTERPRISE
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block py-2 text-gray-600 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
