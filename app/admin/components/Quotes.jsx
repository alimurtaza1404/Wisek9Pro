// app/admin/components/Quotes.js
'use client';

export default function Quotes() {
  const quotes = [
    {
      id: 1,
      title: "Construction Site Security",
      client: "BuildCorp Ltd",
      time: "2 hours ago",
      status: "Pending",
      details: "Need 24/7 security for construction site in Birmingham...",
    },
    {
      id: 2,
      title: "Corporate Office Security",
      client: "FinSecure PLC",
      time: "6 hours ago",
      status: "Approved",
      details: "Requesting 2 guards for HQ night shifts in London.",
    },
    {
      id: 3,
      title: "Retail Store Coverage",
      client: "Tesco Leeds",
      time: "1 day ago",
      status: "Rejected",
      details: "Temporary weekend security for new store opening.",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-500",
    Approved: "bg-green-600",
    Rejected: "bg-red-600",
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-500 mb-6">Quote Requests</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/50 hover:scale-[1.02] transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-xl font-semibold">{quote.title}</h4>
              <span
                className={`${statusColors[quote.status]} text-white text-xs px-3 py-1 rounded-full`}
              >
                {quote.status}
              </span>
            </div>
            <p className="text-gray-300 mb-1">
              Submitted by: <span className="font-semibold">{quote.client}</span>
            </p>
            <p className="text-sm text-gray-400 mb-3">{quote.time}</p>
            <p className="mb-4">{quote.details}</p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                Approve
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Respond
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
