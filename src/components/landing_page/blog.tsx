// import React, { useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

// const blogPosts = [
//   {
//     title: "What Falling Mortgage Rates Re...",
//     description: "Discover how falling mortgage rates are reshaping residential...",
//     date: "4 days ago",
//     image: "/api/placeholder/400/250",
//     url: "blog.bolsterbuilt.com"
//   },
//   {
//     title: "How Contractors Stay On Time a...",
//     description: "Discover how construction scheduling software helps...",
//     date: "November 24",
//     image: "/api/placeholder/400/250",
//     url: "blog.bolsterbuilt.com"
//   },
//   {
//     title: "How AutoCost Keeps Your Estim...",
//     description: "Get faster, more accurate construction estimates with live...",
//     date: "November 17",
//     image: "/api/placeholder/400/250",
//     url: "blog.bolsterbuilt.com"
//   },
//   {
//     title: "Builder's Risk vs. General Liabilit...",
//     description: "Learn the difference between Builder's Risk and General Liabilit...",
//     date: "November 11",
//     image: "/api/placeholder/400/250",
//     url: "blog.bolsterbuilt.com"
//   }
// ];

// export default function BlogCarousel() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const totalPages = Math.ceil(blogPosts.length / 4);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth;
//       const newScrollPosition = direction === 'left' 
//         ? container.scrollLeft - scrollAmount 
//         : container.scrollLeft + scrollAmount;
      
//       container.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });

//       // Update page indicator
//       const newPage = direction === 'left'
//         ? Math.max(0, currentPage - 1)
//         : Math.min(totalPages - 1, currentPage + 1);
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//           Build better with the latest insights in residential construction.
//         </h2>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Blog Cards */}
//           <div 
//             ref={scrollContainerRef}
//             className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {blogPosts.map((post, index) => (
//               <div 
//                 key={index}
//                 className="flex-none w-[300px] bg-white rounded-lg shadow-md overflow-hidden snap-start hover:shadow-lg transition-shadow"
//               >
//                 {/* Image */}
//                 <div className="relative h-48 bg-gray-200">
//                   <img 
//                     src={post.image} 
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <div className="space-y-2">
//                     {/* Meta Info */}
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <span className="font-semibold text-gray-900">Bolster Blog</span>
//                       <span>•</span>
//                       <span>{post.date}</span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="font-semibold text-gray-900 line-clamp-2">
//                       {post.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-sm text-gray-600 line-clamp-2">
//                       {post.description}
//                     </p>

//                     {/* URL */}
//                     <a 
//                       href="#" 
//                       className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center gap-1 transition-colors"
//                     >
//                       <span>🔗</span>
//                       <span>{post.url}</span>
//                     </a>
//                   </div>

//                   {/* Share Button */}
//                   <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
//                     <Share2 className="w-4 h-4" />
//                     <span className="text-sm font-medium">Share</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button 
//             onClick={() => scroll('left')}
//             disabled={currentPage === 0}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={() => scroll('right')}
//             disabled={currentPage === totalPages - 1}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center gap-2 mt-8">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setCurrentPage(index);
//                 const container = scrollContainerRef.current;
//                 if (container) {
//                   container.scrollTo({
//                     left: container.offsetWidth * index,
//                     behavior: 'smooth'
//                   });
//                 }
//               }}
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 index === currentPage ? 'bg-gray-900' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }