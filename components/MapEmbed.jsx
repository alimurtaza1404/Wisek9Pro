// components/MapEmbed.jsx
'use client';
import React from 'react';

export default function MapEmbed({ lat, lng, label = 'Map Location', zoom = 14, height = 220 }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  const containerStyle = typeof height === 'number' ? { height: `${height}px` } : { height };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-lg bg-white"
      style={containerStyle}
      aria-label={label}
    >
      <iframe
        src={src}
        title={label}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
}