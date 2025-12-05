import React from 'react';
import { ArrowRight, Hammer, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const GetStarted = () => {
  return (
    // Outer Container - Beige background matching the screenshot
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EBE9E1] p-4 font-sans">
      
      {/* Main Card Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden min-h-[600px]">
        
        {/* Left Section - White */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative">
          
          {/* Logo Placeholder */}
          <div className="absolute top-12 left-12">
            <h1 className="text-2xl font-bold tracking-tight text-black">Harmey</h1>
          </div>

          <div className="max-w-md mt-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Get started
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Join the thousands of contractors making more profit. Estimate faster and budget more accurately with Harmey.
            </p>

            <div className="text-sm text-slate-500">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-black underline underline-offset-4 hover:text-slate-700 transition-colors">
                Sign in
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Black */}
        <div className="w-full md:w-1/2 bg-black p-8 md:p-12 flex flex-col justify-center text-white">
          <div className="space-y-6">
            
            {/* Option 1: Contractor Platform */}
            <button className="group w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
              {/* Icon Box */}
              <div className="h-12 w-12 flex-shrink-0 bg-[#D4F754] rounded-lg flex items-center justify-center text-black">
                <Hammer className="h-6 w-6" strokeWidth={2.5} />
              </div>
              
              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-white group-hover:text-[#D4F754] transition-colors">
                  I am a Contractor
                </h3>
                <p className="text-zinc-400 text-sm">
                  Start your free trial. Create accurate quotes and manage jobs.
                </p>
              </div>

              {/* Arrow */}
              <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
            </button>

            <div className="h-px bg-zinc-800 w-full" />

            {/* Option 2: Demo */}
            <button className="group w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
              {/* Icon Box */}
              <div className="h-12 w-12 flex-shrink-0 bg-[#2DD4BF] rounded-lg flex items-center justify-center text-black">
                <CalendarCheck className="h-6 w-6" strokeWidth={2.5} />
              </div>
              
              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-white group-hover:text-[#2DD4BF] transition-colors">
                  Book a Demo
                </h3>
                <p className="text-zinc-400 text-sm">
                  Speak with our team to see how Harmey fits your business.
                </p>
              </div>

              {/* Arrow */}
              <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
            </button>

             <div className="h-px bg-zinc-800 w-full" />

             {/* Option 3: Client Portal (Optional based on context) */}
             <button className="group w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
              {/* Icon Box */}
              <div className="h-12 w-12 flex-shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                <CheckCircle2 className="h-6 w-6" strokeWidth={2.5} />
              </div>
              
              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-white group-hover:text-zinc-300 transition-colors">
                  Client Portal
                </h3>
                <p className="text-zinc-400 text-sm">
                  Approve quotes and view your home project status.
                </p>
              </div>

              {/* Arrow */}
              <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
