'use client';

import Image from 'next/image';

import { LOGO } from "@/app/assets"


export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col">
        {/* <Image src={LOGO} alt="logo" className='h-12 w-3xs'/> */}
        <h2>Harmey</h2>
        <span className="text-xs text-slate-500 leading-none mt-0.5">Build • Lend • Grow</span>
      </div>
    </div>
  );
}
