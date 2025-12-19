'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { LegalAuthority } from '@/components/sections/LegalAuthority'
import { Services } from '@/components/sections/Services'
import { Insights } from '@/components/sections/Insights'
import { TrustSection } from '@/components/sections/TrustSection'
import { CTASection } from '@/components/sections/CTASection'
import { ContactForm } from '@/components/sections/ContactForm'
import { Contact } from '@/components/sections/Contact'

/**
 * Main page component for LEXUM BRIDGE website
 * 
 * Features:
 * - Bilingual support (EN/FR) with language state management
 * - All major sections: Hero, Authority, Services, Insights, Trust, CTA, Contact Form, Contact
 * - Sticky navigation with smooth scrolling
 * - Professional animations and transitions
 * - Fully responsive design
 * - SEO optimized with metadata
 */
export default function Home() {
  // Language state management for bilingual UI
  const [language, setLanguage] = useState<'en' | 'fr'>('en')

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar - Sticky */}
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <Hero language={language} />

      {/* Legal Authority Section */}
      <LegalAuthority language={language} />

      {/* Services Grid Section */}
      <Services language={language} />

      {/* Insights/Blog Section */}
      <Insights language={language} />

      {/* Trust/Testimonials Section */}
      <TrustSection language={language} />

      {/* CTA Section */}
      <CTASection language={language} />

      {/* Contact Form Section with Brevo CRM */}
      <ContactForm language={language} />

      {/* Contact Section */}
      <Contact language={language} />

      {/* Footer */}
      <Footer language={language} />
    </main>
  )
}
