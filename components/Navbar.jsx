"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled || pathname !== '/' ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src="/Assets/logo.avif" alt="Siddharya Yoga Ashram Logo" />
          <span>Siddharya</span>
        </Link>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href="/#home" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <div className="dropdown">
            <Link href="/retreats" className="dropbtn" onClick={closeMenu}>
              Yoga & Meditation Retreats <i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown-content">
              <Link href="/retreats#3days" onClick={closeMenu}>3 Days Inner Inquiry Retreat</Link>
              <Link href="/retreats#4days" onClick={closeMenu}>4 Days Finding Balance Retreat</Link>
              <Link href="/retreats#5days" onClick={closeMenu}>5 Days Letting Go Retreat</Link>
              <Link href="/retreats#6days" onClick={closeMenu}>6 Days Deep Awakening Retreat</Link>
              <Link href="/retreats#7days" onClick={closeMenu}>7 Days Inner Healing Retreat</Link>
              <Link href="/retreats#10days" onClick={closeMenu}>10 Days Self-Realization Retreat</Link>
            </div>
          </div>
          <Link href="/#gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
        </div>
        <Link href="/#contact" className="btn-primary nav-btn" onClick={closeMenu}>
          Book Now
        </Link>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
}
