// app/admin/layout.js
import Link from 'next/link';
import './global.css';

export const metadata = {
  title: 'WiseK9 Security Admin Dashboard',
  description: 'Admin dashboard for WiseK9 Security',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-red-900 via-black to-black text-white p-6 fixed h-screen shadow-2xl border-r border-red-800">
          {/* Logo */}
          <div className="flex items-center mb-10">
            <img src="/assets2/logowhite.png" alt="Logo" className="mr-3 w-12 h-12" />
            <h1 className="text-xl font-extrabold text-red-500">WiseK9 Security</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link
              href="/admin?section=Dashboard"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/admin?section=Services"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/admin?section=Clients"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Clients
            </Link>
            <Link
              href="/admin?section=Staff"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Staff & Scheduling
            </Link>
            <Link
              href="/admin?section=Quotes"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Quote Requests
            </Link>
            <Link
              href="/admin?section=Analytics"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Usage Analytics
            </Link>
            <Link
              href="/admin?section=Reviews"
              className="flex justify-between items-center py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Reviews <span className="bg-red-600 text-xs px-2 py-1 rounded">12</span>
            </Link>
            <Link
              href="/admin?section=Messages"
              className="flex justify-between items-center py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Messages & Reservations <span className="bg-red-600 text-xs px-2 py-1 rounded">8</span>
            </Link>
            <Link
              href="/admin?section=Reports"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Reports
            </Link>
            <Link
              href="/admin?section=Settings"
              className="block py-2 px-4 rounded-lg transition-all hover:bg-red-700 hover:text-white"
            >
              Settings
            </Link>
          </nav>

          {/* Admin User Info */}
          <div className="mt-12 border-t border-red-800 pt-6">
            <div className="flex items-center">
              <img src="/assets2/02.png" alt="Admin" className="rounded-full mr-3 w-10 h-10 border-2 border-red-600" />
              <div>
                <p className="font-bold text-red-400">Admin User</p>
                <p className="text-sm text-gray-400">Superadmin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}
