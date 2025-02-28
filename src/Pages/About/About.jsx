"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Award, Clock, Globe, User } from "lucide-react";
import Marquee from "react-fast-marquee";
// Fix the import paths - adjust these based on your project structure
import seraj from "../../../src/assets/images/owner.jpg"
import meraj from "../../../src/assets/images/meraj.jpg"

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Service",
      description: "Round-the-clock emergency marine services",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Expert Team",
      description: "Highly skilled and certified professionals",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Network",
      description: "Extensive international shipping connections",
    },
    {
      icon: <Anchor className="h-5 w-5" />,
      title: "Marine Solutions",
      description: "Comprehensive vessel support services",
    },
  ];

  const partners = [
    {
      name: "Meghna Group Of Industries",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MGI_Logo.png/1200px-MGI_Logo.png",
    },
    {
      name: "SR Shipping LTD",
      image: "https://sdn.signalhire.co/storage/company/fc07/3ba3/392d/5e89/1708/7ab1/5327/3f6c.webp",
    },
    {
      name: "Vanguird Maritime LTD",
      image:
        "https://vanguardmaritimebd.com/wp-content/uploads/2023/05/logo.png",
    },
    {
      name: "HR Lines LTD",
      image: "https://hrlinesbd.com/assets/frontend/img/logo_new.png",
    },
    {
      name: "KSRM",
      image: "https://www.atl-bd.com/wp-content/uploads/2017/10/KSRM.png",
    },
  ];

  const teamMembers = [
    {
      name: "Mohammed SERAJ",
      position: "Owner",
      image: seraj,
      bio: "Founder and visionary leader with over 25 years of experience in marine services."
    },
    {
      name: "Merajul Islam",
      position: "Managing Director",
      image: meraj,
      bio: "Strategic executive overseeing daily operations with expertise in international shipping logistics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="bg-white mt-12">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                M/S JANEY ENTERPRISE
              </h1>
              <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Your trusted partner in marine services at Chattogram Port. We
              deliver excellence through dedication, expertise, and unwavering
              commitment to quality.
            </motion.p>
          </div>

          {/* Leadership Team Section - Enhanced Design */}
          {/* Leadership Team Section - Redesigned */}
<motion.div variants={containerVariants} className="space-y-8">
  <motion.div variants={itemVariants} className="text-center">
    <p className="text-blue-600 font-semibold uppercase text-sm">
      Our Leadership
    </p>
    <h2 className="text-2xl font-bold text-gray-900 mt-2">
      Meet The Team Behind Our Success
    </h2>
  </motion.div>
  
  <div className="lg:flex  mt-10">
    {teamMembers.map((member, index) => (
      <motion.div
        key={member.name}
        variants={itemVariants}
        className="relative h-[300px] bg-white rounded-lg overflow-hidden shadow-md border w-full max-w-lg mx-auto group"
      >
        {/* Top color bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 w-full"></div>
        
        {/* Profile image with offset position */}
        <div className="flex justify-center mt-12">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg relative -top-8 bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/api/placeholder/112/112";
              }}
            />
          </div>
        </div>
        
        {/* Content with negative margin to account for image offset */}
        <div className="px-6 pb-6 -mt-4 text-center">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-blue-600 font-medium text-sm mb-3">{member.position}</p>
          <p className="text-gray-600 text-sm">{member.bio}</p>
          
          {/* Subtle hover effect */}
          <div className="mt-4 w-0 h-0.5 bg-blue-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    {service.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partners Section */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-blue-600 font-semibold uppercase text-sm">
                Experience
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                Work Experience With
              </h2>
            </motion.div>
            <div className="py-8">
              <Marquee gradient gradientColor={[255, 255, 255]} speed={40}>
                {partners.map((partner) => (
                  <div key={partner.name} className="mx-8">
                    <img
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}