'use client';

import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
  // Mock chart data
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Service Requests',
        data: [30, 45, 28, 60, 42, 55],
        backgroundColor: '#ef4444',
        borderRadius: 6,
      },
    ],
  };

  const doughnutData = {
    labels: ['Manned Guarding', 'Event Security', 'K9 Units', 'Patrol'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#ef4444', '#f97316', '#22c55e', '#3b82f6'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Clients', value: '247', sub: '+12% this month', color: 'text-green-400' },
          { title: 'Guards On Duty', value: '89', sub: '24/7 Coverage' },
          { title: 'UK Coverage', value: '78%', sub: '156 Locations' },
          { title: 'New Leads', value: '34', sub: '+8 this week', color: 'text-green-400' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-gray-900/90 p-6 rounded-xl shadow-md hover:shadow-red-500/30 
                       transition-all duration-300 border border-gray-800"
          >
            <h4 className="text-gray-300 font-medium mb-2">{stat.title}</h4>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.color || 'text-gray-400'}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/90 p-6 rounded-xl border border-gray-800">
          <h4 className="text-white font-semibold mb-4">Service Requests Over Time</h4>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div className="bg-gray-900/90 p-6 rounded-xl border border-gray-800">
          <h4 className="text-white font-semibold mb-4">Service Distribution</h4>
          <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { labels: { color: '#ddd' } } } }} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900/90 p-6 rounded-xl border border-gray-800">
        <h4 className="text-white font-semibold mb-4">Recent Activity</h4>
        <ul className="divide-y divide-gray-800 text-gray-300">
          <li className="py-3">
            <span className="text-red-400 font-medium">New client registration</span>: Tesco Manchester – <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="py-3">
            <span className="text-red-400 font-medium">Guard shift started</span>: John Smith at Retail Park Leeds – <span className="text-gray-400">4 hours ago</span>
          </li>
          <li className="py-3">
            <span className="text-red-400 font-medium">Quote request received</span>: Construction Site Security – <span className="text-gray-400">6 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
