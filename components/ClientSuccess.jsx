import Link from "next/link";

export default function ClientSuccess() {
  const stories = [
    {
      title: "Securing a Retail Chain in London",
      img: "/assets2/coverage.jpg",
      desc: "Our SIA-licensed guards and 24/7 CCTV monitoring reduced shoplifting by 40% for a major London retailer.",
      link: "/assets2/retail-case-study.pdf",
    },
    {
      title: "Flawless Festival Security in Surrey",
      img: "/assets2/Event Security-01.jpg",
      desc: "Our event security team, including K9 units, managed a 20,000-attendee festival in Surrey with zero incidents.",
      link: "/assets2/event-case-study.pdf",
    },
    {
      title: "Protecting a Manchester Construction Site",
      img: "/assets2/customSecurity.jpg",
      desc: "Wise-K9’s mobile patrols and canine security safeguarded a £10M construction project, preventing theft.",
      link: "/assets2/construction-case-study.pdf",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets2/coverage.jpg')" }}
    >
      {/* Dark + Red Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/80 via-black/70 to-red-950/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-6 drop-shadow-lg">
          Client Success Stories
        </h2>
        <p className="text-gray-200 text-center max-w-3xl mx-auto mb-12 text-lg">
          See how Wise-K9 delivers tailored security solutions for businesses
          and events across the UK.
        </p>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-xl p-5 shadow-lg hover:shadow-red-500/40 transition-all hover:-translate-y-2 backdrop-blur-md"
            >
              <img
                src={story.img}
                alt={story.title}
                className="rounded-lg mb-4 w-full h-52 object-cover"
              />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {story.title}
              </h3>
              <p className="text-gray-700 mb-4">{story.desc}</p>
              <Link
                href={story.link}
                target="_blank"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition-transform hover:scale-105"
              >
                View Case Study
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            Your Security, Our Priority
          </h3>
          <p className="text-gray-200 mb-6">
            Contact us to discover how we can protect your business or event
            with bespoke security solutions.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-500/40 transition-all transform hover:scale-105"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
