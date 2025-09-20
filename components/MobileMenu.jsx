"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCity,
  FaPhone,
} from "react-icons/fa";

export default function MobileMenu({ isDarkMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // check immediately on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null; // ❌ Don't render on desktop

  return (
    <>
      {/* Floating Book Now Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center z-50">
        <Link
          href="/quote"
          className={`px-6 py-3 text-sm font-bold rounded-full shadow-xl 
            ${isDarkMode ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-yellow-400 text-black hover:bg-yellow-300"} 
            transition transform hover:scale-105`}
        >
          Book Now | Get Quote
        </Link>
      </div>

      {/* 📱 Fixed Bottom Navigation */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-2 px-2
        ${isDarkMode ? "bg-black/90 border-t border-gray-700" : "bg-red-600/95 border-t border-red-700"}
        shadow-[0_-2px_6px_rgba(0,0,0,0.3)]`}
      >
        {[
          { label: "Home", href: "#hero", icon: <FaHome /> },
          { label: "About", href: "/about", icon: <FaInfoCircle /> },
          { label: "Services", href: "#services", icon: <FaShieldAlt /> },
          { label: "Regions", href: "#regions", icon: <FaMapMarkerAlt /> },
          { label: "Cities", href: "#cities", icon: <FaCity /> },
          { label: "Contact", href: "#contact", icon: <FaPhone /> },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex flex-col items-center w-full text-[11px] font-semibold transition-colors 
            ${isDarkMode ? "text-gray-200 hover:text-red-400" : "text-white hover:text-yellow-100"}`}
          >
            <span className="text-lg md:text-xl">{item.icon}</span>
            <span className="mt-0.5">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
}
