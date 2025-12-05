"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Square, ArrowUp } from 'lucide-react';
// Assuming you have this set up globally, or import it here if needed:
// import { Space_Grotesk } from 'next/font/google';
// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const appsList = [
  {
    id: 'harmey',
    title: "Harmey",
    description: "The latest and greatest version.",
    // Using a colored Lucide icon as a placeholder for the brand logo
    icon: <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center"><Square className="text-black w-6 h-6 fill-current" /></div>,
    href: "/login/harmey" // Replace with actual link
  },
  {
    id: 'costcertified',
    title: "CostCertified",
    description: "The legacy version of the app.",
    // Using a colored Lucide icon as a placeholder for the brand logo
    icon: <div className="w-10 h-10 bg-teal-500 rounded-md flex items-center justify-center"><ArrowUp className="text-white w-6 h-6" /></div>,
    href: "/login/costcertified" // Replace with actual link
  }
];

export const Login = () => {
  // If importing the font locally, add ${spaceGrotesk.className} to the outer div's classList.
  // Assuming it's applied globally for now based on previous context.
  
  return (
    <div className="min-h-[80vh] w-5/6 flex flex-col lg:flex-row font-sans shadow-2xl">
      {/* Left Section - White */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start p-12 lg:p-24">
        <div className="max-w-md w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome back
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Please select the app you would like to log in to.
          </p>
          
          <div className="text-sm text-gray-500">
            No account yet?{' '}
            <Link href="/demo" className="text-gray-900 font-semibold hover:underline underline-offset-4">
              Book a demo
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Black */}
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center items-center p-4 lg:p-24">
        <div className="max-w-md w-full">
          <div className="space-y-2">
            {appsList.map((app) => (
              <Link 
                key={app.id} 
                href={app.href}
                className="group flex items-center p-6 rounded-xl transition-all duration-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
              >
                {/* Icon container */}
                <div className="mr-6 shrink-0">
                  {app.icon}
                </div>
                
                {/* Text content */}
                <div className="grow">
                  <h3 className="text-xl font-bold mb-1">{app.title}</h3>
                  <p className="text-zinc-400">{app.description}</p>
                </div>
                
                {/* Arrow Icon */}
                <div className="ml-6 text-zinc-500 group-hover:text-white transition-colors duration-200">
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};