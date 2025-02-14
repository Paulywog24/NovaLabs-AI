"use client"
import Image from "next/image"
import { ContactButton } from "../contact-button"

export function HeroSection() {
  return (
    <section id="hero" className="bg-[#00334D] py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white tracking-tight">
              NOVALABS <span className="text-[#9DC45F]">AI</span>
            </h1>
            <p className="text-2xl text-gray-100">PIONEERING AI FOR A BETTER FUTURE</p>
            <div className="flex gap-4">
              <ContactButton className="bg-[#9DC45F] hover:bg-[#8BB54E] text-white px-8" />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D5C80] to-transparent z-10" />
            <Image
              src="/images/novalabs-logo.png"
              alt="NovaLabs AI"
              width={600}
              height={600}
              className="relative z-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
