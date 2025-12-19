'use client'

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Users, Building2, Home, Zap } from 'lucide-react'

/**
 * Enhanced Services Grid section with professional animations
 * Features:
 * - 4-column grid layout (responsive)
 * - Staggered fade-in animation with scale effect
 * - Advanced hover lift effects with shadow and glow
 * - Icon animations on hover
 * - Professional service descriptions
 */
interface ServicesProps {
  language: 'en' | 'fr'
}

const servicesContent = {
  en: {
    title: 'Tailored for the TCSP Ecosystem',
    subtitle: 'Specialized lead generation services designed for trusted service providers',
    services: [
      {
        icon: Users,
        title: 'Director Services',
        description: 'Connecting qualified directors with high-value mandates across Luxembourg and beyond',
      },
      {
        icon: Building2,
        title: 'Fiduciaires',
        description: 'High-value accounting client acquisition for fiduciary and accounting firms',
      },
      {
        icon: Home,
        title: 'Domiciliation',
        description: 'Corporate setup leads and domiciliation services for new and expanding entities',
      },
      {
        icon: Zap,
        title: 'Strategic Outreach',
        description: 'Compliance-aware business development tailored to your specific market segment',
      },
    ],
  },
  fr: {
    title: 'Adapté à l\'écosystème TCSP',
    subtitle: 'Services de génération de leads spécialisés pour les prestataires de services de confiance',
    services: [
      {
        icon: Users,
        title: 'Services de Direction',
        description: 'Connecter les administrateurs qualifiés avec des mandats de haute valeur au Luxembourg et au-delà',
      },
      {
        icon: Building2,
        title: 'Fiduciaires',
        description: 'Acquisition de clients comptables de haute valeur pour les cabinets fiduciaires et comptables',
      },
      {
        icon: Home,
        title: 'Domiciliation',
        description: 'Leads de création d\'entreprise et services de domiciliation pour les entités nouvelles et en expansion',
      },
      {
        icon: Zap,
        title: 'Approche Stratégique',
        description: 'Développement commercial conscient de la conformité adapté à votre segment de marché spécifique',
      },
    ],
  },
}

export function Services({ language }: ServicesProps) {
  const content = servicesContent[language]
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Staggered fade-in animation with scale effect
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px) scale(0.95)'
        
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (card) {
                  card.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`
                  card.style.opacity = '1'
                  card.style.transform = 'translateY(0) scale(1)'
                }
              }, 100)
              observer.unobserve(entry.target)
            }
          },
          { threshold: 0.1 }
        )
        
        observer.observe(card)
      }
    })
  }, [])

  return (
    <section
      id="services"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group"
            >
              <Card className="h-full p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-200 bg-white/80 backdrop-blur-sm cursor-pointer relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 group-hover:bg-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <service.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Border animation on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
