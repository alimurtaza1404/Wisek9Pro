'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function AgencyBenefits() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show') // re-animate when re-entered
          }
        })
      },
      { threshold: 0.3 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT - TEXT */}
          <div className="agency-benefits bg-white p-8 rounded-2xl shadow-xl animate-on-scroll slide-in-left h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
              We Have <span className="text-red-600">21 Years</span> of Experience
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With over two decades in the security industry, we have built a reputation for 
              delivering reliable, professional, and scalable security solutions across multiple sectors.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our SIA-licensed guards, advanced technology, and responsive support teams ensure your 
              people, assets, and events are protected 24/7 with precision and care.
            </p>
            <Link
              href="/contact"
              className="w-[160px] inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* RIGHT - EMBEDDED VIDEO */}
          <div className="relative animate-on-scroll slide-in-right h-full flex flex-col justify-center">
            <div className="w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/G_G8SdXktHg?autoplay=0&mute=0&rel=0"
                title="Security Experts in Action"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .slide-in-left.show {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-in-right.show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  )
}
