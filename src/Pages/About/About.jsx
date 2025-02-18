// import React from "react";
// import { Shield, Award, Users } from "lucide-react";

// const About = () => {
//   return (
//     <section className="py-16 w-full bg-gray-50">
//       <div className="w-full px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-blue-900">
//               About M/S JANEY ENTERPRISE
//             </h2>
//             <p className="text-gray-600">
//               Located in Chattogram, Bangladesh, M/S JANEY ENTERPRISE has
//               established itself as a leading marine service provider. With
//               years of experience in the maritime industry, we deliver
//               comprehensive solutions for all vessel needs.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
//               <div className="text-center p-4">
//                 <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                 <h3 className="font-semibold">Reliable</h3>
//               </div>
//               <div className="text-center p-4">
//                 <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                 <h3 className="font-semibold">Professional</h3>
//               </div>
//               <div className="text-center p-4">
//                 <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                 <h3 className="font-semibold">Experienced</h3>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative h-96 rounded-lg overflow-hidden">
//               <img
//                 src="https://jrjbd.org/assets/about%201-85027567.jpg"
//                 alt="Ship Service Operations"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
//                 <p className="text-white text-lg font-semibold">
//                   BIN: 003462851-0503
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "24/7 Emergency Services",
    "Experienced Technical Team",
    "Quality Assured Solutions",
    "Competitive Pricing",
    "Global Network Coverage",
    "Licensed & Certified",
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://i.ibb.co.com/L9hR22Y/IMG-4017.jpg"
                alt="Marine Services"
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-100 rounded-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About M/S JANEY ENTERPRISE
              </h2>
              <div className="h-1 w-20 bg-blue-700"></div>
            </div>

            <p className="text-gray-600 text-lg">
              Since our establishment, we've been providing top-tier marine
              services to vessels at Chattogram Port. Our commitment to
              excellence and customer satisfaction has made us a trusted name in
              the industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-700 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800 font-medium">BIN: 003462851-0503</p>
            </div>

            <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
