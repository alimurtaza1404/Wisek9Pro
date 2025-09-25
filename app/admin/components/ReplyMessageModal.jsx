// app/admin/components/ReplyMessageModal.js
'use client';

export default function ReplyMessageModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-semibold mb-4">Reply to Message</h3>
        <input className="border rounded px-3 py-2 w-full mb-2" placeholder="Subject" />
        <textarea className="border rounded px-3 py-2 w-full mb-2" placeholder="Message" />
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Reply</button>
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}