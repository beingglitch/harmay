import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button path

const categories = [
"Custom homes", "Garages", "Fences", "Roofing", 
"Additional dwelling units", "Decks", "Pools", 
"Home renovations", "Cabinets", "Additions", 
"Painting", "Stucco", "Siding", "Windows and doors", 
"Epoxy", "Flooring", "Textures and finishing", 
"Bathrooms", "Kitchens", "Solar", "Sunrooms", 
"Tile", "Countertops", "Masonry", "Hardscape", 
"Concrete", "Landscaping"
];

const stages = [
"Upstarts – $200k – 500k",
"Stable – $500k – $1m",
"Scale ups – $1m – $5m",
"Growth – $5m – $20m",
"Established – $20m+"
];

export const CTA = () => {

  return (
    <section className="w-full py-20 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-950 mb-6 leading-tight">
          Ideal for builders, renovators, subcontractors and <br className="hidden md:block" /> more
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 mb-10 text-center">
          Thousands of companies just like yours prefer Harmey.
        </p>

        {/* Black Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-5xl">
          {categories.map((item, index) => (
            <span 
              key={index} 
              className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Beige Revenue Stages */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-5xl">
          {stages.map((stage, index) => (
            <span 
              key={index} 
              className="px-6 py-3 bg-[#E6E3D5] text-slate-900 rounded-md text-sm font-medium hover:bg-[#dcd9cb] transition-colors cursor-default"
            >
              {stage}
            </span>
          ))}
        </div>

        {/* Footer CTA Section */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-normal text-slate-900">
            What would you do with more time and more profit?
          </h3>
          
          <Button>
            Get started
          </Button>
        </div>

      </div>
    </section>
  );
};