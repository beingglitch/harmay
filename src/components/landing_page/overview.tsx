"use client"
import React, { useRef } from 'react';
import { Settings, Target, CheckCircle, MoveRight, CreditCard } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- Data Configuration ---
const featureGridItems = [
  {
    icon: <Settings className="w-6 h-6 text-gray-900" />,
    title: "Accurate quotes in minutes.",
    description: "Get hours back every day with our patented estimating tool. Assemblies configure your blocks of scope with your rules, for rapid re-use."
  },
  {
    icon: <Target className="w-6 h-6 text-gray-900" />,
    title: "Win more of the proposals you send.",
    description: "Educate customers on every part of the project, and let them do their own cost engineering from options and selections that you define."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-gray-900" />,
    title: "Upsells increase your profit on every job.",
    description: "Give your customers pre-defined options, upgrades and selections, so they can continuously re-estimate and upsell all by themselves."
  },
  {
    icon: <MoveRight className="w-6 h-6 text-gray-900" />,
    title: "Seamless project management.",
    description: "Project management flows directly from the estimate in real time. When changes happen, the budget and schedule are also updated."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-gray-900" />,
    title: "Get paid faster and keep cash flowing.",
    description: "Put your cash flow on auto-pilot. Invoices are generated automatically as your work is completed, according to your payment schedule."
  },
];

// --- Reusable 3D Tilt Component ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform mouse position into rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXRelative);
    y.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Wrap in a div with perspective to create the 3D space
    <div className="perspective-1000 h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`h-full transition-all duration-200 ease-out ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="font-sans bg-[#F9F9FB] min-h-screen flex items-center">
      {/* Feature Grid Section */}
      <section className="py-20 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* Optional Header (from previous context) */}
          <div className="text-center mb-16">
             <div className="w-3 h-3 rounded-full bg-[#005CE6] mx-auto mb-6"></div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                The modern way to run a construction company
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <TiltCard className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-gray-100">
              <div className="flex justify-between items-start mb-4 transform translate-z-20">
                <h3 className="text-xl font-bold text-gray-900">{featureGridItems[0].title}</h3>
                {featureGridItems[0].icon}
              </div>
              <p className="text-gray-600 transform translate-z-10">{featureGridItems[0].description}</p>
            </TiltCard>
            
            {/* Middle Graphic Card (Custom S-Curve) */}
            <TiltCard className="bg-white p-8 rounded-xl shadow-sm text-center flex flex-col justify-between hover:shadow-xl border border-transparent hover:border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8 transform translate-z-20">
                From new lead to final payment, a complete end-to-end workflow.
              </h3>
              <div className="relative flex justify-between items-center mb-8 px-4 transform translate-z-30">
                <div className="w-4 h-4 rounded-full bg-[#005CE6] z-10 shadow-md"></div>
                {/* S-Curve SVG approximation */}
                <svg className="absolute inset-0 w-full h-16 pointer-events-none" preserveAspectRatio="none">
                   <path d="M 20 10 H 150 C 200 10 200 60 150 60 H 20" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                </svg>
                <div className="absolute right-4 bottom-[-10px] w-4 h-4 rounded-full bg-[#005CE6] z-10 shadow-md"></div>
              </div>
            </TiltCard>
            
            {/* Cards 2, 3, 4 */}
            {featureGridItems.slice(1, 4).map((item, index) => (
              <TiltCard key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-gray-100">
                <div className="flex justify-between items-start mb-4 transform translate-z-20">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  {item.icon}
                </div>
                <p className="text-gray-600 transform translate-z-10">{item.description}</p>
              </TiltCard>
            ))}

            {/* Last Card (Payment) */}
             <TiltCard className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-gray-100">
                <div className="flex justify-between items-start mb-4 transform translate-z-20">
                  <h3 className="text-xl font-bold text-gray-900">{featureGridItems[4].title}</h3>
                  {featureGridItems[4].icon}
                </div>
                <p className="text-gray-600 transform translate-z-10">{featureGridItems[4].description}</p>
              </TiltCard>

          </div>
        </div>
      </section>
    </div>
  );
};