"use client"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-600" />
      ) : (
        <Menu className="h-6 w-6 text-gray-600" />
      )}
    </button>
  )
}
