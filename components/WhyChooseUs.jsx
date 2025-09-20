'use client'
import { useEffect } from 'react'

export default function WhyChooseUs() {
  useEffect(() => {
    const cards = document.querySelectorAll('.why-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show') // re-trigger on scroll up
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-wide animate-fade-down">
          Why Choose <span className="text-red-500">WiseK9?</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: '/assets2/icons/Why choos... Icon-01.svg',
              title: 'SIA Approved',
              desc: 'Fully licensed and compliant with industry standards.',
            },
            {
              icon: '/assets2/icons/Why choos... Icon-02.svg',
              title: '24/7 Support',
              desc: 'Always available when you need security coverage.',
            },
            {
              icon: '/assets2/icons/Why choos... Icon-03.svg',
              title: '10+ Years Experience',
              desc: 'Trusted by hundreds of businesses across the UK.',
            },
            {
              icon: '/assets2/icons/Why choos... Icon-04.svg',
              title: 'Trained Staff',
              desc: 'All officers undergo rigorous training before deployment.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="why-card opacity-0 translate-y-8 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_8px_30px_rgba(255,0,0,0.4)] hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img src={item.icon} className="mx-auto w-16 mb-4" alt={item.title} />
              <h3 className="text-xl font-semibold mb-2 text-red-400">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
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
        .why-card {
          transition: all 0.6s ease-out;
        }
        .why-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
