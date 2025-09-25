'use client';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const addService = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ name }),
    });
    const newService = await res.json();
    setServices([...services, newService]);
    setName('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
      <form onSubmit={addService} className="mb-6 flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New service"
          className="border p-2 rounded flex-1"
        />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s._id} className="p-3 bg-white rounded shadow">{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
