// import React from "react";
// import { MapPin, Phone, Mail } from "lucide-react";

// const Contact = () => {
//   return (
//     <section className="py-16 w-full bg-white">
//       <div className="w-full px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
//           <p className="text-gray-600">
//             Get in touch with us for all your marine service needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="space-y-8">
//             <div className="flex items-start space-x-4">
//               <MapPin className="w-6 h-6 text-blue-600 mt-1" />
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Our Location</h3>
//                 <p className="text-gray-600">
//                   229, Stand Road, Banglabazar, Chattogram
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <Phone className="w-6 h-6 text-blue-600 mt-1" />
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Phone Numbers</h3>
//                 <p className="text-gray-600">01819-383224</p>
//                 <p className="text-gray-600">01919-383224</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <Mail className="w-6 h-6 text-blue-600 mt-1" />
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Email</h3>
//                 <p className="text-gray-600">merajulislam0167@gmail.com</p>
//               </div>
//             </div>
//           </div>

//           <form className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
//               />
//             </div>
//             <div>
//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["229, Stand Road", "Banglabazar, Chattogram"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["01819-383224", "01919-383224"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["merajulislam0167@gmail.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["24/7 Available", "Emergency Support"],
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of these channels
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Emergency Support
              </h3>
              <p className="text-gray-600">
                Our team is available 24/7 for emergency marine services and
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
