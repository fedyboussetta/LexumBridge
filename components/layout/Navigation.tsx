'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

/**
 * Navigation component with sticky positioning and language switcher
 * Features:
 * - Sticky/floating navigation bar
 * - Bilingual support (EN/FR)
 * - Mobile-responsive hamburger menu
 * - Smooth scroll to sections
 * - CTA button linking to Brevo meeting scheduler
 */
interface NavigationProps {
  language: 'en' | 'fr'
  onLanguageChange: (lang: 'en' | 'fr') => void
}

const navContent = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    insights: 'Insights',
    contact: 'Contact',
    cta: 'Book Consultation',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    insights: 'Actualités',
    contact: 'Contact',
    cta: 'Réserver une Consultation',
  },
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const content = navContent[language]

  // Handle smooth scroll to sections
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="LEXUM BRIDGE"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScroll('hero')}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              {content.home}
            </button>
            <button
              onClick={() => handleScroll('authority')}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              {content.about}
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              {content.services}
            </button>
            <button
              onClick={() => handleScroll('insights')}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              {content.insights}
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              {content.contact}
            </button>
          </div>

          {/* Right Side: Language Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded transition-all text-sm font-medium ${
                  language === 'en'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded transition-all text-sm font-medium ${
                  language === 'fr'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FR
              </button>
            </div>

            {/* CTA Button - Emerald Green with white text */}
            <a
              href="https://meet.brevo.com/lexum-bg"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block"
            >
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                {content.cta}
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => handleScroll('hero')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                {content.home}
              </button>
              <button
                onClick={() => handleScroll('authority')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                {content.about}
              </button>
              <button
                onClick={() => handleScroll('services')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                {content.services}
              </button>
              <button
                onClick={() => handleScroll('insights')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                {content.insights}
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                {content.contact}
              </button>

              {/* Mobile Language Switcher */}
              <div className="flex gap-2 px-4 py-2">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'fr'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  FR
                </button>
              </div>

              {/* Mobile CTA */}
              <a
                href="https://meet.brevo.com/lexum-bg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  {content.cta}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
