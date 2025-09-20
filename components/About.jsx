'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutUs() {
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const section = whyChooseRef.current;
    const elements = section?.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ Breadcrumb Section with Space */}
 {<div
  className="relative bg-center bg-cover bg-no-repeat pt-32 pb-12 md:pt-40 md:pb-16 text-white"
  style={{ backgroundImage: "url('/assets2/customSecurity.jpg')" }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center animate-breadcrumb">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
      About Us
    </h2>

    {/* Breadcrumb Links */}
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
      <li className="text-red-500 font-semibold">About Us</li>
    </ul>
  </div>
</div>}


      {/* ✅ Main About Section with Space */}
      <section
        id="about"
        className="relative py-24 bg-fixed bg-center bg-no-repeat bg-cover mt-16 mb-20 md:mt-20 md:mb-24"
        // style={{ backgroundImage: "url('/assets2/customSecurity.jpg')" }}
        
        
      >
          <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(100%)" }}
        >
          <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
      </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-8 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
              About Us
            </h2>
            <p className="text-2xl font-sans text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Wise-K9 is among the leading security companies helping you solve
              your security needs with expertise and reliability.
            </p>
          </div>

          {/* Bespoke Solutions */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-heading text-white text-center mb-10">
              We provide bespoke security solutions that make your life easier:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { icon: 'Services Icons-01.svg', text: 'Manned Guarding' },
                { icon: 'Services Icons-02.svg', text: 'Event Security' },
                { icon: 'Services Icons-03.svg', text: 'Construction Security' },
                { icon: 'Services Icons-04.svg', text: 'Mobile Patrol' },
                { icon: 'Services Icons-05.svg', text: 'Canine Security' },
                { icon: 'Services Icons-06.svg', text: 'Temporary Staff Support' },
                { icon: 'Services Icons-07.svg', text: 'Cleaning & Staffing' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center group transform hover:scale-105 transition-transform duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-red-700 transition-colors">
                    <Image
                      src={`/assets2/icons/${item.icon}`}
                      alt={`${item.text} Icon`}
                      width={40}
                      height={40}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-200">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-2xl animate-fade-in">
              <p className="text-lg font-sans text-gray-700 leading-relaxed mb-6">
                We operate across the UK and provide construction and event
                security for your safety. Wise-K9 has become a trusted security
                partner nationwide.
              </p>
              <p className="text-lg font-sans text-gray-700 leading-relaxed mb-6">
                Would you hire security if it did not keep you safe? Neither
                would we — that’s why we ensure every event and construction site
                is fully protected.
              </p>
              <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold">87% UK Coverage</p>
                <p>Nationwide Security Solutions</p>
              </div>
            </div>

            <div className="animate-fade-in-delay">
              <Image
                src="/assets2/coverage.jpg"
                alt="Professional security team"
                width={1152}
                height={384}
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Why Choose Section */}
          <div
            ref={whyChooseRef}
            className="bg-white/95 backdrop-blur-md p-12 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-heading text-red-600 text-center mb-8 animate-on-scroll slide-left">
              Why should you choose Wise-K9?
            </h3>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed animate-on-scroll slide-left">
              Known for reliability and excellence, Wise-K9 delivers
              client-focused security services across residential, commercial,
              and public sectors with stress-free solutions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: 'Why choos... Icon-01.svg',
                  title: 'Professional SIA-Licensed Guards',
                  text: 'Highly trained and certified security professionals',
                },
                {
                  icon: 'Why choos... Icon-02.svg',
                  title: 'Dynamic Security System',
                  text: 'Adaptive and responsive security solutions',
                },
                {
                  icon: 'Why choos... Icon-03.svg',
                  title: 'Effective Communication',
                  text: 'Clear and timely communication channels',
                },
                {
                  icon: 'Why choos... Icon-04.svg',
                  title: 'Outstanding Recruitment',
                  text: 'Rigorous selection and training processes',
                },
                {
                  icon: 'Why choos... Icon-05.svg',
                  title: 'Nationwide Reputation',
                  text: 'Trusted name across the UK',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-center group animate-on-scroll ${
                    i % 2 === 0 ? 'slide-left' : 'slide-right'
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:bg-red-700 transition-colors">
                    <Image
                      src={`/assets2/icons/${item.icon}`}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <h4 className="text-lg font-heading text-red-600 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center animate-on-scroll slide-up">
              <p className="text-lg mb-6 text-gray-700">
                Wise-K9 covers 87% of the UK and delivers trusted, SIA-licensed
                security services.
              </p>
              <Link
                href="https://wisek9.co.uk/about"
                target="_blank"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
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
          @keyframes slideRight {
            0% {
              opacity: 0;
              transform: translateX(60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
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
          @keyframes fadeBreadcrumb {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInDelay {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-breadcrumb {
            animation: fadeBreadcrumb 1s ease forwards;
          }
          .animate-on-scroll {
            opacity: 0;
          }
          .animate-on-scroll.animate-active.slide-left {
            animation: slideLeft 1s ease forwards;
          }
          .animate-on-scroll.animate-active.slide-right {
            animation: slideRight 1s ease forwards;
          }
          .animate-on-scroll.animate-active.slide-up {
            animation: slideUp 1s ease forwards;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease forwards;
          }
          .animate-fade-up {
            animation: fadeUp 1s ease forwards;
          }
          .animate-fade-in-delay {
            animation: fadeInDelay 1s ease forwards 0.5s;
          }
        `}</style>
      </section>
    </>
  );
}