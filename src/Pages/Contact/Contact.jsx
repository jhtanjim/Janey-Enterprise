"use client"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["229, Stand Road", "Banglabazar, Chattogram"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["01819-383224", "01919-383224"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["merajulislam0167@gmail.com"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["24/7 Available", "Emergency Support"],
      color: "bg-yellow-100 text-yellow-600",
    },
  ]

  // Social media links
  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://www.facebook.com/profile.php?id=100054328518414",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
        </svg>
      ),
      url: "https://instagram.com/janeyenterprise",
      color: "bg-pink-600",
    },
  ]

  // Function to open WhatsApp chat with the given number
  const openWhatsApp = () => {
    window.open(`https://wa.me/+8801676192111`, "_blank")
  }

  // Function to make a direct call
  const makeCall = () => {
    window.location.href = `tel:+8801676192111`
  }

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Have questions about our services? Need a quote? We're here to help you with all your marine service needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Contact Information Cards - Left Side */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600"
              >
                <div className={`${info.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}

            {/* Additional Cards Row */}
            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WhatsApp Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">WhatsApp</h3>
                <p className="text-gray-600">01676192111</p>
                <button
                  onClick={openWhatsApp}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  Chat Now
                </button>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
                <div className="bg-purple-100 text-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">Connect With Us</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center justify-center`}
                      aria-label={`Visit our ${social.name} page`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3 my-auto bg-white rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-yellow-100 rounded-tr-full opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Send Us A Message</h3>

              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Please describe your inquiry..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-blue-700 text-white py-3 md:py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
                  >
                    SEND MESSAGE
                  </button>
                  {/* <button
                    type="button"
                    onClick={makeCall}
                    className="w-full sm:w-auto bg-blue-500 text-white p-3 md:p-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="sm:sr-only">Call Us</span>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}

export default Contact

