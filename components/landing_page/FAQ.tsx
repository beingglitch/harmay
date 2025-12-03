'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useId, useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I get credit approval?',
    answer:
      'Credit approval happens in under 60 seconds. Our AI-powered system evaluates applications instantly so customers can start purchasing materials immediately after approval. For shops, working capital approval typically takes 2–4 hours with minimal documentation.',
    category: 'Credit & Approval',
  },
  {
    question: 'What are the eligibility requirements?',
    answer:
      'For customers: valid ID, phone number, and basic KYC. For shops: GST registration, at least 6 months of business history, and a bank account. We focus on your business potential—not just credit scores—so many shops with limited credit history have been approved.',
    category: 'Eligibility',
  },
  {
    question: 'What payment terms are available?',
    answer:
      'Flexible EMI options from 30 to 120 days. Choose weekly, bi-weekly, or monthly payments based on your cash flow. There are no prepayment charges—pay early and save on interest. Custom terms are available for larger projects.',
    category: 'Payment Terms',
  },
  {
    question: 'Are there any hidden charges or fees?',
    answer:
      'No hidden fees. All charges are shown upfront with complete transparency. No joining fees, annual fees, or prepayment penalties. You only pay simple interest on the credit you actually use, and processing fees are clearly mentioned before approval.',
    category: 'Fees & Charges',
  },
  {
    question: 'Which materials and suppliers are covered?',
    answer:
      'All key construction materials: cement, steel, sand, bricks, paint, hardware, plumbing, electrical, and more. You get access to a network of 500+ verified suppliers across India. If your preferred supplier is not listed, we can onboard them within 24 hours at zero cost.',
    category: 'Suppliers & Materials',
  },
  {
    question: 'What if my project gets delayed?',
    answer:
      'Construction delays happen. You can request a payment extension directly from your dashboard. Our team reviews and approves extensions based on your situation. There is no penalty for genuine delays—we work with you to keep projects moving.',
    category: 'Project Management',
  },
  {
    question: 'How is this different from a bank loan?',
    answer:
      'No collateral is required, unlike most bank loans. Approvals are instant instead of taking weeks. Credit is flexible and transaction-based—use only what you need instead of taking on a large EMI burden. It is built for construction business cycles and is fully digital, with zero branch visits.',
    category: 'Comparison',
  },
  {
    question: 'Can I manage multiple projects and customers?',
    answer:
      'Yes. You can track unlimited projects and customers on one platform. Each customer can have a separate credit line, with individual dashboards showing project-wise spending, payments, and inventory. Bulk operations are supported to keep admin work low.',
    category: 'Platform Features',
  },
  {
    question: 'How does inventory tracking work?',
    answer:
      'Inventory is updated in real time as purchases are made. You get low-stock alerts via SMS and app notifications, plus AI-powered reorder recommendations based on your usage patterns. Integrations with billing software are available, and the system works offline and syncs when back online.',
    category: 'Inventory Management',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'We use 256-bit bank-grade encryption for all data and PCI DSS–compliant payment processing. Regular security audits and compliance checks are performed. Your data is never shared without your permission, and 2-factor authentication is available for added security.',
    category: 'Security & Privacy',
  },
  {
    question: 'What support is available?',
    answer:
      '24/7 support is available via phone, WhatsApp, and in-app chat. Shops get a dedicated relationship manager, and regional language support is available. We also provide video tutorials and training materials. Average response times are under 5 minutes.',
    category: 'Support',
  },
  {
    question: 'How do I get started?',
    answer:
      'For shops: sign up online, submit basic documents (GST, bank statement, ID), get approved in 2–4 hours, and start offering credit to your customers. For customers: download the app, complete KYC in about 2 minutes, get instant approval, and start shopping. There are zero setup fees.',
    category: 'Getting Started',
  },
];

const categories = ['All', 'Credit & Approval', 'Payment Terms', 'Platform Features', 'Support'];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <motion.div
      className="border-b border-slate-200 last:border-b-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <motion.button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-5 flex justify-between items-start text-left group"
        whileHover={{ x: 2 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        type="button"
      >
        <span className="text-base sm:text-lg font-semibold text-slate-900 pr-6 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <motion.svg
          className="w-5 h-5 text-primary flex-shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              className="pb-5 pt-1"
              initial={{ y: -6 }}
              animate={{ y: 0 }}
              exit={{ y: -6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/8 text-primary text-[11px] font-medium mb-2">
                {faq.category}
              </div>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-24 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-16 right-6 w-80 h-80 bg-primary/7 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4"
          >
            ❓ FAQ
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Harmey. Our support team is always on
            standby—day or night.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2.5 justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:text-primary'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="bg-white rounded-md border border-slate-200/80 p-6 sm:p-8 shadow-md"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          key={selectedCategory}
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          className="mt-12 text-center bg-linear-to-br from-primary/6 to-secondary/6 rounded-md p-8 border border-slate-200/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="text-slate-900 font-semibold text-lg mb-2">
            Still have questions?
          </p>
          <p className="text-sm sm:text-base text-slate-600 mb-6">
            Our team is available 24/7 to help you get started and support your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              className="px-6 py-3 bg-primary text-white rounded-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              type="button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-white text-slate-800 border border-slate-200 rounded-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
