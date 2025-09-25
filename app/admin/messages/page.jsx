'use client';
import { useEffect, useState } from 'react';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/messages`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg._id} className="bg-white p-4 rounded shadow">
            <p><strong>{msg.name}</strong> ({msg.email})</p>
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
