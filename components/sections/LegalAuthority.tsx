'use client'

import { useEffect, useRef } from 'react'
import { Shield, Briefcase, Award } from 'lucide-react'

/**
 * Legal Authority section - Trust signals
 * Features:
 * - Split screen layout (text left, icons right)
 * - Slide-in animation from left
 * - Highlights founder expertise and legal background
 * - Professional trust indicators
 */
interface LegalAuthorityProps {
  language: 'en' | 'fr'
}

const authorityContent = {
  en: {
    title: 'Founded by Legal Experts, Not Marketers',
    description: 'LEXUM BRIDGE was established by senior legal professionals with over 10 years of experience in Real Estate and Fintech. Our founders understand the complexities of corporate structures, compliance requirements, and the unique needs of Trusted Service Providers.',
    expertise: [
      {
        icon: Shield,
        title: 'Legal Compliance',
        description: 'Deep expertise in Luxembourg corporate law and TCSP regulations',
      },
      {
        icon: Briefcase,
        title: 'Real Estate & Fintech',
        description: '10+ years navigating complex financial and real estate transactions',
      },
      {
        icon: Award,
        title: 'Industry Authority',
        description: 'Recognized leaders in the Luxembourg business services ecosystem',
      },
    ],
  },
  fr: {
    title: 'Fondé par des experts juridiques, pas des marketeurs',
    description: 'LEXUM BRIDGE a été créée par des professionnels juridiques seniors ayant plus de 10 ans d\'expérience dans l\'immobilier et la fintech. Nos fondateurs comprennent les complexités des structures d\'entreprise, les exigences de conformité et les besoins uniques des prestataires de services de confiance.',
    expertise: [
      {
        icon: Shield,
        title: 'Conformité juridique',
        description: 'Expertise approfondie du droit des sociétés luxembourgeois et des réglementations TCSP',
      },
      {
        icon: Briefcase,
        title: 'Immobilier et Fintech',
        description: '10+ ans de navigation dans les transactions financières et immobilières complexes',
      },
      {
        icon: Award,
        title: 'Autorité de l\'industrie',
        description: 'Leaders reconnus dans l\'écosystème des services aux entreprises luxembourgeois',
      },
    ],
  },
}

export function LegalAuthority({ language }: LegalAuthorityProps) {
  const content = authorityContent[language]
  const textRef = useRef<HTMLDivElement>(null)

  // Slide-in animation from left
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.opacity = '0'
      textRef.current.style.transform = 'translateX(-30px)'
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.style.transition = 'all 0.8s ease-out'
                textRef.current.style.opacity = '1'
                textRef.current.style.transform = 'translateX(0)'
              }
            }, 100)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )
      
      observer.observe(textRef.current)
    }
  }, [])

  return (
    <section
      id="authority"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div ref={textRef}>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {content.description}
            </p>
            
            {/* Key points */}
            <div className="space-y-4">
              {content.expertise.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Elements */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl" />
            
            {/* Content */}
            <div className="relative p-8 sm:p-12">
              <div className="space-y-8">
                {/* Stat 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                  <p className="text-slate-600">Years of Legal Expertise</p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                  <p className="text-slate-600">Compliance-Focused Approach</p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">LU</div>
                  <p className="text-slate-600">Deep Luxembourg Market Knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
