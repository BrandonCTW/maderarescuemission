"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const aboutLinks = [
  { label: "2026 Update", href: "/2026-update" },
  { label: "Doctrine", href: "/doctrine" },
  { label: "Donors", href: "/donors" },
  { label: "Doors of Hope", href: "/doors-of-hope" },
  { label: "Our Story", href: "/our-story" },
  { label: "Partners", href: "/partners" },
  { label: "Staff", href: "/staff" },
];

const supportLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Pray", href: "/pray" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#2E3192" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logos/MRM-logo.png"
              alt="Madera Rescue Mission Logo"
              width={48}
              height={48}
              className="rounded"
            />
            <span className="text-white font-bold text-lg leading-tight hidden sm:block">
              Madera Rescue Mission
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-sans">
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-white hover:text-yellow-200 flex items-center gap-1 py-2">
                About Us
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b z-50">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-white hover:text-yellow-200">Blog</Link>
            <Link href="/gallery" className="text-white hover:text-yellow-200">Gallery</Link>
            <Link href="/services" className="text-white hover:text-yellow-200">Services</Link>

            {/* Support Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSupportOpen(true)}
              onMouseLeave={() => setSupportOpen(false)}
            >
              <button className="text-white hover:text-yellow-200 flex items-center gap-1 py-2">
                Support
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {supportOpen && (
                <div className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-b z-50">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-900 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/visit" className="text-white hover:text-yellow-200">Visit</Link>

            <a
              href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 font-sans">
            <div className="pt-2 border-t border-blue-400">
              <p className="text-blue-200 text-xs uppercase tracking-wider px-2 py-1 mt-2">About Us</p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white px-4 py-2 hover:bg-blue-700 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/blog" className="block text-white px-2 py-2 hover:bg-blue-700" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/gallery" className="block text-white px-2 py-2 hover:bg-blue-700" onClick={() => setMobileOpen(false)}>Gallery</Link>
              <Link href="/services" className="block text-white px-2 py-2 hover:bg-blue-700" onClick={() => setMobileOpen(false)}>Services</Link>
              <p className="text-blue-200 text-xs uppercase tracking-wider px-2 py-1 mt-2">Support</p>
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white px-4 py-2 hover:bg-blue-700 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/visit" className="block text-white px-2 py-2 hover:bg-blue-700" onClick={() => setMobileOpen(false)}>Visit</Link>
              <a
                href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#8B1A1A" }}
                className="block text-white text-center mx-2 mt-3 py-2 rounded font-semibold"
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
