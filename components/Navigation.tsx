"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Демо", href: "#demo" },
  { name: "Как это работает", href: "#steps" },
  { name: "Возможности", href: "#features" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[hsl(var(--background))]/80 backdrop-blur-lg border-b border-[hsl(var(--border))]" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[hsl(var(--foreground))] flex items-center justify-center">
                <span className="text-[hsl(var(--background))] font-bold text-lg">L</span>
              </div>
              <span className="font-medium text-lg text-[hsl(var(--foreground))]">
                leaduxAI
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("#demo")}
                className="hidden sm:flex px-5 py-2 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Попробовать бесплатно
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-[hsl(var(--accent))] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[hsl(var(--foreground))]" />
                ) : (
                  <Menu className="w-5 h-5 text-[hsl(var(--foreground))]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 md:hidden">
          <div className="bg-[hsl(var(--background))]/95 backdrop-blur-lg border-b border-[hsl(var(--border))] p-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#demo")}
                className="mt-2 px-4 py-3 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-center"
              >
                Попробовать бесплатно
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
