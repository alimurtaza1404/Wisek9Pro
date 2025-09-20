'use client';
import Link from 'next/link';

export default function ContactBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets2/Canine.jpg')" }}
    >
      {/* 🔴 Dark Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/70 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT - Animated */}
        <div className="animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Feel free to <br /> <span className="text-red-400">communicate with us</span>
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Request a free quote or discuss any queries related to our services.
            Call us directly, or email us to request a callback. Let's discuss!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:info@wisek9.co.uk"
              className="inline-flex items-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <i className="fa fa-envelope mr-2"></i> Email Us
            </Link>
            <Link
              href="tel:03300434152"
              className="inline-flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all"
            >
              <i className="fa fa-phone mr-2"></i> 0330 043 4152
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE / GRAPHIC */}
        <div className="animate-slide-in-right flex justify-center">
          <img
            src="/assets2/customSecurity.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
