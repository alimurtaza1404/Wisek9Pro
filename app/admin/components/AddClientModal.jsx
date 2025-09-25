// app/admin/components/AddClientModal.js
'use client';

export default function AddClientModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-semibold mb-4">Add New Client</h3>
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Company Name" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Contact Email" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Phone Number" />
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Retail Security</option>
          <option>Corporate Security</option>
          <option>Event Security</option>
          <option>Construction Security</option>
        </select>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Client</button>
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}