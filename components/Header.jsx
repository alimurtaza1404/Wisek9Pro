"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) setIsDarkMode(savedMode === "dark");
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navItems = [
    { href: "/", label: "Home", icon: "fa-home" },
    { href: "/about", label: "About Us", icon: "fa-info-circle" },
    { href: "/services", label: "Services", icon: "fa-shield-alt" },
    { href: "/regions", label: "Regions", icon: "fa-map-marker-alt" },
    { href: "/cities", label: "UK Cities", icon: "fa-city" },
    { href: "/contact", label: "Contact", icon: "fa-envelope" },
  ];

  const moreItems = [
    { href: "#blogs", label: "Blogs" },
    { href: "https://wisek9.co.uk/careers", label: "Careers" },
    { href: "https://wisek9.co.uk/quote", label: "Get Quote" },
    { href: "https://wisek9.co.uk/training", label: "Training" },
    { href: "https://wisek9.co.uk/support", label: "Support" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <section className="bg-black text-white flex justify-between items-center fixed top-0 w-full z-50">
        <div className="w-full flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4 text-sm">
            <a
              href="mailto:info@wisek9.co.uk"
              className={`flex items-center gap-2 ${
                isDarkMode ? "hover:text-red-400" : "hover:text-red-500"
              }`}
            >
              <i className="fas fa-envelope" />
              {!isMobile && "info@wisek9.co.uk"}
            </a>
            <a
              href="tel:03300434152"
              className={`flex items-center gap-2 ${
                isDarkMode ? "hover:text-red-400" : "hover:text-red-500"
              }`}
            >
              <i className="fas fa-phone" />
              {!isMobile && "0330 043 4152"}
            </a>
            <a
              href="https://wa.me/447415274698"
              target="_blank"
              className={`flex items-center gap-2 ${
                isDarkMode ? "hover:text-red-400" : "hover:text-red-500"
              }`}
            >
              <i className="fab fa-whatsapp" />
              {!isMobile && "+44 7415 274698"}
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className={isDarkMode ? "hover:text-red-400" : "hover:text-red-500"}
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className={isDarkMode ? "hover:text-red-400" : "hover:text-red-500"}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className={isDarkMode ? "hover:text-red-400" : "hover:text-red-500"}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <header
        id="header"
        className={`fixed top-10 w-full z-40 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : ""
        } ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-black text-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={
                  isDarkMode
                    ? "/assets2/logowhite.png"
                    : "/assets2/logowhite.png"
                }
                width={60}
                height={60}
                alt="WiseK9 Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-red-500 flex flex-col items-center group ${
                    isDarkMode
                      ? "text-gray-200 hover:text-red-400"
                      : "text-white hover:text-red-500"
                  }`}
                >
                  <i
                    className={`fas ${item.icon} mb-1 group-hover:scale-110 transition-transform`}
                  />
                  {item.label}
                </Link>
              ))}

              {/* Dropdown More */}
              <div className="relative group">
                <button
                  className={`px-3 py-3 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-red-500 flex flex-col items-center ${
                    isDarkMode
                      ? "text-gray-200 hover:text-red-400"
                      : "text-white hover:text-red-500"
                  }`}
                >
                  <i className="fas fa-ellipsis-h mb-1"></i>
                  More
                </button>
                <div
                  className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                    isDarkMode ? "bg-gray-800/95" : "bg-black/95"
                  }`}
                >
                  <div className="py-2">
                    {moreItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        className={`block px-4 py-3 ${
                          isDarkMode
                            ? "text-gray-200 hover:text-red-400 hover:bg-red-500/10"
                            : "text-white hover:text-red-500 hover:bg-red-500/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Dark Mode Button (always visible) */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-2 py-1 text-sm font-semibold rounded-full focus:outline-none transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-white"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
