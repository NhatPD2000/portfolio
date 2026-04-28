"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-[#F7F9FC]/95 backdrop-blur-md border-b border-[#D8E2F0]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-base font-bold text-[#0D1B2E] tracking-wide">PDN</span>
          <span className="text-[10px] text-[#8999BB] tracking-[0.25em] uppercase hidden sm:block">Portfolio</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] text-[#4A5E7A] hover:text-[#0D1B2E] tracking-[0.15em] uppercase transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-xs font-semibold tracking-widest uppercase text-white bg-[#2EC4A8] hover:bg-[#25A890] rounded-md transition-colors duration-200"
          >
            Hire Me
          </a>
          <button className="md:hidden text-[#4A5E7A] p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#F7F9FC] border-b border-[#D8E2F0] px-8 pb-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[11px] text-[#4A5E7A] hover:text-[#0D1B2E] tracking-[0.15em] uppercase border-b border-[#D8E2F0] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
