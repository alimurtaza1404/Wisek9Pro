// app/admin/page.js
'use client'; // Required for client-side state and hooks
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Dashboard from '@/app/admin/components/Dashboard';
import Services from '@/app/admin/components/Services';
import Clients from '@/app/admin/components/Clients';
import Staff from '@/app/admin/components/Staff';
import Quotes from '@/app/admin/components/Quotes';
import Analytics from '@/app/admin/components/Analytics';
import Reviews from '@/app/admin/components/Reviews';
import Messages from '@/app/admin/components/Messages';
import Reports from '@/app/admin/components/Reports';
import Settings from '@/app/admin/components/Settings';

export default function AdminDashboard() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('Dashboard');

  // Set initial section from URL query parameter
  useEffect(() => {
    const section = searchParams.get('section');
    if (section && ['Dashboard', 'Services', 'Clients', 'Staff', 'Quotes', 'Analytics', 'Reviews', 'Messages', 'Reports', 'Settings'].includes(section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const sections = {
    Dashboard: <Dashboard />,
    Services: <Services />,
    Clients: <Clients />,
    Staff: <Staff />,
    Quotes: <Quotes />,
    Analytics: <Analytics />,
    Reviews: <Reviews />,
    Messages: <Messages />,
    Reports: <Reports />,
    Settings: <Settings />,
  };

  return (
    <div>
      {/* <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">{activeSection}</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-2 mr-4"
          />
          <img src="/images/user.png" alt="User" className="rounded-full w-8 h-8" />
        </div>
      </header> */}
      {sections[activeSection]}
    </div>
  );
}