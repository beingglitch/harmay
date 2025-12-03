'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo } from '@/components/landing_page/Logo';

type UserType = 'seller' | 'buyer' | 'partner';

export default function SignupPage() {
  const [userType, setUserType] = useState<UserType>('seller');

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 via-primary/10 to-secondary/10 flex items-center justify-center p-4 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-linear-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-2xl"
      >
        <div className="bg-white/85 backdrop-blur-md rounded-md shadow-2xl p-8 border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-slate-900">
              Create your Harmey account
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Choose how you&apos;ll use Harmey in your construction business.
            </p>
          </div>

          {/* User type selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
            {[
              {
                type: 'seller' as const,
                label: 'Seller',
                icon: '🏪',
                description: 'Manage inventory & customer.',
              },
              {
                type: 'buyer' as const,
                label: 'Buyer',
                icon: '👷‍♂️',
                description: 'Get instant credit for materials.',
              },
              {
                type: 'partner' as const,
                label: 'Partner',
                icon: '🏦',
                description: 'Lend to verified customers.',
              },
            ].map((option) => {
              const active = userType === option.type;
              return (
                <button
                  key={option.type}
                  type="button"
                  onClick={() => setUserType(option.type)}
                  className={[
                    'p-3 rounded-md border text-left transition-all text-xs',
                    active
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300',
                  ].join(' ')}
                >
                  <div className="text-xl mb-1">{option.icon}</div>
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">
                    {option.label}
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    {option.description}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Signup form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                {userType === 'seller'
                  ? 'Shop name'
                  : userType === 'partner'
                  ? 'Company name'
                  : 'Full name'}
              </label>
              <input
                type="text"
                placeholder={
                  userType === 'seller'
                    ? 'ABC Construction Mart'
                    : userType === 'partner'
                    ? 'ABC Finance Pvt. Ltd.'
                    : 'Enter your name'
                }
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            {userType === 'seller' && (
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  GST number <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="22AAAAA0000A1Z5"
                  className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>
            )}

            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-start text-[11px] gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded-sm border-slate-300 text-primary focus:ring-primary/30 focus:ring-1"
                  required
                />
                <span className="text-slate-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:text-secondary underline-offset-2 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:text-secondary underline-offset-2 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              className="sm:col-span-2 bg-primary hover:bg-secondary text-white py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Create account
            </motion.button>
          </form>

          <div className="mt-5 text-center text-xs text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:text-secondary font-semibold">
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-xs text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
          >
            <span>←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
