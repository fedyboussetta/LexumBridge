'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

/**
 * Enhanced CTA Section with professional animations
 * Features:
 * - Eye-catching gradient background
 * - Animated benefits list
 * - Professional typography
 * - Smooth entrance animations
 */
interface CTASectionProps {
  language: 'en' | 'fr'
}

const ctaContent = {
  en: {
    title: 'Ready to Scale Your Lead Generation?',
    subtitle: 'Join leading TCSP firms that trust LEXUM BRIDGE for qualified leads',
    benefits: [
      'Compliance-aware outreach tailored to your needs',
      'Qualified leads from our extensive network',
      'Dedicated support from legal experts',
      'Transparent reporting and analytics',
    ],
    cta: 'Start Your Free Consultation',
  },
  fr: {
    title: 'Prêt à développer votre génération de leads?',
    subtitle: 'Rejoignez les cabinets TCSP leaders qui font confiance à LEXUM BRIDGE pour des leads qualifiés',
    benefits: [
      'Approche de sensibilisation conforme à vos besoins',
      'Leads qualifiés de notre vaste réseau',
      'Support dédié d\'experts juridiques',
      'Rapports et analyses transparents',
    ],
    cta: 'Commencer votre consultation gratuite',
  },
}

export function CTASection({ language }: CTASectionProps) {
  const content = ctaContent[language]
  const sectionRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([])

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

    // Staggered benefits animation
    benefitsRef.current.forEach((benefit, index) => {
      if (benefit) {
        benefit.style.opacity = '0'
        benefit.style.transform = 'translateX(-20px)'
        
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (benefit) {
                  benefit.style.transition = `all 0.6s ease-out ${index * 100}ms`
                  benefit.style.opacity = '1'
                  benefit.style.transform = 'translateX(0)'
                }
              }, 100)
              observer.unobserve(entry.target)
            }
          },
          { threshold: 0.2 }
        )
        
        observer.observe(benefit)
      }
    })
  }, [])

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {content.title}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {content.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {content.benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                benefitsRef.current[index] = el
              }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium group-hover:text-emerald-100 transition-colors">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://meet.brevo.com/lexum-bg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-2xl hover:scale-105 group"
            >
              {content.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
