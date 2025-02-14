"use client"
import { Mail } from "lucide-react"

interface ContactButtonProps {
  className?: string
  children?: React.ReactNode
}

export function ContactButton({ className = "", children }: ContactButtonProps) {
  const handleContact = () => {
    window.location.href = "mailto:contact@novalabsai.com"
  }

  return (
    <button
      onClick={handleContact}
      className={`flex items-center space-x-2 bg-[#9DC45F] hover:bg-[#8BB54E] text-white px-4 py-2 rounded-lg transition-colors duration-300 ${className}`}
    >
      <Mail className="h-4 w-4" />
      <span>{children || "Contact Us"}</span>
    </button>
  )
}
