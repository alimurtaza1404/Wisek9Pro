// app/admin/components/Services.js
'use client';
import { useState } from 'react';
import AddServiceModal from './AddServiceModal';

export default function Services() {
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-red-500">Services Management</h3>
        <button
          onClick={() => setIsAddServiceOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition-all"
        >
          + Add Service
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Retail Security */}
        <div className="bg-gray-900/90 text-white p-5 rounded-xl shadow-lg hover:shadow-red-500/40 hover:scale-105 transition-all">
          <img
            src="/images/retail-security.jpg"
            alt="Retail Security"
            className="mb-4 w-full h-40 object-cover rounded-lg"
          />
          <span className="text-green-400 text-sm font-semibold">Active</span>
          <h4 className="font-bold text-lg mt-2">Retail Security</h4>
          <p className="text-gray-300 text-sm mt-1">
            Professional security services for retail establishments...
          </p>
          <p className="mt-2 font-semibold text-red-400">From £15/hour</p>
          <div className="flex gap-2 mt-4">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>

        {/* Corporate Security */}
        <div className="bg-gray-900/90 text-white p-5 rounded-xl shadow-lg hover:shadow-red-500/40 hover:scale-105 transition-all">
          <img
            src="/images/corporate-security.jpg"
            alt="Corporate Security"
            className="mb-4 w-full h-40 object-cover rounded-lg"
          />
          <span className="text-green-400 text-sm font-semibold">Active</span>
          <h4 className="font-bold text-lg mt-2">Corporate Security</h4>
          <p className="text-gray-300 text-sm mt-1">
            Security services for offices and corporate facilities...
          </p>
          <p className="mt-2 font-semibold text-red-400">From £20/hour</p>
          <div className="flex gap-2 mt-4">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>

        {/* Event Security */}
        <div className="bg-gray-900/90 text-white p-5 rounded-xl shadow-lg hover:shadow-red-500/40 hover:scale-105 transition-all">
          <img
            src="/images/event-security.jpg"
            alt="Event Security"
            className="mb-4 w-full h-40 object-cover rounded-lg"
          />
          <span className="text-green-400 text-sm font-semibold">Active</span>
          <h4 className="font-bold text-lg mt-2">Event Security</h4>
          <p className="text-gray-300 text-sm mt-1">
            Crowd management and event safety solutions...
          </p>
          <p className="mt-2 font-semibold text-red-400">From £18/hour</p>
          <div className="flex gap-2 mt-4">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Add Service Modal */}
      {isAddServiceOpen && <AddServiceModal onClose={() => setIsAddServiceOpen(false)} />}
    </div>
  );
}
