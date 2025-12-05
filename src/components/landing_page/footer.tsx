"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Footer() {
  const [localeOpen, setLocaleOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState('English (United States)');

  const topLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our story', href: '/our-story' },
    { name: 'Academy', href: 'https://learn.harmey.in' },
    { name: 'Blog', href: 'https://blog.harmey.in' },
    { name: 'Contact us', href: '/contact-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/compare' },
    { name: 'Guides', href: '/guides' }
  ];

  const addresses = [
    { lines: ['685 Centre St S, Suite 1901', 'Calgary, AB', 'T2G 2C7', 'Canada'] },
    { lines: ['651 N Broad St, Suite 201', 'Middletown, DE', '19709', 'USA'] }
  ];

  const locales = [
    { name: 'English (United States)', code: 'en-US' },
    { name: 'English (Canada)', code: 'en-CA' }
  ];

  const footerColumns = [
    [
      {
        title: 'Estimate faster',
        links: [
          { name: 'Estimating', href: '/estimates' },
          { name: 'AutoCost', href: '/autocost' },
          { name: 'Takeoff', href: '/takeoff' },
          { name: 'Assemblies & templates', href: '/assemblies' }
        ]
      },
      {
        title: 'Project management',
        links: [
          { name: 'Automated scheduling', href: '/scheduling' },
          { name: 'Material list & budget', href: '/material-list-budget' },
          { name: 'Revisions & change orders', href: '/revisions-change-orders' }
        ]
      },
      {
        title: 'Additional services',
        links: [
          { name: 'Cloud Office Manager (COM)', href: '/cloud-office-manager' },
          { name: 'Integrations', href: '/integrations' }
        ]
      }
    ],
    [
      {
        title: 'Win bigger jobs, more often',
        links: [
          { name: 'Presentations', href: '/presentations' },
          { name: 'Options, upgrades and selections', href: '/upsells' },
          { name: 'Approval management', href: '/approvals' }
        ]
      },
      {
        title: 'Get paid faster',
        links: [
          { name: 'Progress payments', href: '/payments' },
          { name: 'Business accounts', href: '/business-accounts' }
        ]
      },
      {
        title: 'Business tools',
        links: [
          { name: 'CRM Pipeline', href: '/crm-pipeline' },
          { name: 'Team chat', href: '/messages' },
          { name: 'Customer chat', href: '/messages' },
          { name: 'Customer portal', href: '/client-dashboard' }
        ]
      }
    ],
    [
      {
        title: 'Customers',
        links: [
          { name: 'Remodelers & renovators', href: '/remodelers' },
          { name: 'Custom home builders', href: '/custom-home-builders' },
          { name: 'Hardscape contractors', href: '/hardscape-contractors' },
          { name: 'Exterior contractors', href: '/exterior-contractors' },
          { name: 'General contractors', href: '/general-contractors' },
          { name: 'Landscaping', href: '/landscaping' },
          { name: 'Fence contractors', href: '/fencing' },
          { name: 'Deck contractors', href: '/decking' },
          { name: 'Flooring contractors', href: '/flooring' },
          { name: 'Painting contractors', href: '/painting' },
          { name: 'Roofing & siding', href: '/roofing-siding' }
        ]
      }
    ],
    [
      {
        title: 'Learn & grow',
        links: [
          { name: 'Blog', href: 'https://blog.harmey.in', external: true },
          { name: 'Academy', href: 'https://learn.harmey.in', external: true },
          { name: 'Compare', href: '/compare' },
          { name: 'Guides', href: '/guides' }
        ]
      },
      {
        title: 'Connect with us',
        links: [
          { name: 'Reviews', href: '/reviews' },
          { name: 'Success stories', href: '/success-stories' },
          { name: 'Our story', href: '/our-story' },
          { name: 'Contact us', href: '/contact-us' }
        ]
      },
      {
        title: 'Partner with us',
        links: [
          { name: 'Referrals', href: '/referrals' },
          { name: 'Careers', href: '/careers' },
          { name: 'Book a demo', href: '/book-a-demo' }
        ]
      }
    ]
  ];

  const badges = [
    {
      src: 'https://cdn.prod.website-files.com/671027610ae409a9588ed105/671177c0035f5fef95970418_google-play-badge.webp',
      alt: 'Google Play',
      width: 133
    },
    {
      src: 'https://cdn.prod.website-files.com/671027610ae409a9588ed105/671177e180454693c99a5921_app-store-badge.svg',
      alt: 'App Store',
      width: 133
    }
  ];

  const bottomLinks = [
    { name: 'Privacy policy', href: '/privacy-policy' },
    { name: 'Terms & conditions', href: '/terms-and-conditions' },
    { name: 'Complaint handling process', href: '/complaint-handling-process' }
  ];

  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Navigation Links */}
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-8 justify-center md:justify-start text-sm font-medium">
            {topLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Harmey</h2>
            </div>
            
            <div className="mb-8 text-sm space-y-6">
              {addresses.map((address, idx) => (
                <div key={idx}>
                  {address.lines.map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      {lineIdx < address.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>

            {/* Locale Selector */}
            <div className="relative">
              <button
                onClick={() => setLocaleOpen(!localeOpen)}
                className="flex items-center gap-2 text-sm hover:text-gray-900 transition-colors border border-gray-300 px-4 py-2 rounded bg-white w-full justify-between"
              >
                <span>{selectedLocale}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${localeOpen ? 'rotate-180' : ''}`} />
              </button>
              {localeOpen && (
                <div className="absolute bottom-full mb-2 bg-white border border-gray-300 rounded shadow-lg py-2 w-full z-10">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        setSelectedLocale(locale.name);
                        setLocaleOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      {locale.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footerColumns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {column.map((section, secIdx) => (
                <div key={secIdx}>
                  <h3 className="text-gray-900 font-semibold mb-4 text-base">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-2xl font-medium text-gray-900">
              Join the thousands of contractors making more profit with Harmey
            </p>
            <a 
              href="/book-a-demo" 
              className="inline-block bg-primary hover:bg-primary/75 text-gray-900 font-bold px-8 py-3 rounded transition-colors whitespace-nowrap text-lg"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}