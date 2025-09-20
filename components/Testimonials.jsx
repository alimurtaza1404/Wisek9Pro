export default function Testimonials() {
  return (
    <section className="section-testimonial-carousel py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Wise-K9 delivers tailored security solutions for businesses and events across the UK.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-style-3">
            <div className="flex flex-col md:flex-row items-start p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <img
                src="/assets2/02.png"
                alt="John S."
                className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4 object-cover"
              />
              <div className="content flex-1">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  “WiseK9 provides top-notch security for our retail chain. We've seen theft rates drop significantly.”
                </p>
                <div className="clint-info">
                  <h4 className="text-xl font-bold text-black">John S.</h4>
                  <span className="text-gray-500 text-sm">Retail Store Manager</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-style-3 bg_color--2">
            <div className="flex flex-col md:flex-row items-start p-6 bg-red-50 rounded-lg shadow-lg border border-red-200">
              <img
                src="/assets2/01.png"
                alt="Sarah T."
                className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4 object-cover"
              />
              <div className="content flex-1">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  “Their officers are professional and well-trained. We trust them to keep our construction sites secure.”
                </p>
                <div className="clint-info">
                  <h4 className="text-xl font-bold text-black">Sarah T.</h4>
                  <span className="text-gray-500 text-sm">Project Manager</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          {/* <div className="testimonial-style-3">
            <div className="flex flex-col md:flex-row items-start p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <img
                src="/assets2/01.png"
                alt="Dr. Ahmed"
                className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4 object-cover"
              />
              <div className="content flex-1">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  “24/7 support and quick response times — exactly what we needed for our healthcare facility.”
                </p>
                <div className="clint-info">
                  <h4 className="text-xl font-bold text-black">Dr. Ahmed</h4>
                  <span className="text-gray-500 text-sm">Hospital Administrator</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}