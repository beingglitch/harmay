'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    ),
    title: 'Instant Credit Approval',
    description:
      'Get credit decisions in under 60 seconds, not days. AI-powered risk assessment enables customers to purchase materials immediately without waiting.',
    metric: '60 sec',
    metricLabel: 'approval time',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    ),
    title: 'Flexible Repayment Plans',
    description:
      'Choose from 30, 60, 90, or 120-day payment cycles. Custom EMI options available based on project timelines and cash flow needs.',
    metric: '120 days',
    metricLabel: 'max tenure',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    ),
    title: 'Real-Time Inventory Tracking',
    description:
      'Monitor stock levels, set low-stock alerts, and get AI-powered reorder suggestions. Never run out of critical materials during projects.',
    metric: 'Live',
    metricLabel: 'updates',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
    ),
    title: 'Bank-Grade Security',
    description:
      'Military-grade encryption, PCI DSS compliance, and multi-factor authentication. Your financial data is protected with enterprise-level security.',
    metric: '256-bit',
    metricLabel: 'encryption',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
    ),
    title: 'Smart Analytics Dashboard',
    description:
      'Track sales trends, credit utilization, customer behavior, and inventory performance. Data-driven insights to grow your business strategically.',
    metric: '20+',
    metricLabel: 'reports',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
    ),
    title: 'Mobile-First Experience',
    description:
      'Manage everything on-the-go with our intuitive mobile apps. Check credit, place orders, track deliveries, and make payments from anywhere.',
    metric: 'iOS + Android',
    metricLabel: 'available',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    ),
    title: 'Multi-Vendor Network',
    description:
      'Access 500+ verified material suppliers across India. One credit line works across all partners for cement, steel, sand, and more.',
    metric: '500+',
    metricLabel: 'suppliers',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    ),
    title: 'Automated Invoicing',
    description:
      'Generate GST-compliant invoices instantly. Automatic payment reminders, digital receipts, and complete transaction history for easy accounting.',
    metric: 'GST Ready',
    metricLabel: 'invoices',
  },
  {
    icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    ),
    title: 'Dedicated Support Team',
    description:
      'Expert support available 24/7 via phone, chat, or WhatsApp. Get help with applications, payments, technical issues, or business guidance anytime.',
    metric: '24/7',
    metricLabel: 'support',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.from('.features-header', {
        scrollTrigger: {
          trigger: '.features-header',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.04,
          ease: 'power3.out',
        });

        // Icon parallax
        const icon = card.querySelector('.feature-icon');
        if (icon) {
          gsap.to(icon, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
            y: -16,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="features-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4"
          >
            ✨ Powerful features
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3">
            Everything you need to{' '}
            <span className="text-primary">scale your business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive tools designed for construction commerce. Instant credit, smart
            inventory management, and data-driven insights—on one platform.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <motion.div
                className="group relative h-full p-6 rounded-md bg-white border border-slate-200/80 overflow-hidden"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.12)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top row: icon + metric */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="feature-icon w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                        <span>{feature.metric}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        {feature.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-px w-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-linear-to-r from-primary to-secondary transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
