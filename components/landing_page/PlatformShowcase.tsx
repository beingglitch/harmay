'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
      disbursed: '96% Accuracy',
      recovery: '1.2s Speed',
    },
  },
];

function MockupDashboard({ stats = [] }: { stats?: any[] }) {
  return (
    <div className="bg-white rounded-sm p-5 shadow-xl border border-slate-200/60">
      {/* Browser Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold text-slate-700">Shop Dashboard</div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-50/80 rounded-sm p-3 border border-slate-100">
            <div className="text-xs text-slate-500 mb-1.5 font-medium">{stat.label}</div>
            <div className="font-bold text-base text-slate-900 mb-1">{stat.value}</div>
            <div className={`text-xs font-semibold flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change.startsWith('+') ? '↗' : '↘'}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="space-y-2.5">
        <div className="text-xs font-semibold text-slate-700 mb-2">Inventory Levels</div>
        {[
          { width: 85, label: 'Cement', color: 'bg-primary' },
          { width: 60, label: 'Steel', color: 'bg-secondary' },
          { width: 45, label: 'Sand', color: 'bg-primary' },
          { width: 92, label: 'Bricks', color: 'bg-secondary' },
          { width: 70, label: 'Paint', color: 'bg-primary' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-xs text-slate-600 w-12 font-medium">{item.label}</div>
            <div className="flex-1 bg-slate-100 rounded-sm h-2 overflow-hidden">
              <div 
                className={`h-full ${item.color} rounded-sm transition-all duration-500`} 
                style={{ width: `${item.width}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500 w-8 text-right font-medium">{item.width}%</div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center">
            <span className="text-xs">📊</span>
          </div>
          <span className="text-xs text-slate-600">Real-time sync</span>
        </div>
        <div className="text-xs text-slate-400">Last updated: 2m ago</div>
      </div>
    </div>
  );
}

function MockupMobile({ creditLimit = '₹0', available = '₹0' }: { creditLimit?: string; available?: string }) {
  return (
    <div className="w-52 mx-auto bg-slate-900 rounded-[2rem] p-2.5 shadow-2xl">
      <div className="bg-white rounded-[1.5rem] p-4 h-[400px] flex flex-col">
        {/* App Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center text-white text-xs font-bold">H</div>
            <div className="text-xs font-bold text-slate-800">Harmey</div>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
          </div>
        </div>

        {/* Credit Card */}
        <div className="bg-primary rounded-sm p-4 text-white mb-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs opacity-90 font-medium">Your Credit</div>
            <div className="w-6 h-6 rounded-sm bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs">💳</span>
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">{creditLimit}</div>
          <div className="text-xs opacity-90 mb-3">Available: <span className="font-semibold">{available}</span></div>
          
          {/* Progress Bar */}
          <div className="bg-white/20 rounded-sm h-1.5 overflow-hidden backdrop-blur-sm">
            <div className="bg-white h-full rounded-sm" style={{ width: '74%' }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs opacity-75">74% utilized</span>
            <span className="text-xs font-semibold">₹65K left</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-3">
          <div className="text-xs font-semibold text-slate-700 mb-2">Quick Buy</div>
        </div>

        {/* Material List */}
        <div className="flex-1 space-y-2 overflow-hidden">
          {[
            { name: 'Cement - 50kg', price: '₹350', icon: '🏗️' },
            { name: 'Steel TMT Bars', price: '₹65/kg', icon: '⚙️' },
            { name: 'Sand - 1 Ton', price: '₹1,200', icon: '🏖️' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2.5 bg-slate-50 rounded-sm border border-slate-100 hover:border-primary/30 transition-colors">
              <div className="w-9 h-9 bg-secondary/10 rounded-sm flex items-center justify-center text-sm">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-800 truncate">{item.name}</div>
                <div className="text-xs text-slate-500">{item.price}</div>
              </div>
              <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-xs font-bold">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center gap-1.5 mt-3 pt-2 border-t border-slate-100">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
}

function MockupAnalytics({ disbursed = '₹0', recovery = '0%' }: { disbursed?: string; recovery?: string }) {
  return (
    <div className="bg-white rounded-sm p-5 shadow-xl border border-slate-200/60">
      {/* Browser Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold text-slate-700">AI Analytics</div>
          <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center">
            <span className="text-xs">🤖</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-primary/5 rounded-sm p-4 border border-primary/10">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-slate-600 font-medium">Model Accuracy</div>
            <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-primary mb-1">{disbursed}</div>
          <div className="text-xs text-slate-500">+2.3% this week</div>
        </div>
        <div className="bg-secondary/5 rounded-sm p-4 border border-secondary/10">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-slate-600 font-medium">Avg Response</div>
            <div className="w-5 h-5 rounded-sm bg-secondary/10 flex items-center justify-center">
              <span className="text-xs">⚡</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-secondary mb-1">{recovery}</div>
          <div className="text-xs text-slate-500">-0.3s improved</div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-24 mb-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-sm"></div>
        <svg className="w-full h-full relative" viewBox="0 0 200 80" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="200" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="200" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="200" y2="60" stroke="#e2e8f0" strokeWidth="0.5" />
          
          {/* Main line */}
          <path
            d="M0 60 Q 25 50, 50 45 T 100 40 Q 125 38, 150 35 T 200 25"
            fill="none"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Area fill */}
          <path
            d="M0 60 Q 25 50, 50 45 T 100 40 Q 125 38, 150 35 T 200 25 L 200 80 L 0 80 Z"
            fill="currentColor"
            className="text-primary opacity-10"
          />
          
          {/* Data points */}
          {[
            { x: 50, y: 45 },
            { x: 100, y: 40 },
            { x: 150, y: 35 },
            { x: 200, y: 25 },
          ].map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2.5"
              fill="currentColor"
              className="text-primary"
            />
          ))}
        </svg>
      </div>

      {/* AI Insights */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-700 mb-2">Latest Predictions</div>
        {[
          { label: 'Credit Risk Score', value: '92/100', trend: 'up' },
          { label: 'Demand Forecast', value: '+18%', trend: 'up' },
          { label: 'Default Probability', value: '2.3%', trend: 'down' },
        ].map((insight, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded-sm border border-slate-100">
            <span className="text-xs text-slate-600 font-medium">{insight.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-900">{insight.value}</span>
              <span className={`text-xs ${insight.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {insight.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Status */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-slate-600">AI models active</span>
        </div>
        <div className="text-xs text-slate-400">Processing 1.2K requests/min</div>
      </div>
    </div>
  );
}

export default function PlatformShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="platforms" className="py-24 relative overflow-hidden bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="platform-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Three Powerful Platforms
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            One Ecosystem,{' '}
            <span className="text-primary">
              Complete Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seamlessly connecting shop owners and customers with AI-powered intelligence for frictionless construction material commerce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="platform-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white rounded-md p-6 shadow-xl border border-slate-200 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">{platform.title}</h3>
                    <p className="text-sm text-slate-500">{platform.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  {platform.mockup.type === 'dashboard' && <MockupDashboard stats={platform.mockup.stats} />}
                  {platform.mockup.type === 'mobile' && <MockupMobile creditLimit={platform.mockup.creditLimit} available={platform.mockup.available} />}
                  {platform.mockup.type === 'analytics' && <MockupAnalytics disbursed={platform.mockup.disbursed} recovery={platform.mockup.recovery} />}
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-sm font-semibold bg-primary text-white shadow-md hover:shadow-lg transition-shadow`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}