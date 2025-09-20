export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-red-500">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with WiseK9 today for a free consultation about your
            security needs. We are available 24/7 to discuss your requirements.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="bg-gray-900 shadow-xl rounded-xl p-8 hover:shadow-red-500/50 transition-all">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-phone-alt" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300">+44 123 456 789</p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 shadow-xl rounded-xl p-8 hover:shadow-red-500/50 transition-all">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-envelope" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">info@wisek9.co.uk</p>
          </div>

          {/* Location */}
          <div className="bg-gray-900 shadow-xl rounded-xl p-8 hover:shadow-red-500/50 transition-all">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-map-marker-alt" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
            <p className="text-gray-300">
              123 Business Park Road <br />
              London, UK
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <a
            href="mailto:info@wisek9.co.uk"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
