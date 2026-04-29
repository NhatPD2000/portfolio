"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgress(total > 0 ? (scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — highlight current section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F9FC]/95 dark:bg-[#0D1B2E]/95 backdrop-blur-md border-b border-[#D8E2F0] dark:border-[#2A3B55]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#4F46E5] transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-base font-bold text-[#0D1B2E] dark:text-[#E8EDF8] tracking-wide">Phan Dinh Nhat</span>
          <span className="text-[10px] text-[#8999BB] dark:text-[#6B7E9A] tracking-[0.25em] uppercase hidden sm:block">
            Portfolio
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 font-medium pb-0.5"
                style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {link.label}
                {/* Active underline */}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#4F46E5] rounded-full"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-xs font-semibold tracking-widest uppercase text-white bg-[#4F46E5] hover:bg-[#3730A3] rounded-md transition-colors duration-200"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-[#4A5E7A] dark:text-[#B0BFDA] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#F7F9FC] dark:bg-[#0D1B2E] border-b border-[#D8E2F0] dark:border-[#2A3B55] px-8 pb-5"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-[11px] tracking-[0.15em] uppercase border-b border-[#D8E2F0] dark:border-[#2A3B55] last:border-0 transition-colors duration-200"
                style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {link.label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                )}
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
