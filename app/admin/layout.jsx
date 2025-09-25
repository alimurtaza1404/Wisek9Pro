// app/admin/layout.jsx
'use client'; // Required for useState and client-side interactivity
import Link from 'next/link';
import { useState } from 'react';
import './global.css';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Sidebar Toggle Button for Mobile */}
        <h1>Hello</h1>
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-red-700 rounded text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`w-64 bg-gradient-to-b from-red-900 via-black to-black text-white p-6 fixed h-screen shadow-2xl border-r border-red-800 transition-all duration-300 z-40 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
        >
          {/* Logo */}
          <div className="flex items-center mb-10">
            <img src="/assets2/logowhite.png" alt="Logo" className="mr-3 w-12 h-12" />
            <h1 className="text-xl font-extrabold text-red-500">WiseK9 Security</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link
              href="/admin?section=Dashboard"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Dashboard
            </Link>
            <Link
              href="/admin?section=Services"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Services
            </Link>
            <Link
              href="/admin?section=Clients"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Clients
            </Link>
            <Link
              href="/admin?section=Staff"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Staff & Scheduling
            </Link>
            <Link
              href="/admin?section=Quotes"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Quote Requests
            </Link>
            <Link
              href="/admin?section=Analytics"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Usage Analytics
            </Link>
            <Link
              href="/admin?section=Reviews"
              className="flex justify-between items-center py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Reviews <span className="bg-red-600 text-xs px-2 py-1 rounded">12</span>
            </Link>
            <Link
              href="/admin?section=Messages"
              className="flex justify-between items-center py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Messages & Reservations <span className="bg-red-600 text-xs px-2 py-1 rounded">8</span>
            </Link>
            <Link
              href="/admin?section=Reports"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Reports
            </Link>
            <Link
              href="/admin?section=Settings"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white text-sm md:text-base"
            >
              Settings
            </Link>
          </nav>

          {/* Admin User Info */}
          <div className="mt-12 border-t border-red-800 pt-6">
            <div className="flex items-center">
              <img
                src="/assets2/02.png"
                alt="Admin"
                className="rounded-full mr-3 w-10 h-10 border-2 border-red-600"
              />
              <div>
                <p className="font-bold text-red-400 text-sm md:text-base">Admin User</p>
                <p className="text-sm text-gray-400">Superadmin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="ml-0 md:ml-64 flex-1 p-4 md:p-10 transition-all duration-300"
          style={{ marginLeft: isSidebarOpen && !'md' ? '256px' : '0' }}
        >
          {children}
        </main>

        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </body>
    </html>
  );
}