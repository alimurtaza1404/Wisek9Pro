'use client'
import { useEffect } from 'react'

export default function CounterSection() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.getAttribute('data-count'), 10)
            let start = 0
            const duration = 2000
            const increment = target / (duration / 16)

            const animate = () => {
              start += increment
              if (start < target) {
                el.textContent = Math.ceil(start).toString()
                requestAnimationFrame(animate)
              } else {
                el.textContent = target.toString()
              }
            }

            animate()
            observer.unobserve(el) // run once
          }
        })
      },
      { threshold: 0.3 }
    )

    counters.forEach((counter) => observer.observe(counter))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 150, label: 'Happy Clients' },
    { number: 200, label: 'Security Guards' },
    { number: 345, label: 'Regions Covered' },
  ]

  return (
    <section
      className="relative py-20 bg-center bg-cover bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('assets2/Mannguarding.jpg')", // ✅ Background Image
      }}
    >
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            className="fade-in opacity-0 transform translate-y-6 p-6 rounded-xl shadow-lg bg-white/5 backdrop-blur-md hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,0,0,0.4)] transition-all duration-500"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <span
              className="counter text-5xl font-extrabold text-black block mb-3 drop-shadow-lg"
              data-count={item.number}
            >
              0
            </span>
            <p className="text-gray-300 text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
