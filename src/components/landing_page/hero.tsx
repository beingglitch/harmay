import { HERO } from "@/assets";
import Image from "next/image";
import { Input } from "../ui/input";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative bg-black text-white flex flex-col justify-center items-center min-h-dvh p-4 sm:p-7 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full py-16 sm:py-32 lg:py-72 px-4 sm:px-8 lg:px-12 relative w-full max-w-screen-2xl">
                <div className="flex flex-col gap-6 sm:gap-9 justify-end z-10">
                    <h3 className="text-sm sm:text-base lg:text-lg h-fit">Construction Management Software</h3>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium font-['Space_Grotesk',sans-serif]">Harmey helps your construction business make more money</h2>
                    <p className="text-base sm:text-lg">Estimate faster and budget more accurately. Win more jobs with automatically generated presentations, and let your customers make upgrades & selections from the first quote.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Input 
                            type="email" 
                            placeholder="What's your work email?" 
                            className="bg-white text-black flex-1"
                        />
                        <Link href="/get-started" className={`whitespace-nowrap ${buttonVariants({variant: "default"})}`}>Get started</Link>
                    </div>
                </div>

                <div className="relative mt-8 lg:mt-0 h-64 sm:h-96 lg:h-auto">
                    {/* Mobile/Tablet: contained within grid */}
                    <Image 
                        src={HERO} 
                        alt="logo" 
                        className="lg:hidden w-full h-full object-contain"
                    />
                </div>
            </div>
        
            {/* Desktop: absolute positioning at bottom right - outside grid */}
            <div className="hidden lg:block absolute bottom-40 -right-32 overflow-visible pointer-events-none">
                <Image 
                    src={HERO} 
                    alt="logo" 
                    className="w-5xl"
                />
            </div>
        
            <p className="text-xs sm:text-sm text-center mt-8 lg:mt-0 px-4 text-gray-400">Harmey has facilitated billions of dollars worth of projects, and millions of dollars of profit for contractors around the world.</p>
        </div>
    )
}