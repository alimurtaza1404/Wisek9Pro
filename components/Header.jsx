'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add shadow effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    }
    console.log('Initial theme loaded at 06:45 PM PKT, Sep 19, 2025:', savedMode ? 'dark' : 'light');
  }, []);

  // Save dark mode preference to localStorage and apply to document
  useEffect(() => {
    console.log('Applying theme at 06:45 PM PKT, Sep 19, 2025:', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* 📌 Top Contact Bar */}
      <section className="bg-black text-white flex justify-between items-center fixed top-0 w-full z-50">
        <div className="w-full flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4 text-sm">
            <a
              href="mailto:info@wisek9.co.uk"
              className={`flex items-center gap-2 ${isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}`}
            >
              <i className="fas fa-envelope" /> info@wisek9.co.uk
            </a>
            <a
              href="tel:03300434152"
              className={`flex items-center gap-2 ${isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}`}
            >
              <i className="fas fa-phone" /> 0330 043 4152
            </a>
            <a
              href="https://wa.me/447415274698"
              target="_blank"
              className={`flex items-center gap-2 ${isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}`}
            >
              <i className="fab fa-whatsapp" /> +44 7415 274698
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className={isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className={isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={isDarkMode ? 'hover:text-red-400' : 'hover:text-red-500'}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 📌 Main Header */}
      <header
        id="header"
        className={`fixed top-10 w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : ''
        } ${isDarkMode ? 'bg-gray-900' : 'bg-black'} ${isDarkMode ? 'text-gray-200' : 'text-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/assets2/logowhite.png"
                width={60}
                height={60}
                alt="WiseK9 Logo"
                className={isDarkMode ? '' : 'invert'} // Invert logo in light mode for visibility
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {[
                { href: '/app', label: 'Home', icon: 'fa-home' },
                { href: '/about', label: 'About Us', icon: 'fa-info-circle' },
                { href: '/services', label: 'Services', icon: 'fa-shield-alt' },
                { href: '/regions', label: 'Regions', icon: 'fa-map-marker-alt' },
                { href: '/cities', label: 'UK Cities', icon: 'fa-city' },
                { href: '/contact', label: 'Contact', icon: 'fa-envelope' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-red-500 flex flex-col items-center group ${
                    isDarkMode ? 'text-gray-200 hover:text-red-400' : 'text-white hover:text-red-500'
                  }`}
                >
                  <i
                    className={`fas ${item.icon} mb-1 group-hover:scale-110 transition-transform ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  ></i>
                  {item.label}
                </Link>
              ))}

              {/* Dropdown Menu */}
              <div className="relative group">
                <button
                  className={`px-3 py-3 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-red-500 flex flex-col items-center ${
                    isDarkMode ? 'text-gray-200 hover:text-red-400' : 'text-white hover:text-red-500'
                  }`}
                >
                  <i className="fas fa-ellipsis-h mb-1"></i>
                  More
                </button>
                <div
                  className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                    isDarkMode ? 'bg-gray-800/95' : 'bg-black/95'
                  }`}
                >
                  <div className="py-2">
                    <Link
                      href="#blogs"
                      className={`block px-4 py-3 ${
                        isDarkMode ? 'text-gray-200 hover:text-red-400 hover:bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="https://wisek9.co.uk/careers"
                      target="_blank"
                      className={`block px-4 py-3 ${
                        isDarkMode ? 'text-gray-200 hover:text-red-400 hover:bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      Careers
                    </Link>
                    <Link
                      href="https://wisek9.co.uk/quote"
                      target="_blank"
                      className={`block px-4 py-3 ${
                        isDarkMode ? 'text-gray-200 hover:text-red-400 hover:bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="https://wisek9.co.uk/training"
                      target="_blank"
                      className={`block px-4 py-3 ${
                        isDarkMode ? 'text-gray-200 hover:text-red-400 hover:bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      Training
                    </Link>
                    <Link
                      href="https://wisek9.co.uk/support"
                      target="_blank"
                      className={`block px-4 py-3 ${
                        isDarkMode ? 'text-gray-200 hover:text-red-400 hover:bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/10'
                      }`}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Burger Menu and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden text-white"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-2 py-1 text-sm font-semibold rounded-full focus:outline-none transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-white-600"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-white-900/90' : 'bg-black/90'} backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6`}>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <i className="fas fa-times"></i>
          </button>

          {[
            { href: '/app', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/regions', label: 'Regions' },
            { href: '/cities', label: 'UK Cities' },
            { href: '#blogs', label: 'Blogs' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-semibold hover:text-red-500 transition-all ${
                isDarkMode ? 'text-gray-200 hover:text-red-400' : 'text-white hover:text-red-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}