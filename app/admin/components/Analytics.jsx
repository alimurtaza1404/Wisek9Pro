// app/admin/components/Analytics.js
'use client';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

export default function Analytics() {
  // Data for charts
  const pieData = [
    { name: 'Theft Prevention', value: 156 },
    { name: 'Access Control', value: 89 },
    { name: 'Crowd Control', value: 67 },
    { name: 'Asset Protection', value: 43 },
  ];

  const COLORS = ['#dc2626', '#ef4444', '#991b1b', '#7f1d1d'];

  const trendData = [
    { month: 'Jan', Theft: 120, Access: 60, Crowd: 40, Asset: 20 },
    { month: 'Feb', Theft: 130, Access: 65, Crowd: 45, Asset: 25 },
    { month: 'Mar', Theft: 156, Access: 89, Crowd: 67, Asset: 43 },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-500 mb-6">Usage Analytics</h3>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Theft Prevention', value: 156, note: 'Most Popular' },
          { title: 'Access Control', value: 89, note: '36% of clients' },
          { title: 'Crowd Control', value: 67, note: 'Events Focus' },
          { title: 'Asset Protection', value: 43, note: 'High Value' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition"
          >
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-3xl font-bold text-red-500">{item.value}</p>
            <p className="text-gray-400">{item.note}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Security Purpose Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Purpose Trends Over Time</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Theft" stroke="#dc2626" />
              <Line type="monotone" dataKey="Access" stroke="#ef4444" />
              <Line type="monotone" dataKey="Crowd" stroke="#991b1b" />
              <Line type="monotone" dataKey="Asset" stroke="#7f1d1d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Purpose Analysis */}
      <h4 className="text-lg font-semibold text-gray-100 mb-4">Detailed Purpose Analysis</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            name: 'Theft Prevention',
            clients: 156,
            percent: '63%',
            sector: 'Retail Stores',
            duration: '8.5 hours/day',
            success: '94.2%',
          },
          {
            name: 'Access Control',
            clients: 89,
            percent: '36%',
            sector: 'Corporate Offices',
            duration: '12 hours/day',
            success: '98.7%',
          },
          {
            name: 'Crowd Control',
            clients: 67,
            percent: '27%',
            sector: 'Events & Venues',
            duration: '6 hours/event',
            success: '91.8%',
          },
          {
            name: 'Asset Protection',
            clients: 43,
            percent: '17%',
            sector: 'Construction Sites',
            duration: '24 hours/day',
            success: '96.5%',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition"
          >
            <h5 className="text-lg font-semibold text-red-400 mb-2">{item.name}</h5>
            <p>{item.clients} active clients</p>
            <p>{item.percent} of total usage</p>
            <p>Top Sector: {item.sector}</p>
            <p>Avg. Duration: {item.duration}</p>
            <p>Success Rate: {item.success}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
