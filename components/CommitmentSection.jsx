'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Private Security',
      image: '/assets2/service-01.jpg',
      description:
        'Our SIA-licensed guards provide tailored security solutions for retail, corporate, and public sectors, ensuring asset protection with 24/7 vigilance.',
    },
    {
      id: 2,
      title: 'Construction Security',
      image: '/assets2/service-02.jpg',
      description:
        'Protect your construction sites with trained guards, surveillance, and access control to prevent theft, vandalism, and ensure worker safety.',
    },
    {
      id: 3,
      title: 'Event Security',
      image: '/assets2/service-01.jpg',
      description:
        'Expert crowd management and conflict resolution for events across the UK, with custom security plans to ensure a safe environment for all attendees.',
    },
    {
      id: 4,
      title: '24/7 Monitoring',
      image: '/assets2/service-03.jpg',
      description:
        'Continuous monitoring with advanced technology and a 24/7 control room, offering rapid response and ongoing support for your security needs.',
    },
  ]

  // 👀 Scroll-based Animation
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show') // re-animate on scroll back
          }
        })
      },
      { threshold: 0.2 }
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-16 overflow-hidden">
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-black via-red-900 to-black opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Discover how Wise-K9 delivers top-tier security solutions tailored to your needs across 87% of the UK.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card opacity-0 translate-y-8 bg-white/90 rounded-xl shadow-lg backdrop-blur-md hover:shadow-red-500/30 hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="thumb">
                <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                  <img
                    src={service.image}
                    alt={`${service.title} img`}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </Link>
              </div>
              <div className="content p-5 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                    {service.title}
                  </Link>
                </h4>
                <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-transform hover:scale-110 shadow-md"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Background Animation */
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
          animation: gradient-shift 12s ease infinite;
        }

        /* Fade + Slide Animation */
        .service-card {
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .service-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Heading Fade Animation */
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-down {
          animation: fadeDown 1s ease forwards;
        }
      `}</style>
    </section>
  )
}
