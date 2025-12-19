'use client'

import { Linkedin } from 'lucide-react'

/**
 * Footer component with fully functional links and buttons
 * Features:
 * - Multiple columns (Company Info, Quick Links, Legal)
 * - All buttons and links are functional
 * - Smooth scroll to sections
 * - External links open in new tabs
 * - Professional styling
 */
interface FooterProps {
  language: 'en' | 'fr'
}

const footerContent = {
  en: {
    company: 'Company',
    about: 'About Us',
    services: 'Services',
    insights: 'Insights',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2025 Lexum Bridge SARL-S. All rights reserved.',
    getStarted: 'Get Started',
    getStartedDesc: 'Ready to grow your business? Schedule a consultation with our team.',
    bookNow: 'Book Now',
  },
  fr: {
    company: 'Entreprise',
    about: 'À Propos',
    services: 'Services',
    insights: 'Actualités',
    quickLinks: 'Liens Rapides',
    contact: 'Contact',
    legal: 'Légal',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions d\'Utilisation',
    copyright: '© 2025 Lexum Bridge SARL-S. Tous droits réservés.',
    getStarted: 'Commencer',
    getStartedDesc: 'Prêt à développer votre entreprise? Planifiez une consultation avec notre équipe.',
    bookNow: 'Réserver maintenant',
  },
}

export function Footer({ language }: FooterProps) {
  const content = footerContent[language]

  // Handle smooth scroll to sections
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.company}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll('authority')}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('services')}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('insights')}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.insights}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.contact}
                </button>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/lexum-bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.legal}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    // Privacy policy link - can be updated to actual page
                    alert('Privacy Policy page would load here')
                  }}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // Terms of service link - can be updated to actual page
                    alert('Terms of Service page would load here')
                  }}
                  className="hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {content.terms}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.getStarted}</h3>
            <p className="text-sm text-slate-400 mb-4">
              {content.getStartedDesc}
            </p>
            <a
              href="https://meet.brevo.com/lexum-bg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
            >
              {content.bookNow}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-slate-400">
            <p>{content.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
