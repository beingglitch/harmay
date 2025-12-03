'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    title: 'Harmey Vault',
    subtitle: 'Complete Business Management Suite',
    icon: '🏪',
    color: 'bg-primary',
    features: [
      'Real-time inventory tracking & alerts',
      'Customer credit & payment management',
      'Automated invoice & billing generation',
      'Advanced sales analytics & insights',
    ],
    mockup: {
      type: 'dashboard',
      stats: [
        { label: 'Total Sales', value: '₹12.5L', change: '+23%' },
        { label: 'Active Credits', value: '45', change: '+12%' },
        { label: 'Inventory Value', value: '₹8.2L', change: '-5%' },
      ],
    },
  },
  {
    title: 'Harmey Catalyst',
    subtitle: 'Buy Now, Pay Later for Construction',
    icon: '👤',
    color: 'bg-secondary',
    features: [
      'Instant credit approval in 60 seconds',
      'Browse 10,000+ construction materials',
      'Real-time order & delivery tracking',
      'Flexible EMI & repayment options',
    ],
    mockup: {
      type: 'mobile',
      creditLimit: '₹2,50,000',
      available: '₹1,85,000',
    },
  },
  {
    title: 'Harmey Sentinel',
    subtitle: 'AI-Powered Risk & Intelligence Engine',
    icon: '🤖',
    color: 'bg-accent',
    features: [
      'Automated credit scoring & verification',
      'Real-time fraud detection & alerts',
      'Predictive analytics for defaults',
      'Smart inventory demand forecasting',
    ],
    mockup: {
      type: 'analytics',
      accuracy: '96%',
      responseTime: '1.2s',
    },
  },
];

function MockupDashboard({ stats = [] }: { stats?: any[] }) {
  return (
    <div className="bg-white rounded-md p-5 shadow-md border border-slate-200/70">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-800">Shop Dashboard</span>
          <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((stat, i) => {
          const positive = stat.change.startsWith('+');
          return (
            <div
              key={i}
              className="bg-slate-50/80 rounded-sm p-3 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] text-slate-500 mb-1 font-medium">
                  {stat.label}
                </div>
                <div className="font-semibold text-base text-slate-900">
                  {stat.value}
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px]">
                <div
                  className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 font-semibold ${
                    positive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  <span>{positive ? '↗' : '↘'}</span>
                  <span>{stat.change}</span>
                </div>
                <span className="text-slate-400">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inventory levels */}
      <div>
        <div className="text-xs font-semibold text-slate-700 mb-2">
          Inventory levels
        </div>
        <div className="space-y-2.5">
          {[
            { width: 85, label: 'Cement' },
            { width: 60, label: 'Steel' },
            { width: 45, label: 'Sand' },
            { width: 92, label: 'Bricks' },
            { width: 70, label: 'Paint' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-xs text-slate-600 w-14 font-medium">
                {item.label}
              </div>
              <div className="flex-1 bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-sm transition-all duration-500"
                  style={{ width: `${item.width}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-500 w-10 text-right font-medium">
                {item.width}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center">
            <span className="text-[11px] font-semibold text-primary">RT</span>
          </div>
          <span className="text-xs text-slate-600">Real-time sync enabled</span>
        </div>
        <div className="text-xs text-slate-400">Updated: 2m ago</div>
      </div>
    </div>
  );
}

function MockupMobile({
  creditLimit = '₹0',
  available = '₹0',
}: {
  creditLimit?: string;
  available?: string;
}) {
  return (
    <div className="w-52 mx-auto bg-slate-900 rounded-[1.75rem] p-2.5 shadow-2xl">
      <div className="bg-white rounded-[1.25rem] p-4 h-[380px] flex flex-col border border-slate-100">
        {/* App Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div>
              <div className="text-xs font-semibold text-slate-900">Harmey</div>
              <div className="text-[10px] text-slate-500">Credit & Materials</div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="w-1 h-1 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* Credit Card */}
        <div className="bg-primary rounded-md p-3.5 text-white mb-3 shadow-md">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[11px] opacity-90 font-medium">Available credit</div>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
              Catalyst
            </span>
          </div>
          <div className="text-xl font-semibold mb-0.5">{creditLimit}</div>
          <div className="text-[11px] opacity-90 mb-2">
            Available:{' '}
            <span className="font-semibold text-white">{available}</span>
          </div>

          <div className="bg-white/15 rounded-sm h-1.5 overflow-hidden">
            <div
              className="bg-white h-full rounded-sm"
              style={{ width: '74%' }}
            />
          </div>
          <div className="flex justify-between mt-1.5 text-[10px] opacity-90">
            <span>74% utilized</span>
            <span className="font-semibold">₹65K remaining</span>
          </div>
        </div>

        {/* Quick Buy Header */}
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-semibold text-slate-700">
              Quick buy
            </div>
            <span className="text-[10px] text-slate-400">Today&apos;s picks</span>
          </div>
        </div>

        {/* Material List */}
        <div className="flex-1 space-y-2 overflow-hidden">
          {[
            { name: 'Cement - 50kg', price: '₹350', code: 'CE' },
            { name: 'Steel TMT Bars', price: '₹65/kg', code: 'ST' },
            { name: 'Sand - 1 Ton', price: '₹1,200', code: 'SA' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-sm border border-slate-100 hover:border-primary/40 transition-colors"
            >
              <div className="w-9 h-9 bg-primary/5 rounded-sm flex items-center justify-center">
                <span className="text-[11px] font-semibold text-primary">
                  {item.code}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-900 truncate">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-500">{item.price}</div>
              </div>
              <button className="w-6 h-6 rounded-sm bg-primary text-white flex items-center justify-center text-[11px] font-semibold">
                +
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center gap-1.5 mt-3 pt-2 border-t border-slate-100">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

function MockupAnalytics({
  accuracy = '96%',
  responseTime = '1.2s',
}: {
  accuracy?: string;
  responseTime?: string;
}) {
  return (
    <div className="bg-white rounded-md p-5 shadow-md border border-slate-200/70">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-800">AI Analytics</span>
          <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center">
            <span className="text-[11px] font-semibold text-primary">AI</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-primary/5 rounded-sm p-3 border border-primary/10">
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-[11px] text-slate-600 font-medium">
              Model accuracy
            </div>
            <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary font-medium">
              +2.3% WoW
            </span>
          </div>
          <div className="text-xl font-bold text-primary mb-0.5">
            {accuracy}
          </div>
          <div className="text-[11px] text-slate-500">
            Production models: 12
          </div>
        </div>
        <div className="bg-secondary/5 rounded-sm p-3 border border-secondary/10">
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-[11px] text-slate-600 font-medium">
              Avg response time
            </div>
            <span className="rounded-full bg-secondary/10 px-1.5 py-0.5 text-[10px] text-secondary font-medium">
              -0.3s
            </span>
          </div>
          <div className="text-xl font-bold text-secondary mb-0.5">
            {responseTime}
          </div>
          <div className="text-[11px] text-slate-500">
            99.2% requests &lt; 2s
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-24 mb-4">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent rounded-sm" />
        <svg
          className="w-full h-full relative"
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line x1="0" y1="20" x2="200" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="200" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="200" y2="60" stroke="#e2e8f0" strokeWidth="0.5" />

          {/* Line */}
          <path
            d="M0 60 Q 25 50, 50 45 T 100 40 Q 125 38, 150 35 T 200 25"
            fill="none"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Area */}
          <path
            d="M0 60 Q 25 50, 50 45 T 100 40 Q 125 38, 150 35 T 200 25 L 200 80 L 0 80 Z"
            fill="currentColor"
            className="text-primary opacity-10"
          />

          {/* Points */}
          {[{ x: 50, y: 45 }, { x: 100, y: 40 }, { x: 150, y: 35 }, { x: 200, y: 25 }].map(
            (point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="2.5"
                fill="currentColor"
                className="text-primary"
              />
            )
          )}
        </svg>
      </div>

      {/* AI Insights */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-700 mb-1.5">
          Latest predictions
        </div>
        {[
          { label: 'Credit risk score', value: '92 / 100', trend: 'up' },
          { label: 'Demand forecast', value: '+18%', trend: 'up' },
          { label: 'Default probability', value: '2.3%', trend: 'down' },
        ].map((insight, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-2.5 py-2 bg-slate-50 rounded-sm border border-slate-100"
          >
            <span className="text-[11px] text-slate-600 font-medium">
              {insight.label}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-900">
                {insight.value}
              </span>
              <span
                className={`text-[11px] ${
                  insight.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {insight.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Status */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-slate-600">Models active</span>
        </div>
        <div className="text-xs text-slate-400">1.2K requests / min</div>
      </div>
    </div>
  );
}

export default function PlatformShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="platforms"
      className="py-24 relative overflow-hidden bg-linear-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="platform-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4"
          >
            Three powerful platforms
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
            One ecosystem,{' '}
            <span className="text-primary">complete solution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Seamlessly connecting shop owners and customers with AI-powered intelligence
            for frictionless construction material commerce.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              className="platform-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-white rounded-md p-6 shadow-xl border border-slate-200 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-lg">
                    <span className="text-base">{platform.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      {platform.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {platform.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mb-5">
                  {platform.mockup.type === 'dashboard' && (
                    <MockupDashboard stats={platform.mockup.stats} />
                  )}
                  {platform.mockup.type === 'mobile' && (
                    <MockupMobile
                      creditLimit={platform.mockup.creditLimit}
                      available={platform.mockup.available}
                    />
                  )}
                  {platform.mockup.type === 'analytics' && (
                    <MockupAnalytics
                      accuracy={platform.mockup.accuracy}
                      responseTime={platform.mockup.responseTime}
                    />
                  )}
                </div>

                <div className="space-y-2.5 mb-5 flex-1">
                  {platform.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-slate-600"
                    >
                      <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/10 text-[10px] text-primary">
                        ✓
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full py-2.5 rounded-sm font-semibold bg-primary text-white text-sm shadow-md hover:bg-secondary hover:shadow-lg transition-colors transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
