"use client"
import Link from "next/link"
import Image from "next/image"

export function AnimatedLogo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-16 h-16">
        <Image
          src="/images/novalabs-logo.png"
          alt="NovaLabs AI Logo"
          width={64}
          height={64}
          className="object-contain transition-all duration-300 group-hover:brightness-110"
          priority
        />
      </div>
      <span className="text-2xl font-bold text-[#00334D] transition-colors duration-300 group-hover:text-[#005580]">
        NovaLabs AI
      </span>
    </Link>
  )
}
