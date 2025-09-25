// app/admin/components/Clients.js
'use client';
import { useState } from 'react';
import AddClientModal from './AddClientModal';

export default function Clients() {
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-red-500">Client Management</h3>
        <button
          onClick={() => setIsAddClientOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition-all"
        >
          + Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <select className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500">
          <option>All Clients</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500">
          <option>All Services</option>
          <option>Retail Security</option>
          <option>Corporate Security</option>
          <option>Event Security</option>
        </select>
      </div>

      {/* Clients Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-gray-900/95 text-white">
          <thead>
            <tr className="bg-red-600 text-left text-sm uppercase">
              <th className="p-3">Client Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Service Type</th>
              <th className="p-3">Contract Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
              <td className="p-3 font-semibold">Tesco Manchester</td>
              <td className="p-3">
                <p>manager@tesco.com</p>
                <p className="text-gray-400">+44 161 123 4567</p>
              </td>
              <td className="p-3">Retail Security</td>
              <td className="p-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Active
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>

            {/* Example Inactive Row */}
            <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
              <td className="p-3 font-semibold">BuildCorp Ltd</td>
              <td className="p-3">
                <p>contact@buildcorp.co.uk</p>
                <p className="text-gray-400">+44 7700 900123</p>
              </td>
              <td className="p-3">Construction Security</td>
              <td className="p-3">
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Inactive
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Client Modal */}
      {isAddClientOpen && <AddClientModal onClose={() => setIsAddClientOpen(false)} />}
    </div>
  );
}
