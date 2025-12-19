'use client'

import { useEffect, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react'

/**
 * Enhanced Insights/Blog section with professional elements
 * Features:
 * - 3-column grid layout with professional icons
 * - Category badges with distinct colors
 * - Hover shadow increase effect
 * - Professional typography and spacing
 * - Responsive design
 */
interface InsightsProps {
  language: 'en' | 'fr'
}

const insightsContent = {
  en: {
    title: 'Market Insights & Legal Trends',
    subtitle: 'Stay informed with the latest developments in the TCSP ecosystem',
    posts: [
      {
        id: 1,
        icon: Shield,
        title: 'The Future of Luxembourg TCSPs',
        category: 'Compliance',
        categoryColor: 'bg-blue-100 text-blue-700',
        excerpt: 'Exploring emerging regulatory trends and their impact on trusted service providers in Luxembourg.',
        date: 'Dec 18, 2025',
      },
      {
        id: 2,
        icon: Zap,
        title: 'Digital Transformation in Corporate Services',
        category: 'Growth',
        categoryColor: 'bg-emerald-100 text-emerald-700',
        excerpt: 'How technology is reshaping the landscape of corporate service delivery and client expectations.',
        date: 'Dec 15, 2025',
      },
      {
        id: 3,
        icon: TrendingUp,
        title: 'Building Trust in B2B Lead Generation',
        category: 'Strategy',
        categoryColor: 'bg-purple-100 text-purple-700',
        excerpt: 'Best practices for establishing credibility and long-term partnerships in the TCSP market.',
        date: 'Dec 12, 2025',
      },
    ],
  },
  fr: {
    title: 'Actualités du marché et tendances juridiques',
    subtitle: 'Restez informé des derniers développements de l\'écosystème TCSP',
    posts: [
      {
        id: 1,
        icon: Shield,
        title: 'L\'avenir des TCSP luxembourgeois',
        category: 'Conformité',
        categoryColor: 'bg-blue-100 text-blue-700',
        excerpt: 'Exploration des tendances réglementaires émergentes et de leur impact sur les prestataires de services de confiance au Luxembourg.',
        date: '18 déc 2025',
      },
      {
        id: 2,
        icon: Zap,
        title: 'Transformation numérique dans les services aux entreprises',
        category: 'Croissance',
        categoryColor: 'bg-emerald-100 text-emerald-700',
        excerpt: 'Comment la technologie remodèle le paysage de la prestation de services aux entreprises et les attentes des clients.',
        date: '15 déc 2025',
      },
      {
        id: 3,
        icon: TrendingUp,
        title: 'Construire la confiance dans la génération de leads B2B',
        category: 'Stratégie',
        categoryColor: 'bg-purple-100 text-purple-700',
        excerpt: 'Meilleures pratiques pour établir la crédibilité et les partenariats à long terme sur le marché TCSP.',
        date: '12 déc 2025',
      },
    ],
  },
}

export function Insights({ language }: InsightsProps) {
  const content = insightsContent[language]
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Staggered fade-in animation
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                if (card) {
                  card.style.transition = `all 0.6s ease-out ${index * 100}ms`
                  card.style.opacity = '1'
                  card.style.transform = 'translateY(0)'
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
      id="insights"
      className="py-20 sm:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.posts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white group cursor-pointer flex flex-col">
                {/* Icon Header */}
                <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-100 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <post.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <Badge className={`w-fit mb-3 ${post.categoryColor}`}>
                    {post.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
          >
            View All Insights
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
