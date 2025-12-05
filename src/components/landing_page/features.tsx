import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FEATURES_1, FEATURES_2, FEATURES_3 } from '@/assets';

const features = [
  {
    id: 1,
    title: "Let your customers re-estimate themselves",
    description: "Make more profit with optional items, upgrades and selections so your customers can upgrade themselves without an awkward phone call – or any extra work for you.",
    link: "Options, upgrades and selections",
    image: FEATURES_1,
    imageAlt: "Kitchen countertops selection interface"
  },
  {
    id: 2,
    title: "Leave tedious project setup to us",
    description: "Setting up all your jobs is a part-time job in itself – but in Harmey budget and schedule generate automatically from the estimate. It's fully customizable of course – but without any of the up-front repetitive work.",
    link: "Scheduling",
    image: FEATURES_2,
    imageAlt: "Project scheduling and task management interface"
  },
  {
    id: 3,
    title: "Eliminate costly scope creep",
    description: "Revisions and change orders generate automatically when changes are made or requested, and prompt you to get new approvals – preserving your profit on every job.",
    link: "Revisions & change orders",
    image: FEATURES_3,
    imageAlt: "Chat interface showing change order request"
  }
];

const blogPosts = [
  {
    title: "What Falling Mortgage Rates Re...",
    description: "Discover how falling mortgage rates are reshaping residential...",
    date: "4 days ago",
    image: "/api/placeholder/400/250",
    url: "blog.harmey.in"
  },
  {
    title: "How Contractors Stay On Time a...",
    description: "Discover how construction scheduling software helps...",
    date: "November 24",
    image: "/api/placeholder/400/250",
    url: "blog.harmey.in"
  },
  {
    title: "How AutoCost Keeps Your Estim...",
    description: "Get faster, more accurate construction estimates with live...",
    date: "November 17",
    image: "/api/placeholder/400/250",
    url: "blog.harmey.in"
  },
  {
    title: "Builder's Risk vs. General Liabilit...",
    description: "Learn the difference between Builder's Risk and General Liabilit...",
    date: "November 11",
    image: "/api/placeholder/400/250",
    url: "blog.harmey.in"
  }
];

export function Features() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Three ways to Harmey your business
        </h2>
        <p className="text-lg text-gray-600">
          We'll help you in many more ways – but we'll start with three.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Text Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors group"
              >
                <span className="font-medium">{feature.link}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src={feature.image} 
                  alt={feature.imageAlt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-gray-300"></div>
      </div>
    </section>
  );
}