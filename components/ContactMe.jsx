// components/ContactUs.tsx
'use client';
import Link from 'next/link';
import MapEmbed from './MapEmbed';

export default function ContactUs() {
  // Four sample locations (latitude, longitude). Replace with exact coords you want.
  const locations = [
    { label: 'Regus - Camberley (Frimley Rd)', lat: 51.3241, lng: -0.7405 },
    { label: 'Regus - Plymouth (Sutton Harbour)', lat: 50.3755, lng: -4.1426 },
    { label: '1 Macdowall St, Glasgow', lat: 55.8590, lng: -4.2610 },
    { label: 'Blake House (York area)', lat: 53.9586, lng: -1.0803 },
  ];

  return (
    <>
      {/* Breadcrumb Hero */}
      <div
        className="relative bg-center bg-cover bg-no-repeat pt-40 pb-16 md:pt-48 md:pb-20 text-white"
        style={{ backgroundImage: "url('/assets2/coverage.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Contact Us
          </h2>
          <ul className="flex justify-center items-center gap-3 text-gray-300 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors duration-300 font-medium">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-red-500 font-semibold">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 md:h-16" />

      {/* NEW: Maps + Contact form side-by-side */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start px-4 lg:px-0">
            {/* Left: 2x2 Maps grid spanning 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {locations.map((loc, idx) => (
                  <MapEmbed
                    key={idx}
                    lat={loc.lat}
                    lng={loc.lng}
                    label={loc.label}
                    zoom={13}
                    height={260}
                  />
                ))}
              </div>
            </div>

            {/* Right: Contact Form + Contact Info (stacked) */}
            <div className="space-y-6">
              {/* Contact Form Card (Get Free Case Evaluation) */}
              <div
                className="p-8 rounded-2xl shadow-2xl hover:shadow-[0_12px_40px_rgba(255,0,0,0.15)] transition-all"
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #7f1d1d 50%, #991b1b 75%, #dc2626 100%)',
                }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">Get Free Case Evaluation</h3>
                <p className="text-sm text-gray-200 mb-6">We do not charge for any case evaluation.</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="How to assist you"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400"
                  />

                  <button
                    type="submit"
                    className="w-full bg-white text-red-600 font-bold py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>

              {/* Contact Info Card (Contact Details) */}
              <div
                className="p-6 rounded-2xl shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #7f1d1d 50%, #991b1b 75%, #dc2626 100%)',
                }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">Contact Details</h4>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl">📞</span>
                    <div>
                      <a href="tel:+4403300434152" className="block hover:text-red-300">0330 043 4152</a>
                      <a href="tel:+447415274698" className="block hover:text-red-300">+44 7415 274698</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl">✉️</span>
                    <div>
                      <a href="mailto:info@wisek9.co.uk" className="block hover:text-red-300">info@wisek9.co.uk</a>
                      <a href="mailto:support@wisek9.co.uk" className="block hover:text-red-300">support@wisek9.co.uk</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl">📍</span>
                    <div>402 Silver Square, 33rd Street, London, UK</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern (subtle) */}
        <div className="absolute inset-0 opacity-5 bg-[url('/assets2/pattern.png')] bg-repeat pointer-events-none" />
      </section>

      {/* NEW: Request For Security Service Section with Multi-Shaded Red and Black Contrast and Rotated Corner */}
      <section
        className="relative py-16 mt-16 px-4 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #7f1d1d 50%, #991b1b 75%, #dc2626 100%)',
        }}
        aria-label="Request for Security Service"
      >
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 animate-slide-up" role="region" aria-labelledby="security-service-heading">
            {/* Request For Security Service Form with Rotated Corner */}
            <div
              className="p-6 md:p-8 rounded-2xl shadow-lg relative"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #7f1d1d 50%, #991b1b 75%, #dc2626 100%)',
              }}
            >
              {/* Rotated Corner Effect */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-white border-b-[40px] border-b-transparent -rotate-45"
                style={{ zIndex: 1 }}
              />
              <h2 id="security-service-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                Request For Security Service
              </h2>
              <form className="grid grid-cols-1 gap-6 relative z-10" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-red-500 bg-opacity-50 border-none rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
                    required
                    aria-required="true"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-red-500 bg-opacity-50 border-none rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
                    required
                    aria-required="true"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-red-500 bg-opacity-50 border-none rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
                  required
                  aria-required="true"
                />
                <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4 border-none p-0">
                  <legend className="sr-only">Select Security Services</legend>
                  {[
                    'Manned Guarding',
                    'Event Security',
                    'Construction & Vacant Property Security',
                    'Temporary Staff Support Services',
                    'Canine Security',
                    'Mobile Security',
                    'Cleaning & Staffing Services',
                  ].map((service, idx) => (
                    <label key={idx} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:ring-2 transition duration-200"
                      />
                      <span className="text-sm md:text-base text-gray-200 hover:text-red-100 transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </fieldset>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-red-500 bg-opacity-50 border-none rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Preserved and Untouched) */}
      {/* Keep rest of your contact sections (if any) below... */}

      {/* Small animations style (kept from original and extended) */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }

        /* Form input focus and hover effects */
        input:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
          transition: box-shadow 0.3s ease;
        }
        input:hover,
        textarea:hover {
          background-color: rgba(220, 38, 38, 0.6);
        }

        /* Checkbox hover and focus effects */
        input[type='checkbox']:hover {
          cursor: pointer;
          border-color: #f87171;
        }
        input[type='checkbox']:focus {
          box-shadow: 0 0 0 2px #f87171;
        }

        /* Button hover and active effects */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        button:active {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}