"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurGuards() {
  const guards = [
    { name: "David Thompson", role: "Head of Operations", image: "/assets2/team-01.jpg" },
    { name: "Sarah Mitchell", role: "Senior Security Officer", image: "/assets2/team-02.jpg" },
    { name: "James Carter", role: "Event Security Lead", image: "/assets2/team-03.jpg" },
    { name: "Emma Johnson", role: "Operations Supervisor", image: "/assets2/team-01.jpg" },
    { name: "Michael Brown", role: "Security Consultant", image: "/assets2/team-02.jpg" },
    { name: "Sophia Davis", role: "Field Security Officer", image: "/assets2/team-03.jpg" },
    { name: "Daniel Wilson", role: "Rapid Response Lead", image: "/assets2/team-01.jpg" },
    { name: "Olivia Taylor", role: "Corporate Security Officer", image: "/assets2/team-02.jpg" },
    { name: "Liam Anderson", role: "Surveillance Specialist", image: "/assets2/team-03.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Guards
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our highly trained professionals dedicated to ensuring the safety
          and security of your people, events, and assets — with professionalism and care.
        </p>
      </div>

      {/* ✅ Continuous Auto-Rotating Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          freeMode={true}
          speed={4000} // 👈 long duration for smooth continuous motion
          autoplay={{
            delay: 0, // 👈 no pause
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {guards.map((guard, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <img
                  src={guard.image}
                  alt={guard.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-gray-900">{guard.name}</h4>
                  <span className="block text-red-600 font-medium">
                    {guard.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
