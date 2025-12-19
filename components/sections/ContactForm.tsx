'use client'

import { useEffect, useRef } from 'react'

/**
 * Contact Form Section with Brevo CRM Integration
 * Features:
 * - Embedded Brevo contact form
 * - Connected to CRM
 * - Responsive design
 * - Professional styling
 * - Fade-up animation on scroll
 */
interface ContactFormProps {
  language: 'en' | 'fr'
}

const contactFormContent = {
  en: {
    title: 'Get in Touch',
    subtitle: 'Fill out the form below and our team will get back to you shortly',
  },
  fr: {
    title: 'Nous Contacter',
    subtitle: 'Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement',
  },
}

export function ContactForm({ language }: ContactFormProps) {
  const content = contactFormContent[language]
  const sectionRef = useRef<HTMLDivElement>(null)

  // Fade-up animation on scroll
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0'
      sectionRef.current.style.transform = 'translateY(30px)'
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (sectionRef.current) {
                sectionRef.current.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                sectionRef.current.style.opacity = '1'
                sectionRef.current.style.transform = 'translateY(0)'
              }
            }, 100)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )
      
      observer.observe(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="contact-form"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Brevo Contact Form Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="305"
              src="https://397d0d2f.sibforms.com/serve/MUIFAMDhFCEN_4JF8Z_ckI1e_C97vEy2tGDUDVjxO9WSr65haOA_0fZgwRVUomMpnymhDTGwlcQbBZUsYZsntmuEuk6B5UXmiVflOoaAyWbG6QSxoW2sbf1dyagOzwM_SnoFnDOQISGPLp7RfGU-gfG_tpk3mbFEzjpy6_Pe1XIssFAHkcqh_sHwV2wo_azEWI-BfYHky2k00DmD8g=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '100%',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            We typically respond within 24 hours. Your information is secure and will only be used to contact you about your inquiry.
          </p>
        </div>
      </div>
    </section>
  )
}
