// app/admin/components/Messages.js
'use client';
import { useState } from 'react';
import ReplyMessageModal from './ReplyMessageModal';

export default function Messages() {
  const [isReplyMessageOpen, setIsReplyMessageOpen] = useState(false);

  return (
    <section className="py-10 px-6 rounded-xl bg-gradient-to-br from-black via-gray-900 to-red-950 shadow-xl text-white">
      <h3 className="text-2xl font-bold text-red-500 mb-8 text-center">
        Messages & Security Reservations
      </h3>

      {/* Filters + New Message */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <select className="bg-black border border-red-600 text-gray-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-600">
          <option>All Messages</option>
          <option>Unread</option>
          <option>Reservations</option>
        </select>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all">
          + New Message
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-black/90 border border-red-700 p-6 rounded-xl shadow hover:shadow-red-500/40 transition">
          <h4 className="font-semibold text-gray-300">Unread Messages</h4>
          <p className="text-3xl font-bold text-red-500">8</p>
          <p className="text-sm text-gray-400">Require attention</p>
        </div>
        <div className="bg-black/90 border border-red-700 p-6 rounded-xl shadow hover:shadow-red-500/40 transition">
          <h4 className="font-semibold text-gray-300">New Reservations</h4>
          <p className="text-3xl font-bold text-red-500">5</p>
          <p className="text-sm text-gray-400">Awaiting approval</p>
        </div>
        <div className="bg-black/90 border border-red-700 p-6 rounded-xl shadow hover:shadow-red-500/40 transition">
          <h4 className="font-semibold text-gray-300">Pending Confirmations</h4>
          <p className="text-3xl font-bold text-red-500">3</p>
          <p className="text-sm text-gray-400">Need client response</p>
        </div>
        <div className="bg-black/90 border border-red-700 p-6 rounded-xl shadow hover:shadow-red-500/40 transition">
          <h4 className="font-semibold text-gray-300">Avg Response Time</h4>
          <p className="text-3xl font-bold text-red-500">1.2h</p>
          <p className="text-sm text-gray-400">This week</p>
        </div>
      </div>

      {/* Example Message */}
      <div className="bg-black/90 border border-red-700 p-6 rounded-xl shadow-lg mb-6 hover:shadow-red-500/50 transition-all">
        <div className="flex justify-between flex-wrap gap-2 mb-3">
          <div>
            <p className="font-semibold text-white">
              Security Reservation Request <span className="text-yellow-400">– UNREAD</span>
            </p>
            <p className="text-gray-400">From: BuildCorp Construction Ltd</p>
          </div>
          <p className="text-sm text-gray-400">3 hours ago</p>
        </div>

        <p className="text-gray-200 mb-4">
          Service Type: <span className="font-medium text-red-400">Construction Site Security</span> – Duration 2 weeks.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-semibold shadow-md transition">
            Approve Reservation
          </button>
          <button
            onClick={() => setIsReplyMessageOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold shadow-md transition"
          >
            Request More Info
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold shadow-md transition">
            Decline
          </button>
        </div>
      </div>

      {/* Modal */}
      {isReplyMessageOpen && <ReplyMessageModal onClose={() => setIsReplyMessageOpen(false)} />}
    </section>
  );
}
