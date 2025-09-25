// app/admin/components/Reports.js
export default function Reports() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Reports & Analytics</h3>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Client Activity Report</h4>
          <p>Generate detailed reports on client engagement...</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Generate PDF</button>
        </div>
        {/* Repeat for Guard Performance, Incident Reports */}
      </div>
      <h4 className="font-semibold mb-2">Recent Reports</h4>
      <div className="bg-white p-4 rounded shadow">
        <p>Monthly Client Activity - March 2024 - Generated 2 days ago</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Download</button>
      </div>
    </div>
  );
}