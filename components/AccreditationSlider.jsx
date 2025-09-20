export default function AccreditationSlider() {
  return (
    <section id="accreditations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Our Accreditations
        </h2>

        <div className="relative">
          <button
            id="prevBtn"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 px-3 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            id="nextBtn"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 px-3 py-1 rounded-full"
          >
            ›
          </button>

          <div className="overflow-hidden mx-12">
            <div id="sliderTrack" className="flex gap-4">
              <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-16.png"
                  className="w-28 object-contain"
                  alt="Accreditation 1"
                />
              </div>

              <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-19.png"
                  className="w-28 object-contain"
                  alt="Accreditation 2"
                />
              </div>

              <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-20.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
               <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-23.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
               <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-22.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
               <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-21.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
               <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-18.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
               <div className="flex-shrink-0 w-[150px] h-[150px] p-3 rounded bg-white shadow flex items-center justify-center">
                <img
                  src="/assets2/AcRdtion-17.png"
                  className="w-28 object-contain"
                  alt="Accreditation 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
