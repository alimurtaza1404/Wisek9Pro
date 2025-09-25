// app/admin/components/Reports.js
'use client';
import { useState } from 'react';

export default function Reports() {
  const [recentReports, setRecentReports] = useState([
    { title: 'Monthly Client Activity - March 2024', date: 'Generated 2 days ago' },
    { title: 'Guard Performance Q1 2024', date: 'Generated 1 week ago' },
  ]);

  const handleGenerate = (type) => {
    alert(`📊 ${type} Report Generated (PDF ready to download)!`);
  };

  const handleDownload = (title) => {
    alert(`⬇️ Download started: ${title}`);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-500 mb-6">Reports & Analytics</h3>

      {/* Report Generation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
          <h4 className="text-lg font-semibold mb-2">Client Activity Report</h4>
          <p className="text-gray-300">Detailed reports on client engagement and service usage.</p>
          <button
            onClick={() => handleGenerate('Client Activity')}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Generate PDF
          </button>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
          <h4 className="text-lg font-semibold mb-2">Guard Performance</h4>
          <p className="text-gray-300">Attendance, performance metrics, and feedback scores.</p>
          <button
            onClick={() => handleGenerate('Guard Performance')}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Generate PDF
          </button>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
          <h4 className="text-lg font-semibold mb-2">Incident Reports</h4>
          <p className="text-gray-300">Comprehensive incident tracking and analysis.</p>
          <button
            onClick={() => handleGenerate('Incident')}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Generate PDF
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <h4 className="text-lg font-semibold text-gray-100 mb-4">Recent Reports</h4>
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
        {recentReports.map((report, idx) => (
          <div key={idx} className="mb-4 border-b border-gray-700 pb-4 last:border-none last:pb-0">
            <p className="font-medium">{report.title}</p>
            <p className="text-sm text-gray-400">{report.date}</p>
            <button
              onClick={() => handleDownload(report.title)}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
