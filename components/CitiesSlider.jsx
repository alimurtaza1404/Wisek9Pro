// components/Cities.tsx
'use client'
import Link from 'next/link'

export default function Cities() {
  const cities = [
    { name: 'Surrey', description: 'Premium security services' },
    { name: 'Birmingham', description: "UK's second city" },
    { name: 'Bristol', description: 'South West hub' },
    { name: 'Cardiff', description: "Wales' capital" },
    { name: 'Edinburgh', description: "Scotland's capital" },
    { name: 'Glasgow', description: "Scotland's largest" },
    { name: 'Liverpool', description: 'Maritime city' },
    { name: 'London', description: 'Capital city' },
    { name: 'Manchester', description: 'Industrial heritage' },
    { name: 'Newcastle', description: 'North East' },
    { name: 'Sheffield', description: 'Steel city' },
    { name: 'York', description: 'Historic city' },
  ]

  return (
    <>
      {/* ✅ Breadcrumb Section */}
      <div
        className="relative bg-center bg-cover bg-no-repeat pt-40 pb-12 md:pt-48 md:pb-16 text-white"
        style={{ backgroundImage: "url('/assets2/Location-04.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md animate-slide-down">
            UK Cities
          </h2>
          <ul className="flex justify-center items-center gap-3 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors duration-300 font-medium">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-red-500 font-semibold">UK Cities</li>
          </ul>
        </div>
        <style jsx>{`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-down {
            animation: slideDown 0.8s ease forwards;
          }
        `}</style>
      </div>

      {/* ✅ Space After Breadcrumb */}
      <div className="h-8 md:h-12"></div>

      {/* ✅ Main Cities Section (unchanged) */}
      <section
        id="cities"
        className="relative py-24 text-white bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets2/coverage.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* 🟢 Softer Overlay to make image visible */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-red-500 drop-shadow-[0_3px_10px_rgba(255,0,0,0.5)] mb-6 animate-fade-in">
              UK Major Cities We Serve
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
              Professional security services across the UK's major metropolitan areas with local expertise and rapid response capabilities.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="group relative bg-black/60 rounded-xl p-5 text-white shadow-md hover:shadow-[0_8px_24px_rgba(255,0,0,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 bg-red-600/40 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-red-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">{city.name}</h3>
                  <p className="text-xs text-gray-300">{city.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-[0_10px_30px_rgba(255,0,0,0.6)] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4">Don&apos;t See Your City?</h3>
              <p className="text-xl mb-6">
                We cover 87% of the UK. Contact us to discuss tailored security solutions.
              </p>
              <Link
                href="https://wisek9.co.uk/contact"
                target="_blank"
                className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
