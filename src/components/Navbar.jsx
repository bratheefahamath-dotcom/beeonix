import React, { useState, useEffect } from "react";
import logo from "../assets/img/Logo-1.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu toggle

  // Array of navigation links for clean and reusable rendering
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Company", href: "#company" },
    { label: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#05010a]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand Logo (Visible on all screens) */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="BEEONIX Symbol" className="h-8 md:h-9 w-auto" />
          <span className="font-heading text-lg md:text-xl font-extrabold tracking-widest text-white uppercase select-none">
            BEEONIX
          </span>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile, flex on desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-xs md:text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-brand-gold group"
            >
              {link.label}

              {/* Sliding Underline Animation Element */}
              <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button / Mobile Menu Toggle Action Area */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <button className="hidden lg:block rounded-full bg-brand-gold px-5 py-2 text-xs md:text-sm font-semibold text-[#0a0212] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer">
            Get in touch
          </button>

          {/* Optimized Hamburger to 'X' Transition Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative lg:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:text-brand-gold focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-[18px] flex flex-col justify-between">
              {/* Top Line */}
              <span
                className={`block h-[2.5px] w-full bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
              />
              {/* Middle Line */}
              <span
                className={`block h-[2.5px] w-full bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100"}`}
              />
              {/* Bottom Line */}
              <span
                className={`block h-[2.5px] w-full bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu Overlay with Beautiful Deep Purple Gradients & Glow Orbs */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#08010f]/98 via-[#0d051a]/98 to-[#16002c]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-500 z-40 lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Glow spots inside the mobile menu overlay for depth and consistency */}
        <div className="absolute top-[20%] left-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-brand-purple/20 blur-[90px]" />
        <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[250px] w-[250px] rounded-full bg-brand-blue/15 blur-[80px]" />

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)} // Closes the mobile menu smoothly upon selection
              className="font-heading text-xl md:text-2xl font-bold text-gray-300 hover:text-brand-gold transition-colors duration-300 relative py-1 group"
            >
              {link.label}

              {/* Sliding Underline Effect */}
              <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile CTA Button */}
        <div className="pt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-[#0a0212] transition-all hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}
