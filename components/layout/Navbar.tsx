"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const LOGO_BORDER_RADIUS = "rounded-full"; 
  const LOGO_SIZE_DEFAULT = "h-10 md:h-15 lg:h-17"; 
  const LOGO_SIZE_SCROLLED = "h-10 md:h-12 lg:h-14"; 
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/gallery", label: "Gallery" },
    { href: "/login", label: "Sign In" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md py-2 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4"
      }`}
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className={`overflow-hidden flex-shrink-0 ${LOGO_BORDER_RADIUS} transition-all duration-500`}>
            <Image
              src="https://res.cloudinary.com/duweg8kpv/image/upload/v1774468057/r1-real_m99rxp.png"
              alt="Raysolo Hotel & Suites"
              width={200}
              height={80}
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? LOGO_SIZE_SCROLLED : LOGO_SIZE_DEFAULT
              }`}
              priority
            />
          </div>

          <div className="flex flex-col leading-tight gap-[3px]">
          
            <span
              className={`font-serif font-semibold uppercase tracking-[0.4em] transition-all duration-500 text-white/90 group-hover:text-[#d4af37] ${
                scrolled
                  ? "text-[9px] md:text-[10px]"
                  : "text-[10px] md:text-[11px] lg:text-[12px]"
              }`}
            >
              Raysolo
            </span>

            <span
              className={`font-sans font-light tracking-[0.35em] uppercase text-[#d4af37] transition-all duration-500 ${
                scrolled
                  ? "text-[7px] md:text-[8px]"
                  : "text-[8px] md:text-[9px] lg:text-[10px]"
              }`}
            >
              Hotel &amp; Suites
            </span>
          </div>
        </Link>

        {/* ── Desktop Menu ── */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[8px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#d4af37] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-5 w-px bg-[#d4af37]/40" />

          {/* Book Now CTA */}
          <Link
            href="/book"
            className="relative overflow-hidden border border-[#d4af37] text-[#d4af37] font-bold px-6 lg:px-8 py-2.5 uppercase tracking-[0.2em] text-[10px] lg:text-[11px] transition-all duration-300 hover:text-black group whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Book Now</span>
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#d4af37] transition-colors focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-md flex flex-col items-center py-10 space-y-6 transition-all duration-300 border-t border-[#d4af37]/20 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Mobile Logo + Brand */}
        <div className="flex flex-col items-center gap-2">
          <div className={`overflow-hidden ${LOGO_BORDER_RADIUS}`}>
            <Image
              src="https://res.cloudinary.com/duweg8kpv/image/upload/v1774468057/r1-real_m99rxp.png"
              alt="Raysolo Hotel & Suites"
              width={100}
              height={40}
              className="h-14 w-auto object-contain"
            />
          </div>
          <span className="font-serif font-semibold uppercase tracking-[0.4em] text-white/90 text-[10px]">
            Raysolo
          </span>
          <span className="font-sans font-light tracking-[0.35em] uppercase text-[#d4af37] text-[9px]">
            Hotel &amp; Suites
          </span>
        </div>

        {/* Gold Divider */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Mobile Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold uppercase tracking-[0.3em] text-white/80 hover:text-[#d4af37] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile Book Now */}
        <Link
          href="/book"
          onClick={() => setIsOpen(false)}
          className="mt-2 border border-[#d4af37] text-[#d4af37] font-bold px-10 py-3 uppercase tracking-[0.2em] text-xs hover:bg-[#d4af37] hover:text-black transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}