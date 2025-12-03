'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo } from '@/components/landing_page/Logo';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: hook into your auth logic
    setTimeout(() => setLoading(false), 800);
  };

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
        className="relative w-full max-w-md"
      >
        <div className="bg-white/85 backdrop-blur-md rounded-md shadow-2xl p-8 border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/">
              <span className="inline-flex items-center gap-2">
                <Logo />
              </span>
            </Link>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-slate-900">Sign in to Harmey</h1>
            <p className="text-xs text-slate-500 mt-1">
              Powering construction commerce with instant credit and smart inventory.
            </p>
          </div>

          {/* Login form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Email or phone
              </label>
              <input
                type="text"
                placeholder="you@example.com / +91-XXXXXXXXXX"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2.5 rounded-sm border border-slate-300 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                required
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded-sm border-slate-300 text-primary focus:ring-primary/30 focus:ring-1"
                />
                <span className="text-slate-600">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-primary hover:text-secondary font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-secondary disabled:opacity-70 disabled:cursor-not-allowed text-white py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-colors"
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.99 }}
            >
              {loading ? 'Signing you in…' : 'Sign in'}
            </motion.button>
          </form>

          <div className="mt-5 text-center text-xs text-slate-600">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-primary hover:text-secondary font-semibold"
            >
              Create one
            </Link>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200">
            <p className="text-[11px] text-center text-slate-500 leading-relaxed">
              By signing in, you agree to Harmey&apos;s{' '}
              <button className="underline-offset-2 hover:underline text-primary">
                Terms of Service
              </button>{' '}
              and{' '}
              <button className="underline-offset-2 hover:underline text-primary">
                Privacy Policy
              </button>
              .
            </p>
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
