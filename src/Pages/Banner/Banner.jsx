// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative bg-blue-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Text Content */}
//           <div className="space-y-6">
//             <h1 className="text-4xl font-bold">
//               Professional Ship Services in Chattogram
//             </h1>
//             <p className="text-xl text-blue-200">
//               Ship Chandler, Repair & Maintenance Services, and Complete Marine
//               Solutions
//             </p>
//             <div className="space-y-2 text-blue-100">
//               <p>✓ Tank & Hatch Cleaning</p>
//               <p>✓ Painting & Chipping Services</p>
//               <p>✓ Bunker Provision & Oil Supply</p>
//               <p>✓ Technical Support & Repairs</p>
//             </div>
//             <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
//               Contact Us Now
//             </button>
//           </div>

//           {/* Image/Illustration */}
//           <div className="hidden md:block">
//             <div className="relative w-full h-96">
//               <div className="absolute inset-0 bg-blue-800 opacity-20 rounded-lg"></div>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZJpUV78E2sJkDpQQVCHd18agccD7YSwfKw&s"
//                 alt="Ship Services"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 w-full mt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Your Trusted Partner in Marine Services
              </h2>
              <div className="h-1 w-20 bg-yellow-400 mt-4"></div>
            </div>

            <p className="text-blue-100 text-lg">
              Professional ship chandling, maintenance, and marine solutions in
              Chattogram Port
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2">
                Our Services <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img
                src="https://i.ibb.co.com/Bfyvdj6/Black-and-Orange-Modern-Machinery-and-Equipment-Rental-Banner-Landscape-1.jpg"
                alt="Ship Service"
                className="rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-blue-700 pt-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
            <p className="text-blue-100">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
            <p className="text-blue-100">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-blue-100">Support Available</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
            <p className="text-blue-100">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
