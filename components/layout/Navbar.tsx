"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Suites" },
    { href: "/restaurant", label: "Dining" },
    { href: "/spa", label: "Wellness & Spa" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/95 backdrop-blur-xl py-3 border-b border-accent/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      {/* Top micro gold line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">

        {/* ── Brand / Logo ── */}
        <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-[15px] border border-accent/40 bg-black/60 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500">
            <span className="font-cinzel text-accent font-bold text-lg md:text-xl tracking-wider">S</span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl font-medium tracking-[0.2em] uppercase text-white group-hover:text-accent transition-colors duration-300">
              Sunluxe
            </span>
            <span className="font-sans text-[8px] md:text-[9px] font-semibold tracking-[0.4em] uppercase text-accent mt-1">
              Hotel &amp; Suites
            </span>
          </div>
        </Link>

        {/* ── Desktop Menu ── */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300 hover:text-accent transition-colors duration-300 py-1 group/item"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover/item:w-full" />
            </Link>
          ))}
        </div>

        {/* ── Right Actions ── */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors px-2 py-1"
          >
            Sign In
          </Link>

          <Link
            href="/book"
            className="btn-gold-shimmer relative overflow-hidden bg-accent hover:bg-accent-light text-black font-semibold px-6 py-2.5 rounded-[15px] uppercase tracking-[0.2em] text-[11px] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles size={12} className="text-black/80" />
              Book Now
            </span>
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-accent p-2 rounded-[10px] border border-white/10 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#060608]/98 backdrop-blur-2xl border-t border-accent/20 shadow-2xl flex flex-col items-center py-8 space-y-5 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center mb-2">
          <div className="w-12 h-12 rounded-[15px] border border-accent/40 bg-black/60 flex items-center justify-center mb-2">
            <span className="font-cinzel text-accent font-bold text-2xl">S</span>
          </div>
          <span className="font-serif text-lg uppercase tracking-[0.25em] text-white">Sunluxe</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-accent font-semibold">Hotel &amp; Suites</span>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-300 hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <div className="pt-4 flex flex-col items-center gap-3 w-full px-8">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-white"
          >
            Member Sign In
          </Link>

          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-accent text-black font-semibold py-3 rounded-[15px] uppercase tracking-[0.2em] text-xs hover:bg-accent-light transition-all"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </nav>
  );
}