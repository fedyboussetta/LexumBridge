'use client'

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

/**
 * Trust/Testimonials Section with animated cards
 * Features:
 * - Professional testimonials from TCSP partners
 * - Star ratings
 * - Staggered animations
 * - Professional styling
 */
interface TrustSectionProps {
  language: 'en' | 'fr'
}

const trustContent = {
  en: {
    title: 'Trusted by Leading TCSP Firms',
    subtitle: 'See what our partners say about working with LEXUM BRIDGE',
    testimonials: [
      {
        name: 'Jean-Pierre Dubois',
        role: 'Managing Director, Fiduciaire Solutions',
        content: 'LEXUM BRIDGE has transformed our lead generation strategy. The quality of prospects is exceptional, and their compliance-first approach aligns perfectly with our values.',
        rating: 5,
      },
      {
        name: 'Marie Schmit',
        role: 'Director, Corporate Services',
        content: 'Working with LEXUM BRIDGE has been a game-changer. Their legal expertise ensures every lead is qualified and compliant. Highly recommended!',
        rating: 5,
      },
      {
        name: 'Klaus Mueller',
        role: 'CEO, Domiciliation Services',
        content: 'The team at LEXUM BRIDGE understands the TCSP ecosystem like no one else. Their targeted approach has increased our conversion rates significantly.',
        rating: 5,
      },
    ],
  },
  fr: {
    title: 'Approuvé par les cabinets TCSP leaders',
    subtitle: 'Découvrez ce que nos partenaires disent de leur collaboration avec LEXUM BRIDGE',
    testimonials: [
      {
        name: 'Jean-Pierre Dubois',
        role: 'Directeur général, Fiduciaire Solutions',
        content: 'LEXUM BRIDGE a transformé notre stratégie de génération de leads. La qualité des prospects est exceptionnelle, et leur approche axée sur la conformité s&apos;aligne parfaitement avec nos valeurs.',
        rating: 5,
      },
      {
        name: 'Marie Schmit',
        role: 'Directrice, Services aux entreprises',
        content: 'Travailler avec LEXUM BRIDGE a été un tournant. Leur expertise juridique garantit que chaque lead est qualifié et conforme. Hautement recommandé!',
        rating: 5,
      },
      {
        name: 'Klaus Mueller',
        role: 'PDG, Services de domiciliation',
        content: 'L&apos;équipe de LEXUM BRIDGE comprend l&apos;écosystème TCSP comme personne d&apos;autre. Leur approche ciblée a augmenté nos taux de conversion de manière significative.',
        rating: 5,
      },
    ],
  },
}

export function TrustSection({ language }: TrustSectionProps) {
  const content = trustContent[language]
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Staggered fade-in animation
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px) rotateX(10deg)'
        
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (card) {
                  card.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`
                  card.style.opacity = '1'
                  card.style.transform = 'translateY(0) rotateX(0deg)'
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
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-3xl" />
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group"
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-emerald-600 text-emerald-600 group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-slate-200">
                    <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
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
