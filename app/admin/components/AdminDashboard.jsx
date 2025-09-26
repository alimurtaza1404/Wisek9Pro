'use client';
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

  useEffect(() => {
    const section = searchParams.get('section');
    if (
      section &&
      [
        'Dashboard',
        'Services',
        'Clients',
        'Staff',
        'Quotes',
        'Analytics',
        'Reviews',
        'Messages',
        'Reports',
        'Settings',
      ].includes(section)
    ) {
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
      {sections[activeSection]}
    </div>
  );
}
