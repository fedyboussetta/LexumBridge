import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

/**
 * Metadata configuration for LEXUM BRIDGE website
 * Includes SEO optimization, Open Graph tags for social sharing,
 * and Twitter card configuration for professional presentation
 */
export const metadata: Metadata = {
  title: {
    default: 'LEXUM BRIDGE - Luxembourg Lead Generation for TCSPs',
    template: '%s | LEXUM BRIDGE',
  },
  description: 'Luxembourg\'s premier B2B lead generation partner founded by senior legal experts. Connecting holding companies with trusted service providers (TCSPs) through compliance-aware business development.',
  keywords: ['lead generation', 'Luxembourg', 'TCSP', 'business development', 'legal tech', 'B2B'],
  
  // Open Graph configuration for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lexumbridge.lu',
    siteName: 'LEXUM BRIDGE',
    title: 'LEXUM BRIDGE - Luxembourg Lead Generation for TCSPs',
    description: 'Bridging the gap between corporate structures and service providers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LEXUM BRIDGE - Lead Generation Partner',
      },
    ],
  },
  
  // Twitter Card configuration
  twitter: {
    card: 'summary_large_image',
    title: 'LEXUM BRIDGE - Luxembourg Lead Generation',
    description: 'Founded by senior legal experts to connect holding companies with TCSPs',
    images: ['/og-image.png'],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900`}>
        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LEXUM BRIDGE',
              url: 'https://lexumbridge.lu',
              logo: 'https://lexumbridge.lu/images/logo.png',
              description: 'Luxembourg\'s premier B2B lead generation partner founded by senior legal experts',
              foundingDate: '2024',
              areaServed: 'LU',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Business Development',
                url: 'https://meet.brevo.com/lexum-bg',
              },
            }),
          }}
        />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  )
}
