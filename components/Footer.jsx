'use client' 
import { useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
        } else {
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Stats counter animation
    const counters = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;

            const updateCounter = () => {
              if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target;
              }
            };

            updateCounter();
            countObserver.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      countObserver.observe(counter);
    });

    // Loading animations
    const handleLoad = () => {
      document.querySelectorAll('.loading').forEach((element, index) => {
        setTimeout(() => {
          element.style.animationDelay = `${index * 0.2}s`;
          element.classList.add('fade-in-up');
        }, index * 100);
      });
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
          <div className="counter">
            <div className="text-4xl font-bold text-red-500" data-count="87">
              0
            </div>
            <div className="text-sm">% UK Coverage</div>
          </div>
          <div className="counter">
            <div className="text-4xl font-bold text-red-500" data-count="24">
              0
            </div>
            <div className="text-sm">Hours Service</div>
          </div>
          <div className="counter">
            <div className="text-4xl font-bold text-red-500" data-count="1000">
              0
            </div>
            <div className="text-sm">+ Clients Protected</div>
          </div>
          <div className="counter">
            <div className="text-4xl font-bold text-red-500" data-count="15">
              0
            </div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-red-500 mb-4">Wise-K9</h3>
            <p className="mb-4">
              SIA-licensed Security Guard Supplier Company to Protect Your Assets
            </p>
            <p className="mb-4 text-sm">
              Serving retail, corporate, construction, healthcare, and public
              sectors with capable, SIA-approved officers.
            </p>
            <div className="text-sm space-y-1">
              <p>Company No. 13043701</p>
              <p>VAT No. 430 2828 22</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                Our Services
              </Link>
              <Link
                href="/careers"
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="block text-white hover:text-red-500 transition-colors duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Website Link */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Explore More</h3>
            <Link
              href="https://wisek9.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore wisek9.co.uk
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © 2024 Wise-K9 Security Services. All rights reserved. | Your Safety,
            Our Mission | Developed by irisxoft.com
          </p>
        </div>
      </div>
    </footer>
  );
}