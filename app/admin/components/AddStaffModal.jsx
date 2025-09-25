// app/admin/components/AddStaffModal.js
'use client';

export default function AddStaffModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-semibold mb-4">Add New Staff Member</h3>
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="First Name" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Last Name" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Email" />
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Phone" />
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Security Guard</option>
          <option>Senior Guard</option>
          <option>Team Leader</option>
          <option>Supervisor</option>
          <option>Manager</option>
          <option>K9 Handler</option>
        </select>
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Manchester</option>
          <option>Leeds</option>
          <option>Birmingham</option>
          <option>Liverpool</option>
        </select>
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Available</option>
          <option>On Duty</option>
          <option>Off Duty</option>
          <option>On Leave</option>
        </select>
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Level 1 Certified</option>
          <option>Level 2 Certified</option>
          <option>Level 3 Certified</option>
          <option>Level 4 Certified</option>
          <option>Specialist Certified</option>
          <option>Management Level</option>
          <option>Senior Management</option>
        </select>
        <select className="border rounded px-3 py-2 w-full mb-2">
          <option>Day Shift</option>
          <option>Night Shift</option>
          <option>Flexible</option>
          <option>Office Hours</option>
        </select>
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Join Date" type="date" />
        <textarea className="border rounded px-3 py-2 w-full mb-2" placeholder="Assignment/Location Details" />
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Staff Member</button>
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}