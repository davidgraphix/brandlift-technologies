"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-bold text-lg">BrandLift Technologies</span>
            </div>
            <p className="text-gray-400 text-sm">We lift brands with technology.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:08160499031" className="text-gray-400 hover:text-white transition-colors">
                  Call Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/2349117542774" className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto: brandlifttechnologies@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © {currentYear} BrandLift Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
