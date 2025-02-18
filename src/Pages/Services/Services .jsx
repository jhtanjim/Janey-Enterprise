// import React from "react";
// import { Anchor, Wrench, Droplet, Battery, Package, Users } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: <Anchor className="w-8 h-8" />,
//       title: "Ship Chandler Services",
//       description:
//         "Complete vessel supply solutions including provisions, stores, and equipment.",
//     },
//     {
//       icon: <Wrench className="w-8 h-8" />,
//       title: "Repairs & Maintenance",
//       description:
//         "Technical support, deck engine repairs, and electrical goods supply and maintenance.",
//     },
//     {
//       icon: <Droplet className="w-8 h-8" />,
//       title: "Cleaning Services",
//       description:
//         "Professional tank cleaning, hatch cleaning, and vessel maintenance services.",
//     },
//     {
//       icon: <Battery className="w-8 h-8" />,
//       title: "Bunker & Oil Supply",
//       description:
//         "Reliable bunker provision and oil supply services for all vessel types.",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Gas Supply",
//       description:
//         "Oxygen, Acetylene, L.P.G and all types of gas supply with commission agent services.",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Labor & Technical Support",
//       description:
//         "Skilled labor supply, carpenter services, and comprehensive technical support.",
//     },
//   ];

//   return (
//     <section className="py-16 w-full bg-white">
//       <div className="w-full px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-blue-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive marine services and solutions for all your vessel
//             needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="text-blue-600 mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import { Anchor, Wrench, Droplet, Battery, Package, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Ship Chandler",
      description:
        "Complete vessel supply solutions including provisions, stores, and equipment.",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Repairs & Maintenance",
      description:
        "Technical support, deck engine repairs, and electrical goods supply and maintenance.",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Cleaning Services",
      description:
        "Professional tank cleaning, hatch cleaning, and vessel maintenance services.",
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Bunker & Oil Supply",
      description:
        "Reliable bunker provision and oil supply services for all vessel types.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Gas Supply",
      description:
        "Oxygen, Acetylene, L.P.G and all types of gas supply with commission agent services.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Labor Support",
      description:
        "Skilled labor supply, carpenter services, and comprehensive technical support.",
    },
  ];

  return (
    <section className="bg-gray-50 w-full py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto"></div>
          <p className="text-gray-600 mt-6">
            Providing comprehensive marine services and solutions for all your
            vessel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-blue-700">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
