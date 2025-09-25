// app/admin/components/Settings.js
'use client';

import { useState } from 'react';

export default function Settings() {
  // State for Company Profile
  const [companyName, setCompanyName] = useState('WiseK9 Security');
  const [email, setEmail] = useState('info@wisek9.co.uk');
  const [phone, setPhone] = useState('+44 161 555 1234');

  // State for Security Settings
  const [twoFactor, setTwoFactor] = useState(false);
  const [timeout, setTimeoutValue] = useState('30 minutes');

  // State for Appearance
  const [darkMode, setDarkMode] = useState(true);

  const handleSaveCompany = () => {
    alert(`✅ Saved Company Profile:\nName: ${companyName}\nEmail: ${email}\nPhone: ${phone}`);
  };

  const handleAddUser = () => {
    alert('👤 New user modal would open here (to be implemented)');
  };

  const handleSecuritySave = () => {
    alert(`🔐 Security Settings Updated:\n2FA: ${twoFactor ? 'Enabled' : 'Disabled'}\nTimeout: ${timeout}`);
  };

  const handleAppearanceSave = () => {
    alert(`🎨 Appearance Updated:\nDark Mode: ${darkMode ? 'Enabled' : 'Disabled'}`);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-500 mb-6">Settings</h3>

      {/* Company Profile */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-red-600/40 transition">
        <h4 className="text-lg font-semibold mb-4">Company Profile</h4>
        <input
          className="border border-gray-700 bg-gray-800 text-white rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-red-500"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
        <input
          className="border border-gray-700 bg-gray-800 text-white rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contact Email"
        />
        <input
          className="border border-gray-700 bg-gray-800 text-white rounded px-3 py-2 w-full mb-3 focus:ring-2 focus:ring-red-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <button
          onClick={handleSaveCompany}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Save Changes
        </button>
      </div>

      {/* User Management */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-red-600/40 transition">
        <h4 className="text-lg font-semibold mb-4">User Management</h4>
        <p className="mb-2">Admin User — <span className="text-red-400">Superadmin</span></p>
        <button
          onClick={handleAddUser}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Add New User
        </button>
      </div>

      {/* Security Settings */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-red-600/40 transition">
        <h4 className="text-lg font-semibold mb-4">Security Settings</h4>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={twoFactor}
            onChange={(e) => setTwoFactor(e.target.checked)}
            className="mr-2 w-4 h-4 accent-red-600"
          />
          <p>Enable Two-Factor Authentication</p>
        </div>
        <label className="block mb-2">Session Timeout</label>
        <select
          value={timeout}
          onChange={(e) => setTimeoutValue(e.target.value)}
          className="border border-gray-700 bg-gray-800 text-white rounded px-3 py-2 w-full focus:ring-2 focus:ring-red-500"
        >
          <option>30 minutes</option>
          <option>1 hour</option>
          <option>2 hours</option>
          <option>4 hours</option>
        </select>
        <button
          onClick={handleSecuritySave}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Save Security Settings
        </button>
      </div>

      {/* Appearance */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
        <h4 className="text-lg font-semibold mb-4">Appearance</h4>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="mr-2 w-4 h-4 accent-red-600"
          />
          <p>Dark Mode</p>
        </div>
        <button
          onClick={handleAppearanceSave}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Save Appearance
        </button>
      </div>
    </div>
  );
}
