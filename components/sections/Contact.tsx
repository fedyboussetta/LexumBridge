'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Phone } from 'lucide-react'

/**
 * Contact section
 * Features:
 * - Clear call-to-action
 * - Contact information
 * - Social links (LinkedIn)
 * - Email and phone contact options
 * - Fade-up animation
 */
interface ContactProps {
  language: 'en' | 'fr'
}

const contactContent = {
  en: {
    title: 'Ready to Transform Your Lead Generation?',
    subtitle: 'Let\'s discuss how LEXUM BRIDGE can help you connect with qualified prospects and grow your business.',
    cta: 'Schedule a Consultation',
    email: 'hello@lexumbridge.lu',
    phone: '+352 (0) 123 456 789',
    followUs: 'Follow Us',
  },
  fr: {
    title: 'Prêt à transformer votre génération de leads?',
    subtitle: 'Discutons de la façon dont LEXUM BRIDGE peut vous aider à vous connecter avec des prospects qualifiés et à développer votre entreprise.',
    cta: 'Planifier une consultation',
    email: 'hello@lexumbridge.lu',
    phone: '+352 (0) 123 456 789',
    followUs: 'Nous suivre',
  },
}

export function Contact({ language }: ContactProps) {
  const content = contactContent[language]
  const contactRef = useRef<HTMLDivElement>(null)

  // Fade-up animation
  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.style.opacity = '0'
      contactRef.current.style.transform = 'translateY(20px)'
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (contactRef.current) {
                contactRef.current.style.transition = 'all 0.8s ease-out'
                contactRef.current.style.opacity = '1'
                contactRef.current.style.transform = 'translateY(0)'
              }
            }, 100)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )
      
      observer.observe(contactRef.current)
    }
  }, [])

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div ref={contactRef} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {content.title}
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href="https://meet.brevo.com/lexum-bg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-xl hover:scale-105"
            >
              {content.cta}
            </Button>
          </a>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pt-12 border-t border-slate-700">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600/20 mb-4">
              <Mail className="h-6 w-6 text-emerald-400" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Email</p>
            <a
              href={`mailto:${content.email}`}
              className="text-white font-semibold hover:text-emerald-400 transition-colors"
            >
              {content.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600/20 mb-4">
              <Phone className="h-6 w-6 text-emerald-400" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Phone</p>
            <a
              href={`tel:${content.phone.replace(/\s/g, '')}`}
              className="text-white font-semibold hover:text-emerald-400 transition-colors"
            >
              {content.phone}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <p className="text-slate-400 text-sm mb-4">{content.followUs}</p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
