'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Brand Loader */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 animate-fade-in">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 mb-6 sm:mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin-slow"></div>
            <Image
              src="/assets2/logowhite.png"
              alt="WiseK9 Logo"
              width={80}
              height={80}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-scale"
            />
          </div>

          <div className="w-36 sm:w-48 h-2 bg-gray-700 rounded-full overflow-hidden mb-4 sm:mb-6">
            <div className="h-full bg-red-600 animate-progress"></div>
          </div>

          <p className="text-white text-sm sm:text-lg md:text-xl font-bold tracking-widest animate-fade-text text-center px-4">
            Activating Security Systems...
          </p>
        </div>
      )}

      {/* Background Video */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-700 ${
          loading ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(40%)" }}
        >
          <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
      </div>

      {/* Main Hero Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transform transition-all duration-700 ${
          loading ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="animate-slide-left-delay text-red-500 text-xs sm:text-sm md:text-base font-semibold tracking-[0.15em] mb-2 sm:mb-4 inline-block">
          Protect What Matters Most
        </span>

        <h1 className="animate-slide-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-4 sm:mb-6 md:mb-8">
          Professional <span className="text-red-500">SIA-Licensed</span> Security Solutions
        </h1>

        <p className="animate-slide-left-delay2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
          Providing expert security officers for retail, corporate, construction,
          healthcare, and public sectors — trusted nationwide for proactive
          protection and peace of mind.
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-left-delay3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Get Appointment
          </Link>
          <Link
            href="/about"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-in-out forwards; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spinSlow 2.5s linear infinite; }

        @keyframes pulseScale {
          0%,100% { transform: scale(1) translate(-50%, -50%); }
          50% { transform: scale(1.15) translate(-50%, -50%); }
        }
        .animate-pulse-scale { animation: pulseScale 1.5s infinite; }

        @keyframes progressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress { animation: progressAnim 1.5s ease-in-out forwards; }

        @keyframes fadeText {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-text { animation: fadeText 1s ease forwards; animation-delay: 0.3s; opacity: 0; }

        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left { animation: slideLeft 1s ease-out forwards; }
        .animate-slide-left-delay { animation: slideLeft 1s ease-out forwards; animation-delay: 0.2s; opacity: 0; }
        .animate-slide-left-delay2 { animation: slideLeft 1s ease-out forwards; animation-delay: 0.4s; opacity: 0; }
        .animate-slide-left-delay3 { animation: slideLeft 1s ease-out forwards; animation-delay: 0.6s; opacity: 0; }
      `}</style>
    </section>
  );
}
