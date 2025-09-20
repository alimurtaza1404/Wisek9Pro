// components/Services.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesUs() {
  const services = [
    {
      title: 'Manned Guarding',
      tag: 'Premium Service',
      description:
        'Elite 24/7 protection with SIA-licensed professionals ensuring maximum security for your premises and assets.',
      image: '/assets2/Mannguarding.jpg',
      href: 'https://wisek9.co.uk/manned-guarding',
    },
    {
      title: 'Event Security',
      tag: 'Event Specialist',
      description:
        'Comprehensive event management with expert crowd control and seamless safety operations for all event types.',
      image: '/assets2/Event Security-01.jpg',
      href: 'https://wisek9.co.uk/event-security',
    },
    {
      title: 'Construction Security',
      tag: 'Site Protection',
      description:
        'Specialized site protection safeguarding equipment, materials, and ensuring 24/7 construction site security.',
      image: '/assets2/Construction secruty.jpg',
      href: 'https://wisek9.co.uk/construction-security',
    },
    {
      title: 'Canine Security',
      tag: 'K9 Elite',
      description:
        'Expert K9 units providing enhanced detection capabilities and powerful deterrent presence for maximum security.',
      image: '/assets2/Canine.jpg',
      href: 'https://wisek9.co.uk/canine-security',
    },
    {
      title: 'Mobile Patrol',
      tag: 'Mobile Response',
      description:
        'Strategic patrol services with rapid response capabilities across multiple locations and territories.',
      image: '/assets2/Mobile Patrol.jpg',
      href: 'https://wisek9.co.uk/mobile-patrol',
    },
    {
      title: 'Temporary Staff Support',
      tag: 'Flexible Staffing',
      description:
        'Flexible temporary staffing solutions with vetted, capable personnel for all sectors and industries.',
      image: '/assets2/Temporery staff sporting.jpg',
      href: 'https://wisek9.co.uk/temporary-staff',
    },
    {
      title: 'Cleaning & Staffing Services',
      tag: 'Professional Services',
      description:
        'Professional cleaning and comprehensive staffing solutions with thoroughly vetted personnel for all business needs.',
      image: '/assets2/Cleaning.jpg',
      href: 'https://wisek9.co.uk/cleaning-staffing',
    },
    {
      title: 'Custom Security Solutions',
      tag: 'Bespoke Solutions',
      description:
        'Tailored security packages designed specifically for your unique requirements and operational needs.',
      image: '/assets2/customSecurity.jpg',
      href: 'https://wisek9.co.uk/contact',
    },
  ]

  return (
    <>
      {/* ✅ Breadcrumb Section */}
      <div
        className="relative bg-center bg-cover bg-no-repeat pt-32 pb-12 md:pt-40 md:pb-16 text-white"
        style={{ backgroundImage: "url('/assets2/customSecurity.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
            Our Services
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
            <li className="text-red-500 font-semibold">Services</li>
          </ul>
        </div>
      </div>

      {/* ✅ Existing Services Section (unchanged) */}
      <section id="services" className="relative py-24 overflow-hidden">
        {/* ⚫ Lighter Animated Background */}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading text-red-500 text-center mb-16 drop-shadow-[0_2px_8px_rgba(255,0,0,0.6)]">
            Elite Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)] cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={384}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-red-900/70 transition-all duration-500"></div>

                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="inline-flex items-center text-red-400 hover:text-white font-semibold transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎨 Background Animation */}
        <style jsx>{`
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradient-shift 12s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  )
}
