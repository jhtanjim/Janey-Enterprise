"use client"

import { Clock, Truck, Award, Calendar, Coins, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function WhyUs() {
  const reasons = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Quick Response",
      description:
        "To develop our customers' service quality we are available 24/7. We ensure that each and every customer gets a response in 30 minutes.",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Fast Delivery",
      description:
        "We have developed our faithful and great supply-chain to make sure a quick delivery. We are committed with our customers to make faster delivery.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Our Promise",
      description:
        "We care, we're conscientious and we do what we say we'll do. And no matter the size, weight or distance, we'll meet the challenge.",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Experienced",
      description:
        "Throughout history growth has been sustainable and profitable since 1998 because of its faithful and fast services. Our 25+ years of experience can help our clients to succeed.",
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Cost Savings",
      description:
        "Through our high volume of purchasing we gain substantial price discounts, which are passed on to our customers and thus we are able to offer the best rates for ship supplies.",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality",
      description:
        "We focus on high quality of product supplies and service operations in all covered ports and locations, guaranteed by careful selection of manufacturers and vendors.",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full opacity-70"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-100 rounded-full opacity-70"></div>

          <h2 className="text-4xl font-bold text-blue-900 mb-4 relative z-10">Why Choose Us</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 relative z-10">
            Discover the advantages that set us apart in the marine services industry
          </p>
        </div>

        {/* Hero section with background image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 bg-blue-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Excellence in Marine Services Since 2012</h3>
            <p className="text-blue-100 max-w-2xl mb-8">
              We've built our reputation on reliability, quality, and exceptional service. Our commitment to excellence
              has made us a trusted partner for marine services worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-blue-100 text-sm">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-blue-100 text-sm">Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-blue-100 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border border-gray-100"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>

              {/* Icon with circle background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-yellow-100 rounded-full transform scale-50 group-hover:scale-60 transition-transform duration-300 delay-75"></div>
                <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                  <div className="text-blue-700">{reason.icon}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">{reason.title}</h3>
              <p className="text-gray-600 relative z-10">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial section */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">What Our Clients Say</h3>
              <div className="h-1 w-16 bg-yellow-500 mb-4"></div>
            </div>

            <div className="relative">
              <div className="text-5xl text-blue-200 absolute top-0 left-0">"</div>
              <blockquote className="text-gray-700 text-lg italic px-10 py-2 text-center">
                Their quick response time and reliable delivery have been crucial for our operations. The quality of
                products and cost savings we've experienced make them our preferred marine service provider.
              </blockquote>
              <div className="text-5xl text-blue-200 absolute bottom-0 right-0">"</div>
            </div>

            <div className="flex flex-col items-center mt-6">
              <p className="font-semibold text-blue-900">Captain James Wilson</p>
              <p className="text-sm text-gray-600">Fleet Manager, Ocean Shipping Co.</p>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to experience the difference?</h3>
              <p className="text-blue-100">Contact us today and discover why leading shipping companies choose us</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/contact">
                <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 shadow-lg">
                  CONTACT US NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

