'use client'

import { useEffect, useRef } from 'react'

/**
 * Hero Animation Component
 * Features:
 * - Animated diagram showing connection between holding companies and TCSPs
 * - Professional, smooth animations
 * - Describes LEXUM BRIDGE's purpose
 * - Responsive design
 */
export function HeroAnimation() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Add animation styles dynamically
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
      }

      @keyframes drawLine {
        from {
          stroke-dashoffset: 300;
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes floatUp {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .hero-left-box {
        animation: slideInLeft 0.8s ease-out;
      }

      .hero-right-box {
        animation: slideInRight 0.8s ease-out;
      }

      .hero-connection-line {
        animation: drawLine 1.5s ease-out 0.5s forwards;
        stroke-dasharray: 300;
      }

      .hero-bridge-icon {
        animation: floatUp 3s ease-in-out infinite;
      }

      .hero-pulse {
        animation: pulse 2s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 600 400"
        className="w-full h-full max-w-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left Box - Holding Companies */}
        <g className="hero-left-box">
          {/* Box background */}
          <rect
            x="20"
            y="80"
            width="140"
            height="160"
            rx="12"
            fill="#F0F9FF"
            stroke="#0A2540"
            strokeWidth="2"
          />

          {/* Icon */}
          <circle cx="90" cy="110" r="20" fill="#10B981" opacity="0.2" />
          <text
            x="90"
            y="120"
            textAnchor="middle"
            fontSize="24"
            fill="#0A2540"
            fontWeight="bold"
          >
            🏢
          </text>

          {/* Title */}
          <text
            x="90"
            y="150"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#0A2540"
          >
            Holding
          </text>
          <text
            x="90"
            y="168"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#0A2540"
          >
            Companies
          </text>

          {/* Description */}
          <text
            x="90"
            y="195"
            textAnchor="middle"
            fontSize="11"
            fill="#64748B"
          >
            Seeking qualified
          </text>
          <text
            x="90"
            y="210"
            textAnchor="middle"
            fontSize="11"
            fill="#64748B"
          >
            service providers
          </text>
        </g>

        {/* Right Box - TCSPs */}
        <g className="hero-right-box">
          {/* Box background */}
          <rect
            x="440"
            y="80"
            width="140"
            height="160"
            rx="12"
            fill="#F0F9FF"
            stroke="#0A2540"
            strokeWidth="2"
          />

          {/* Icon */}
          <circle cx="510" cy="110" r="20" fill="#10B981" opacity="0.2" />
          <text
            x="510"
            y="120"
            textAnchor="middle"
            fontSize="24"
            fill="#0A2540"
            fontWeight="bold"
          >
            🤝
          </text>

          {/* Title */}
          <text
            x="510"
            y="150"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#0A2540"
          >
            TCSPs
          </text>
          <text
            x="510"
            y="168"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#0A2540"
          >
            Service Providers
          </text>

          {/* Description */}
          <text
            x="510"
            y="195"
            textAnchor="middle"
            fontSize="11"
            fill="#64748B"
          >
            Looking for
          </text>
          <text
            x="510"
            y="210"
            textAnchor="middle"
            fontSize="11"
            fill="#64748B"
          >
            qualified clients
          </text>
        </g>

        {/* Connection Line */}
        <line
          x1="160"
          y1="160"
          x2="440"
          y2="160"
          stroke="#10B981"
          strokeWidth="3"
          className="hero-connection-line"
        />

        {/* Arrow heads */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
          </marker>
        </defs>

        {/* Left arrow */}
        <line
          x1="200"
          y1="155"
          x2="240"
          y2="155"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="hero-pulse"
          opacity="0.7"
        />

        {/* Right arrow */}
        <line
          x1="360"
          y1="165"
          x2="400"
          y2="165"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="hero-pulse"
          opacity="0.7"
        />

        {/* Center Bridge Icon */}
        <g className="hero-bridge-icon">
          <circle cx="300" cy="160" r="25" fill="#10B981" opacity="0.1" />
          <circle cx="300" cy="160" r="20" fill="#10B981" opacity="0.2" />
          <text
            x="300"
            y="170"
            textAnchor="middle"
            fontSize="28"
            fill="#10B981"
            fontWeight="bold"
          >
            🌉
          </text>
        </g>

        {/* Bottom Text */}
        <text
          x="300"
          y="290"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#0A2540"
        >
          LEXUM BRIDGE
        </text>
        <text
          x="300"
          y="315"
          textAnchor="middle"
          fontSize="13"
          fill="#64748B"
        >
          Connecting qualified prospects with trusted service providers
        </text>
        <text
          x="300"
          y="335"
          textAnchor="middle"
          fontSize="13"
          fill="#64748B"
        >
          through compliance-aware lead generation
        </text>
      </svg>
    </div>
  )
}
