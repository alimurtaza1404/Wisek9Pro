// app/admin/components/AddServiceModal.js
'use client';

export default function AddServiceModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-semibold mb-4">Add New Service</h3>
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Service Name" />
        <textarea className="border rounded px-3 py-2 w-full mb-2" placeholder="Description" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Hourly Rate (£)" />
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Service</button>
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}