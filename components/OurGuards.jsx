"use client";
import { useEffect } from "react";

export default function OurGuards() {
  const guards = [
    {
      name: "David Thompson",
      role: "Head of Operations",
      image: "/assets2/team-01.jpg",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Security Officer",
      image: "/assets2/team-02.jpg",
    },
    {
      name: "James Carter",
      role: "Event Security Lead",
      image: "/assets2/team-03.jpg",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-heading, .guard-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Re-animate when scrolling up
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      {/* Heading & Subtitle with scroll animation */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="fade-heading opacity-0 translate-y-[-30px] text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-700">
          Our Guards
        </h2>
        <p className="fade-heading opacity-0 translate-y-[-20px] text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-150">
          Our highly trained team is dedicated to ensuring the safety and
          security of your people, events, and assets — with professionalism and care.
        </p>
      </div>

      {/* Guards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {guards.map((guard, index) => (
          <div
            key={index}
            className="guard-card opacity-0 translate-y-6 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <img
              src={guard.image}
              alt={guard.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold text-gray-900">{guard.name}</h4>
              <span className="block text-red-600 font-medium">
                {guard.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Scroll-triggered fade + slide-down */
        .fade-heading {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-heading.show {
          opacity: 1;
          transform: translateY(0);
        }

        .guard-card {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .guard-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
