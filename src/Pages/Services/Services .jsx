"use client"

import {
  Anchor,
  Wrench,
  Droplet,
  Battery,
  Package,
  Users,
  ShoppingCart,
  PenToolIcon as Tool,
  Shield,
  Sparkles,
  Briefcase,
  Settings,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Ship Chandler",
      description: "Complete vessel supply solutions including provisions, stores, and equipment.",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Repairs & Maintenance",
      description: "Technical support, deck engine repairs, and electrical goods supply and maintenance.",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Cleaning Services",
      description: "Professional tank cleaning, hatch cleaning, and vessel maintenance services.",
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Bunker & Oil Supply",
      description: "Reliable bunker provision and oil supply services for all vessel types.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Gas Supply",
      description: "Oxygen, Acetylene, L.P.G and all types of gas supply with commission agent services.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Labor Support",
      description: "Skilled labor supply, carpenter services, and comprehensive technical support.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Provisions And Bond Stores",
      description: "Complete range of food supplies, beverages, and bonded items for vessel crews.",
    },
    {
      icon: <Tool className="w-12 h-12" />,
      title: "Technical Stores",
      description: "Specialized equipment, tools, and technical supplies for all vessel operations.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Marine Safety",
      description: "Safety equipment, life-saving appliances, and regulatory compliance solutions.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Cleaning Solutions",
      description: "Specialized cleaning products, equipment, and solutions for marine environments.",
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Other Services",
      description: "Additional marine services tailored to meet specific vessel and crew requirements.",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "General Repair",
      description: "Comprehensive repair services for all vessel components and systems.",
    },
  ]

  return (
    <section className="w-full py-20 mt-12 bg-white">
      <div className="container mx-auto px-8">
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-100 rounded-full"></div>

          <h2 className="text-4xl font-bold text-blue-900 mb-4 relative z-10">Our Services</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 relative z-10">
            Providing comprehensive marine services and solutions for all your vessel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>

              {/* Icon with circle background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-yellow-100 rounded-full transform scale-50 group-hover:scale-60 transition-transform duration-300 delay-75"></div>
                <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                  <div className="text-blue-700">{service.icon}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-600 relative z-10">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-blue-100">Contact us today for a customized service quote</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/about">
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-300">
                  LEARN MORE
                </button>
              </Link>

              <Link to="/contact">
                <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 shadow-lg">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

