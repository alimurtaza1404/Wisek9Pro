// app/admin/components/Reviews.js
'use client';

import { useState } from 'react';

export default function Reviews() {
  const [filterRating, setFilterRating] = useState('All');
  const [filterService, setFilterService] = useState('All');

  const reviews = [
    {
      id: 1,
      client: 'John Davies',
      verified: true,
      company: 'Tesco Manchester - Store Manager',
      rating: 5,
      service: 'Retail Security',
      feedback: 'Excellent security service! The guards are professional, punctual, and reliable.',
      helpful: 12,
      responded: true,
      response: 'Thank you for your wonderful feedback. We’re proud to serve your team!',
      date: '2 days ago',
    },
    {
      id: 2,
      client: 'Sarah Thompson',
      verified: true,
      company: 'Event Manager - London',
      rating: 4,
      service: 'Event Security',
      feedback: 'Great crowd management. Could improve on entry scanning speed.',
      helpful: 5,
      responded: false,
      date: '5 days ago',
    },
    {
      id: 3,
      client: 'Michael Carter',
      verified: true,
      company: 'Corporate HQ - Birmingham',
      rating: 5,
      service: 'Corporate Security',
      feedback: 'Outstanding 24/7 coverage and quick response times!',
      helpful: 8,
      responded: true,
      response: 'We appreciate your feedback and look forward to continued partnership!',
      date: '1 week ago',
    },
  ];

  const filteredReviews = reviews.filter(
    (r) =>
      (filterRating === 'All' || r.rating === parseInt(filterRating)) &&
      (filterService === 'All' || r.service === filterService)
  );

  return (
    <section className="py-10 px-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-red-950 shadow-xl">
      <h3 className="text-2xl font-bold text-red-500 mb-8 text-center">
        Client Reviews & Feedback
      </h3>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          className="bg-black border border-red-600 rounded px-4 py-2 text-gray-200 focus:ring-2 focus:ring-red-600"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
        </select>

        <select
          className="bg-black border border-red-600 rounded px-4 py-2 text-gray-200 focus:ring-2 focus:ring-red-600"
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
        >
          <option value="All">All Services</option>
          <option value="Retail Security">Retail Security</option>
          <option value="Corporate Security">Corporate Security</option>
          <option value="Event Security">Event Security</option>
        </select>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition-all shadow-lg">
          Export Reviews
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-black/90 border border-red-700 rounded-xl p-6 shadow-md hover:shadow-red-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
              <div>
                <p className="font-bold text-white">
                  {review.client}{' '}
                  {review.verified && (
                    <span className="ml-2 text-xs text-green-400 font-medium">
                      VERIFIED
                    </span>
                  )}
                </p>
                <p className="text-gray-400">{review.company}</p>
                <p className="text-yellow-400 text-lg">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </p>
              </div>
              <div className="mt-3 md:mt-0 text-right">
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    review.responded
                      ? 'bg-green-600/20 text-green-400'
                      : 'bg-yellow-600/20 text-yellow-400'
                  }`}
                >
                  {review.responded ? 'Responded' : 'Pending'}
                </span>
                <p className="text-gray-400 text-xs mt-1">{review.date}</p>
              </div>
            </div>

            <p className="text-gray-200 mb-3">"{review.feedback}"</p>
            <p className="text-sm text-gray-400">
              {review.service} – {review.helpful} helpful votes
            </p>

            {review.responded && (
              <div className="mt-4 bg-red-950/50 p-4 rounded-lg border-l-4 border-red-600">
                <p className="text-red-400 font-semibold">WiseK9 Response:</p>
                <p className="text-gray-200">{review.response}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
