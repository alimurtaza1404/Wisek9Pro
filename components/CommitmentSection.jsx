// components/ServicesSection.tsx
'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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
      image: '/assets2/service-03.jpg',
      description:
        'Expert crowd management and conflict resolution for events across the UK, with custom security plans to ensure a safe environment for all attendees.',
    },
    {
      id: 4,
      title: '24/7 Monitoring',
      image: '/assets2/service-01.jpg',
      description:
        'Continuous monitoring with advanced technology and a 24/7 control room, offering rapid response and ongoing support for your security needs.',
    },
    {
      id: 5,
      title: 'Canine Security (K9)',
      image: '/assets2/service-01.jpg',
      description:
        'Professional K9 units trained for detection and deterrence, enhancing site security and ensuring maximum protection.',
    },
    {
      id: 6,
      title: 'Mobile Patrol',
      image: '/assets2/service-02.jpg',
      description:
        'Rapid response patrol teams provide flexible, visible protection across multiple sites and territories, ensuring 24/7 vigilance.',
    },
    {
      id: 7,
      title: 'Cleaning & Staffing',
      image: '/assets2/service-03.jpg',
      description:
        'Comprehensive cleaning and staffing services with vetted professionals, tailored to support your business needs.',
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
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

        {/* ✅ Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={900}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16" // 👈 extra padding for dots
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="h-full flex flex-col bg-white/95 rounded-xl shadow-lg overflow-hidden hover:shadow-red-500/30 transition-all duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col flex-grow p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  {/* ✅ Equal height for descriptions */}
                  <p className="text-gray-700 text-sm flex-grow min-h-[80px]">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-transform hover:scale-110 shadow-md"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Styles */}
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
          animation: gradient-shift 12s ease infinite;
        }
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

        /* 🎯 Custom pagination dots with red/black contrast */
        :global(.swiper-pagination-bullets) {
          bottom: -5px !important; /* push dots lower */
        }
        :global(.swiper-pagination-bullet) {
          background: #000 !important; /* black for inactive */
          opacity: 0.8;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #ef4444 !important; /* red-600 */
          transform: scale(1.2); /* make active dot bigger */
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
