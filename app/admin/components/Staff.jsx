// app/admin/components/Staff.js
'use client';
import { useState } from 'react';
import AddStaffModal from './AddStaffModal';

export default function Staff() {
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-red-500">Staff Management & Scheduling</h3>
        <div>
          <button
            onClick={() => setIsAddStaffOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md mr-2 transition-all"
          >
            + Add Staff Member
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg shadow-md transition-all">
            Export Staff
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">Total Staff</h4>
          <p className="text-3xl font-bold text-red-500">156</p>
          <p className="text-gray-400">All employees</p>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">On Duty</h4>
          <p className="text-3xl font-bold text-green-500">89</p>
          <p className="text-gray-400">Currently working</p>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">Available</h4>
          <p className="text-3xl font-bold text-yellow-400">47</p>
          <p className="text-gray-400">Ready for assignment</p>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold">Off Duty</h4>
          <p className="text-3xl font-bold text-gray-400">20</p>
          <p className="text-gray-400">Resting</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500">
          <option>All Positions</option>
          <option>Security Guards</option>
          <option>Senior Guards</option>
          <option>Supervisors</option>
        </select>
        <select className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500">
          <option>All Status</option>
          <option>On Duty</option>
          <option>Available</option>
          <option>Off Duty</option>
        </select>
        <select className="border border-gray-700 bg-gray-900 text-white rounded px-4 py-2 focus:ring-2 focus:ring-red-500">
          <option>All Locations</option>
          <option>Manchester</option>
          <option>Leeds</option>
          <option>London</option>
        </select>
      </div>

      {/* Staff Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-gray-900/95 text-white">
          <thead>
            <tr className="bg-red-600 text-left text-sm uppercase">
              <th className="p-3">Staff Member</th>
              <th className="p-3">Position</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Shift</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="border-t border-gray-700 hover:bg-gray-800 transition">
              <td className="p-3 font-semibold">
                John Smith <br />
                <span className="text-gray-400 text-sm">Employee ID: WK001</span>
              </td>
              <td className="p-3">
                Security Guard <br />
                <span className="text-gray-400 text-sm">Level 2 Certified</span>
              </td>
              <td className="p-3">
                john.smith@wisek9.co.uk <br />
                <span className="text-gray-400">+44 161 555 0101</span>
              </td>
              <td className="p-3">
                Manchester <br />
                <span className="text-gray-400 text-sm">Tesco Store</span>
              </td>
              <td className="p-3">
                <span className="bg-green-600 px-3 py-1 rounded-full text-xs font-semibold">On Duty</span>
                <br />
                <span className="text-gray-400 text-sm">Since 06:00</span>
              </td>
              <td className="p-3">
                Day Shift <br />
                <span className="text-gray-400 text-sm">06:00 - 18:00</span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
            {/* Repeat for other staff members */}
          </tbody>
        </table>
      </div>

      {/* Add Staff Modal */}
      {isAddStaffOpen && <AddStaffModal onClose={() => setIsAddStaffOpen(false)} />}
    </div>
  );
}
