"use client"
import { useState } from "react"
import { LanguageSwitcher } from "./language-switcher"
import { scrollToSection } from "@/lib/scroll-utils"
import { AnimatedLogo } from "./animated-logo"
import { MobileMenu } from "./mobile-menu"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-[#00334D] sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-between">
            <AnimatedLogo />
            <MobileMenu isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-8" role="menubar">
              <button
                onClick={() => handleNavClick("home")}
                className="text-white hover:text-[#9BE564] transition-colors"
                role="menuitem"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="text-white hover:text-[#9BE564] transition-colors"
                role="menuitem"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("solutions")}
                className="text-white hover:text-[#9BE564] transition-colors"
                role="menuitem"
              >
                Solutions
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-white hover:text-[#9BE564] transition-colors"
                role="menuitem"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
