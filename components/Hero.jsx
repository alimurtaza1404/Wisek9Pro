'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transform translate-y-8">
        {/* Small Heading */}
        <span className="animate-slide-left-delay text-red-500 text-sm sm:text-base font-semibold tracking-[0.15em] uppercase mb-4 inline-block">
          Protect What Matters Most
        </span>

        {/* Main Heading */}
        <h1 className="animate-slide-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-6">
          Professional{" "}
          <span className="text-red-500">SIA-Licensed</span> Security Solutions
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-left-delay2 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Providing expert security officers for retail, corporate, construction,
          healthcare, and public sectors — trusted nationwide for proactive
          protection and peace of mind.
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-left-delay3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-10 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 -mt-4 sm:mt-0"
          >
            Get Appointment
          </Link>
          <Link
            href="/about"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-10 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
        }
        .animate-slide-left-delay {
          animation: slideLeft 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animate-slide-left-delay2 {
          animation: slideLeft 1s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animate-slide-left-delay3 {
          animation: slideLeft 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
