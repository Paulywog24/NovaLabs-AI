"use client"

import Image from "next/image"
import { ContactButton } from "@/components/client/contact-button"

export function HeroSection() {
return (
  <main id="hero" className="container mx-auto px-4 py-12 relative overflow-hidden">
    <div className="grid md:grid-cols-2 gap-12 items-center relative">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          NOVALABS <span className="text-[#9DC45F]">AI</span>
        </h1>
        <p className="text-2xl text-gray-100">PIONEERING AI FOR A BETTER FUTURE</p>
        <div className="flex gap-4">
          <ContactButton className="bg-[#9DC45F] hover:bg-[#8BB54E] text-white px-8">CONTACT US</ContactButton>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D5C80] to-transparent z-10" />
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="AI Innovation Illustration"
          width={600}
          height={600}
          className="relative z-0"
        />
      </div>
    </div>
  </main>
)
}
