'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Users, Building2, Shield } from 'lucide-react'

/**
 * Enhanced Hero section with card stack shuffle animation
 * Features:
 * - Split layout: Text on left, shuffling card stack on right
 * - Cards shuffle like a deck with staggered positioning
 * - Minimalist background with subtle squares pattern
 * - Clickable indicator dots to navigate cards
 * - Professional animations
 * - Responsive layout
 */
interface HeroProps {
  language: 'en' | 'fr'
}

const heroContent = {
  en: {
    badge: 'Luxembourg-Based TCSP Specialists',
    headline: 'Your Trusted Lead Generation Partner in Luxembourg',
    subheadline: 'Bridging the gap between holding companies and top-tier Service Providers. Founded by Senior Legal Experts.',
    cta: 'Start Your Growth',
    secondary: 'Book a Consultation',
    stat1: 'TCSP Partners',
    stat2: 'Legal Expertise',
    stat3: 'Compliance First',
  },
  fr: {
    badge: 'Spécialistes TCSP basés au Luxembourg',
    headline: 'Votre partenaire de confiance en génération de leads au Luxembourg',
    subheadline: 'Combler le fossé entre les sociétés holding et les prestataires de services de premier ordre. Fondé par des experts juridiques seniors.',
    cta: 'Commencer votre croissance',
    secondary: 'Réserver une consultation',
    stat1: 'Partenaires TCSP',
    stat2: 'Expertise juridique',
    stat3: 'Conformité d\'abord',
  },
}

const serviceCards = [
  {
    icon: Zap,
    title: 'Lead Generation',
    description: 'Qualified prospects delivered to your door',
    benefits: [
      'Compliance-aware outreach',
      'Legal expertise built-in',
      'TCSP ecosystem focused',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance-First Approach',
    description: 'Every lead meets regulatory standards',
    benefits: [
      'Luxembourg corporate law expertise',
      'TCSP regulation compliance',
      'Risk-aware targeting',
    ],
  },
  {
    icon: Users,
    title: 'Director Services',
    description: 'Connect qualified directors with mandates',
    benefits: [
      'High-value mandate matching',
      'Professional vetting process',
      'Compliance verification',
    ],
  },
  {
    icon: Building2,
    title: 'Fiduciaires Solutions',
    description: 'Accounting client acquisition',
    benefits: [
      'High-value client leads',
      'Qualified prospects only',
      'Long-term partnerships',
    ],
  },
]

export function Hero({ language }: HeroProps) {
  const content = heroContent[language]
  const textRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isShuffling, setIsShuffling] = useState(false)

  // Staggered animations on mount
  useEffect(() => {
    // Text animation - slide in from left
    if (textRef.current) {
      textRef.current.style.opacity = '0'
      textRef.current.style.transform = 'translateX(-40px)'
      
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          textRef.current.style.opacity = '1'
          textRef.current.style.transform = 'translateX(0)'
        }
      }, 100)
    }

    // Cards container animation
    if (cardsContainerRef.current) {
      cardsContainerRef.current.style.opacity = '0'
      cardsContainerRef.current.style.transform = 'translateX(40px) scale(0.95)'
      
      setTimeout(() => {
        if (cardsContainerRef.current) {
          cardsContainerRef.current.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          cardsContainerRef.current.style.opacity = '1'
          cardsContainerRef.current.style.transform = 'translateX(0) scale(1)'
        }
      }, 200)
    }
  }, [])

  // Shuffle cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShuffling(true)
      setTimeout(() => {
        setCurrentCardIndex((prev) => (prev + 1) % serviceCards.length)
        setIsShuffling(false)
      }, 400)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Handle dot click to navigate to specific card
  const handleDotClick = (index: number) => {
    setIsShuffling(true)
    setTimeout(() => {
      setCurrentCardIndex(index)
      setIsShuffling(false)
    }, 400)
  }

  const currentCard = serviceCards[currentCardIndex]
  const Icon = currentCard.icon

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      {/* Minimalist background with subtle squares pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle squares grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="squares" x="40" y="40" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="40" height="40" fill="none" stroke="#0A2540" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#squares)" />
          </svg>
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div ref={textRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-600 rounded-full" />
              <span className="text-sm font-medium text-emerald-700">{content.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Your Trusted Lead
              <br />
              <span className="text-emerald-600">Generation Partner</span>
              <br />
              in Luxembourg
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {content.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://meet.brevo.com/lexum-bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-xl hover:scale-105 group"
                >
                  {content.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="https://meet.brevo.com/lexum-bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-all"
                >
                  {content.secondary}
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-sm font-semibold text-slate-900">500+</div>
                <div className="text-xs text-slate-600">{content.stat1}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">10+</div>
                <div className="text-xs text-slate-600">{content.stat2}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">100%</div>
                <div className="text-xs text-slate-600">{content.stat3}</div>
              </div>
            </div>
          </div>

          {/* Right: Card Stack with Shuffle Animation */}
          <div ref={cardsContainerRef} className="relative h-96 lg:h-full min-h-96 flex flex-col items-center justify-center perspective">
            {/* Card Stack Container */}
            <div className="relative w-full max-w-sm h-80">
              {/* Back cards (stacked effect) */}
              {[2, 1].map((offset) => (
                <div
                  key={offset}
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-emerald-200 shadow-lg"
                  style={{
                    transform: `translateY(${offset * 12}px) translateX(${offset * 12}px) scale(${1 - offset * 0.02})`,
                    zIndex: -offset,
                  }}
                />
              ))}

              {/* Front card (animated) */}
              <div
                className={`absolute inset-0 bg-white rounded-2xl border-2 border-emerald-200 p-8 shadow-lg transition-all duration-400 ${
                  isShuffling ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
                }`}
                style={{
                  zIndex: 10,
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 mb-6">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {currentCard.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6">
                  {currentCard.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {currentCard.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicator dots - Clickable and positioned at title level */}
            <div className="flex gap-3 mt-8">
              {serviceCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    index === currentCardIndex
                      ? 'w-8 bg-emerald-600'
                      : 'w-3 bg-emerald-400 hover:bg-emerald-500'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
