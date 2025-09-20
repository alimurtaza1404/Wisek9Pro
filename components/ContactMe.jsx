// components/ContactUs.tsx
'use client'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <>
      {/* ✅ Breadcrumb Section with Modern Look */}
      <div
        className="relative bg-center bg-cover bg-no-repeat pt-40 pb-16 md:pt-48 md:pb-20 text-white"
        style={{ backgroundImage: "url('/assets2/coverage.jpg')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Contact Us
          </h2>
          <ul className="flex justify-center items-center gap-3 text-gray-300 text-sm md:text-base">
            <li>
              <Link
                href="/"
                className="hover:text-red-500 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-red-500 font-semibold">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* ✅ Space after breadcrumb */}
      <div className="h-12 md:h-16"></div>

      {/* ✅ Google Map with Soft Border & Shadow */}
      <div className="relative h-[350px] md:h-[420px] max-w-7xl mx-auto px-4">
        <iframe
          className="w-full h-full rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.893238686916!2d-74.00597368459368!3d40.71277597933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1675263208000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* ✅ Contact Form & Info Section with Glassmorphism */}
      <section className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-up">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/90 border border-gray-200/50 p-8 rounded-2xl shadow-2xl hover:shadow-[0_12px_40px_rgba(255,0,0,0.15)] transition-all">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-lg bg-white/90 border border-gray-200/50 p-8 rounded-2xl shadow-2xl hover:shadow-[0_12px_40px_rgba(255,0,0,0.15)] transition-all">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <i className="fa fa-phone text-red-600 text-2xl"></i>
                <p className="text-gray-700">
                  <a href="tel:+441234567890" className="hover:text-red-500 block">
                    +44 123 456 7890
                  </a>
                  <a href="tel:+441234567891" className="hover:text-red-500 block">
                    +44 123 456 7891
                  </a>
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <i className="fa fa-envelope text-red-600 text-2xl"></i>
                <p className="text-gray-700">
                  <a href="mailto:info@wisek9.co.uk" className="hover:text-red-500 block">
                    info@wisek9.co.uk
                  </a>
                  <a href="mailto:support@wisek9.co.uk" className="hover:text-red-500 block">
                    support@wisek9.co.uk
                  </a>
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <i className="fa fa-map-marker text-red-600 text-2xl"></i>
                <p className="text-gray-700">
                  402 Silver Square, 33rd Street, London, UK
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/assets2/pattern.png')] bg-repeat pointer-events-none"></div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease forwards;
        }
      `}</style>
    </>
  )
}
