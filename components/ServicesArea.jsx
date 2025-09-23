
'use client';
import { useEffect, useRef, useState } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const regions = [
  'Greater London',
  'Surrey',
  'Hampshire',
  'Berkshire',
  'Kent',
  'Essex',
  'West Sussex',
  'East Sussex',
  'Buckinghamshire',
  'Oxfordshire',
];

const cities = [
  'London',
  'Guildford',
  'Woking',
  'Reading',
  'Farnborough',
  'Camberley',
  'Brighton',
  'Crawley',
  'Maidstone',
  'Slough',
  'Milton Keynes',
  'Southampton',
  'Portsmouth',
];

const sectors = [
  'Retail Security',
  'Corporate Security',
  'Construction Sites',
  'Logistics & Warehouses',
  'Event Security',
  'Healthcare Facilities',
  'Residential Buildings',
  'Schools & Universities',
];

function MarqueeRow({ data, reverse }) {
  return (
    <div className="overflow-hidden relative marquee-row">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[...data, ...data].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 whitespace-nowrap py-2 px-5 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            <ShieldCheckIcon className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation when visible
          setAnimate(false);
          setTimeout(() => setAnimate(true), 50); // small delay for re-trigger
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="service-areas"
      ref={sectionRef}
      className="relative py-20 bg-white"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 px-0">
          <h2
            className={`text-red-600 text-sm uppercase tracking-widest font-semibold transition-all duration-700 ${
              animate ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Areas We Cover
          </h2>
          <h3
            className={`text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 transition-all duration-700 delay-200 ${
              animate ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Providing Security Across the UK
          </h3>
          <p
            className={`text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
              animate ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            From London to Brighton, we provide professional SIA-licensed
            security services for businesses, events, and residential areas.
            Our highly trained team ensures safety wherever you need it.
          </p>
        </div>

        {/* Animated Marquees */}
        <div className="space-y-6 px-0">
          <MarqueeRow data={regions} />
          <MarqueeRow data={cities} reverse />
          <MarqueeRow data={sectors} />
        </div>
      </div>

      {/* CSS */}
      <style jsx global>{`
        /* Text Animation */
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
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        /* Marquee Animation */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-track {
          display: inline-flex;
          gap: 2rem;
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        .marquee-track.reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
