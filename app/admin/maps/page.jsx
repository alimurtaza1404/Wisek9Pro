'use client';
import { useEffect, useState } from 'react';

export default function MapsPage() {
  const [maps, setMaps] = useState([]);
  const [label, setLabel] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/maps`)
      .then((res) => res.json())
      .then((data) => setMaps(data));
  }, []);

  const addMap = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/maps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ label, lat, lng }),
    });
    const newMap = await res.json();
    setMaps([...maps, newMap]);
    setLabel(''); setLat(''); setLng('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Maps</h1>
      <form onSubmit={addMap} className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-2">
        <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Label" className="border p-2 rounded" />
        <input value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Lat" className="border p-2 rounded" />
        <input value={lng} onChange={(e) => setLng(e.target.value)} placeholder="Lng" className="border p-2 rounded" />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Add</button>
      </form>
      <ul className="space-y-2">
        {maps.map((m) => (
          <li key={m._id} className="p-3 bg-white rounded shadow">{m.label} ({m.lat}, {m.lng})</li>
        ))}
      </ul>
    </div>
  );
}
