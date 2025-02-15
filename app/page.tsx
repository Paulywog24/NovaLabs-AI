import * as React from "react"
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/sections/hero-section"

export default function Home() {
  return (
    <React.Suspense>
      <main className="bg-white">
        <Navigation />
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#00334D] mb-8">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  NovaLabs AI is at the forefront of artificial intelligence innovation, developing cutting-edge solutions that address some of humanity's most pressing challenges.
                </p>
                <p className="text-lg text-gray-700">
                  Our team of experts combines deep scientific knowledge with advanced AI capabilities to create transformative technologies.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#00334D] mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To harness the power of artificial intelligence for advancing healthcare, strengthening cybersecurity, and developing sustainable energy solutions that benefit humanity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#00334D] mb-12">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#00334D] mb-4">Healthcare AI</h3>
                <p className="text-gray-700">
                  Developing AI solutions to accelerate drug discovery and improve disease diagnosis.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#00334D] mb-4">Cybersecurity</h3>
                <p className="text-gray-700">
                  Advanced AI-powered security solutions for protecting digital infrastructure.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#00334D] mb-4">Sustainable Energy</h3>
                <p className="text-gray-700">
                  Innovative technology for harnessing atmospheric energy and converting it to electricity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#00334D] mb-8">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Interested in learning more about our solutions or discussing potential collaborations? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Suspense>
  )
}
