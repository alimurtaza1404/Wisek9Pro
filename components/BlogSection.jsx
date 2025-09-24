"use client";
import { useState } from "react";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "London Doesn’t Wait, and Neither Should Your Security",
      category: "Security",
      date: "July 11, 2025",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "In the fast-paced environment of London, security threats evolve rapidly. Discover why proactive security measures are essential for businesses.",
      href: "https://wisek9.co.uk/blog/london-security",
      featured: true,
    },
    {
      id: 2,
      title: "Event Security Best Practices for 2025",
      category: "Events",
      date: "August 20, 2025",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Managing large crowds and ensuring public safety is more critical than ever. Learn the best event security practices tailored for modern challenges.",
      href: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Technology and the Future of Security",
      category: "Technology",
      date: "September 5, 2025",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "From AI-powered monitoring to drones, explore how cutting-edge technology is reshaping security operations worldwide.",
      href: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Construction Site Security Challenges",
      category: "Security",
      date: "October 12, 2025",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Construction sites are high-risk for theft and vandalism. Discover our proven strategies to safeguard equipment and workers effectively.",
      href: "#",
      featured: false,
    },
    {
      id: 5,
      title: "K9 Units: More Than Just Guard Dogs",
      category: "Security",
      date: "November 3, 2025",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "K9 security units are a powerful deterrent and an essential detection tool. Learn why canine services are on the rise in 2025.",
      href: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Cybersecurity Trends for Physical Security Firms",
      category: "Technology",
      date: "December 1, 2025",
      author: "admin",
      image:
         "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "With physical and digital security merging, cyber threats can compromise real-world safety. Explore the latest cybersecurity measures.",
      href: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Emergency Response Preparedness",
      category: "Events",
      date: "January 10, 2026",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Emergencies are unpredictable. Learn how effective planning ensures faster response and better protection for clients and communities.",
      href: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Staffing Solutions: Flexibility in Modern Security",
      category: "Staffing",
      date: "February 2, 2026",
      author: "admin",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Temporary staffing provides flexibility while ensuring safety. See how Wise-K9 supports businesses with professional staffing solutions.",
      href: "#",
      featured: false,
    },
  ];

  const categories = ["All", "Security", "Events", "Technology", "Staffing"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section id="blogs" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-red-500 mb-6">
            Security Insights Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest security industry insights, expert
            analysis, and professional guidance from our specialists.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {blog.featured && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                )}
                <div className="absolute bottom-4 left-4 text-white text-sm">
                  <span>{blog.date}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 text-sm text-gray-400">
                  <span className="text-red-500 font-semibold mr-2">
                    by {blog.author}
                  </span>
                  • {blog.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">{blog.excerpt}</p>
                <Link
                  href={blog.href}
                  target="_blank"
                  className="inline-flex items-center text-red-500 hover:text-red-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-700 to-black rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              Stay Informed with Security Insights
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our blog for the latest industry updates, expert
              tips, and professional guidance.
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
