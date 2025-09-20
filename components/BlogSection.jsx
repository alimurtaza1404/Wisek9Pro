"use client";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section id="blogs" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-8">
            Security Insights Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest security industry insights, expert
            analysis, and professional guidance from our security specialists.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post 1 */}
          <article className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 group">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
                alt="London cityscape at night"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </span>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                <span>July 11, 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3 text-sm text-gray-400">
                <span className="text-red-500 font-semibold mr-2">
                  by admin
                </span>
                • Blog
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500">
                London Doesn&apos;t Wait, and Neither Should Your Security
              </h3>
              <p className="text-gray-300 mb-4">
                In the fast-paced environment of London, security threats evolve
                rapidly. Discover why proactive security measures are essential
                for businesses operating in the capital and how Wise-K9 provides
                immediate response solutions.
              </p>
              <Link
                href="https://wisek9.co.uk/blog/london-security"
                target="_blank"
                className="inline-flex items-center text-red-500 hover:text-red-700 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </article>
             {/* Blog Post 1 */}
          <article className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 group">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
                alt="London cityscape at night"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </span>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                <span>July 11, 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3 text-sm text-gray-400">
                <span className="text-red-500 font-semibold mr-2">
                  by admin
                </span>
                • Blog
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500">
                London Doesn&apos;t Wait, and Neither Should Your Security
              </h3>
              <p className="text-gray-300 mb-4">
                In the fast-paced environment of London, security threats evolve
                rapidly. Discover why proactive security measures are essential
                for businesses operating in the capital and how Wise-K9 provides
                immediate response solutions.
              </p>
              <Link
                href="https://wisek9.co.uk/blog/london-security"
                target="_blank"
                className="inline-flex items-center text-red-500 hover:text-red-700 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </article>

        
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-700 to-black rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              Stay Informed with Security Insights
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our blog for the latest security industry updates,
              expert tips, and professional guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm opacity-70 mt-4">
              Join 1,000+ security professionals who trust our insights.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="https://wisek9.co.uk/blog"
              target="_blank"
              className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
