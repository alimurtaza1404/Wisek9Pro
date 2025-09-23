'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommitmentSection() {
  const [activeTab, setActiveTab] = useState('commitment');

  const tabs = [
    { id: 'commitment', label: 'Our Commitment' },
    { id: 'policies', label: 'Policies' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
  ];

  return (
    <section
      className="relative text-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets2/customSecurity.jpg')", // 🔴 Your background image path
      }}
    >
      {/* 🔴 Red Blur Overlay */}
      <div className="absolute inset-0 bg-red-900/70 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Tab Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2
                ${
                  activeTab === tab.id
                    ? 'bg-white text-red-700 shadow-red-500/40'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-lg"
                >
                  ➜
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Right: Content with Animation */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeTab === 'commitment' && (
              <motion.div
                key="commitment"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
                <p className="text-gray-200 leading-relaxed">
                  To provide unmatched security that guarantees safety and security
                  to the residence and commercial facilities. We want to leave no
                  stone unturned to make our services reliable and trustworthy.
                  To make it happen, we are ready to go an extra mile because your
                  security is our only priority.
                </p>
              </motion.div>
            )}

            {activeTab === 'policies' && (
              <motion.div
                key="policies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Policies</h2>
                <ul className="space-y-2 text-gray-200">
                  {[
                    ['Corporate & Social Responsibility', '/wp-content/uploads/2024/09/corporative-social-responsibility-1.pdf'],
                    ['Environmental Policy', '/wp-content/uploads/2024/09/environmental-policy.pdf'],
                    ['Equality & Diversity Policy', '/wp-content/uploads/2024/09/EQUAL-OPPORTUNITIES-DIVERSITY-POLICY-2-copy.pdf'],
                    ['Health & Safety General Policy', '/wp-content/uploads/2024/09/Health-and-Safety-General-Policy-copy.pdf'],
                    ['Quality Policy', '/wp-content/uploads/2024/09/Quality-Policy-copy.pdf'],
                    ['Privacy Policy', '/wp-content/uploads/2024/09/Privacy-Policy.pdf'],
                  ].map(([label, href], i) => (
                    <li key={i}>
                      <Link
                        href={href}
                        target="_blank"
                        className="hover:text-yellow-300 flex items-center gap-2 transition-colors"
                      >
                        <span>📄</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Vision</h2>
                <p className="text-gray-200 leading-relaxed">
                  To redefine the concept of security, we aim to enable businesses
                  and residences to feel ultimate protection with us.
                </p>
              </motion.div>
            )}

            {activeTab === 'mission' && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Mission</h2>
                <p className="text-gray-200 leading-relaxed">
                  To find security solutions for all our clients as a leading
                  provider of guards, which enable opportunities of safe and
                  secure businesses.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
