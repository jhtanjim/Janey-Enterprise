import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact", primary: true },
  ];

  return (
    <nav className="bg-white shadow-md fixed py-2 top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
         <Link to="/"> <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">JANEY</span>
            <span className="text-2xl font-light text-gray-600"> ENTERPRISE</span>
          </div></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={
                  item.primary
                    ? "bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
                    : "text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200"
                }
              >
                {item.name}
              </Link>
            ))}
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={
                  item.primary
                    ? "w-full mt-4 block bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 text-center"
                    : "block w-full text-left py-2 text-gray-600 hover:text-blue-700"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
