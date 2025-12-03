'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Scale Your Business 3x Faster',
    description:
      'Take on multiple projects simultaneously without cash flow constraints. Instant credit for customers means more sales, while working capital for inventory keeps your shop fully stocked. Close deals faster and grow revenue exponentially.',
    stat: '3x',
    statLabel: 'Average revenue growth',
    secondaryStat: '₹50L+',
    secondaryLabel: 'Average credit limit',
    image: '📈',
    highlights: ['More concurrent projects', 'Higher customer conversion', 'Faster deal closures'],
  },
  {
    title: 'Eliminate Cash Flow Bottlenecks',
    description:
      'Stop choosing between paying suppliers and meeting payroll. Our flexible 30–120 day payment terms align with your project cycles. Keep cash reserves for emergencies, equipment upgrades, and business expansion opportunities.',
    stat: '45%',
    statLabel: 'Improved cash position',
    secondaryStat: '120 days',
    secondaryLabel: 'Flexible payment terms',
    image: '💰',
    highlights: ['Preserve working capital', 'Predictable cash flow', 'No more payment delays'],
  },
  {
    title: 'Build Unbreakable Supplier Trust',
    description:
      'Become a preferred customer with guaranteed on-time payments. Access better pricing, priority delivery, and exclusive deals. Our automated payment system ensures you never miss a deadline, strengthening your supply chain relationships.',
    stat: '98.5%',
    statLabel: 'On-time payment rate',
    secondaryStat: '500+',
    secondaryLabel: 'Verified suppliers',
    image: '🤝',
    highlights: ['Better pricing power', 'Priority fulfillment', 'Stronger partnerships'],
  },
  {
    title: 'Reduce Operational Complexity',
    description:
      'Replace manual processes with intelligent automation. AI-powered inventory alerts prevent stockouts, automated invoicing saves hours weekly, and real-time dashboards give you complete business visibility. Focus on growth, not admin work.',
    stat: '10hrs',
    statLabel: 'Saved per week',
    secondaryStat: '99.2%',
    secondaryLabel: 'System accuracy',
    image: '⚡',
    highlights: ['Automated operations', 'Smart alerts & insights', 'Zero paperwork'],
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from('.benefits-header', {
        scrollTrigger: {
          trigger: '.benefits-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Animate benefit items
      document.querySelectorAll('.benefit-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Animate CTA card
      gsap.from('.benefits-cta', {
        scrollTrigger: {
          trigger: '.benefits-cta',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background parallax elements – toned down */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-32 right-16 w-72 h-72 bg-primary/7 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-32 left-16 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="benefits-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            🎯 Real Business Impact
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Built for Construction <span className="text-primary">Professionals</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real construction businesses. See how Harmey transforms operations,
            accelerates growth, and maximizes profitability.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-28">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Visual / Emoji panel */}
              <motion.div
                className={index % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-white rounded-md p-10 flex items-center justify-center text-8xl h-80 border border-slate-200 shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <motion.span
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {benefit.image}
                    </motion.span>
                  </motion.div>

                  {/* Subtle floating accents */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 bg-primary/10 rounded-md blur-md"
                    animate={{ y: [0, -8, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-200/40 rounded-xl blur-lg"
                    animate={{ y: [0, 10, 0], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>

              {/* Text / stats */}
              <motion.div
                className={index % 2 === 1 ? 'lg:order-1' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Benefit {index + 1}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-5 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2.5">
                  {benefit.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <svg
                        className="w-4 h-4 text-green-500 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white rounded-sm p-5 border border-slate-200 shadow-sm"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {benefit.statLabel}
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-sm p-5 border border-slate-200 shadow-sm"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">
                      {benefit.secondaryStat}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {benefit.secondaryLabel}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="benefits-cta mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="bg-white rounded-md p-10 sm:p-12 border border-slate-200 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 500+ construction shops already growing with Harmey. Get started in minutes with
              zero setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-7 py-3 bg-primary text-white rounded-sm font-semibold hover:opacity-95 transition-opacity text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="px-7 py-3 bg-white text-slate-800 rounded-sm font-semibold border border-slate-200 hover:border-primary hover:text-primary transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
