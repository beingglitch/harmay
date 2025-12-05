"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { LOGO } from "@/assets"
// import { LOGO } from "@/assets"
// import Image from "next/image"

// --- (Data constants kept the same) ---
const productSections = [
  {
    title: "Estimate faster",
    items: [
      { title: "Estimating", href: "/estimates", description: "Create detailed estimates quickly" },
      { title: "AutoCost", href: "/autocost", description: "Automated cost calculations" },
      { title: "Takeoff", href: "/takeoff", description: "Digital takeoff tools" },
      { title: "Assemblies & templates", href: "/assemblies", description: "Pre-built cost assemblies" }
    ]
  },
  {
    title: "Project management",
    items: [
      { title: "Automated scheduling", href: "/scheduling", description: "Smart project scheduling" },
      { title: "Material list & budget", href: "/material-list-budget", description: "Track materials and costs" },
      { title: "Revisions & change orders", href: "/revisions-change-orders", description: "Manage project changes" }
    ]
  },
  {
    title: "Additional services",
    items: [
      { title: "Cloud Office Manager", href: "/cloud-office-manager", description: "Centralized management" },
      { title: "Integrations", href: "/integrations", description: "Connect your tools" }
    ]
  }
]

const customers = [
  { title: "Remodelers & renovators", href: "/remodelers", description: "Solutions for remodeling professionals" },
  { title: "Custom home builders", href: "/custom-home-builders", description: "Tools for custom home projects" },
  { title: "Hardscape contractors", href: "/hardscape-contractors", description: "Manage hardscape projects" },
  { title: "Exterior contractors", href: "/exterior-contractors", description: "Exterior project management" },
  { title: "General contractors", href: "/general-contractors", description: "Complete GC solutions" },
  { title: "Landscaping", href: "/landscaping", description: "Landscaping project tools" },
  { title: "Fence contractors", href: "/fencing", description: "Fencing project management" },
  { title: "Deck contractors", href: "/decking", description: "Decking project solutions" }
]

const resources = [
  { title: "Blog", href: "https://blog.bolsterbuilt.com", description: "Tips and industry insights" },
  { title: "Academy", href: "https://learn.bolsterbuilt.com", description: "Learn construction software" },
  { title: "Compare", href: "/compare", description: "Compare with competitors" },
  { title: "Guides", href: "/guides", description: "Helpful guides and resources" },
  { title: "Success stories", href: "/success-stories", description: "Customer success stories" },
  { title: "Reviews", href: "/reviews", description: "What customers say" }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    product: false,
    customers: false,
    resources: false
  })

  const toggleMobileDropdown = (key: 'product' | 'customers' | 'resources') => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Header styles
  const headerClass = cn(
    "fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent",
    isMobileMenuOpen 
      ? "bg-white border-gray-100" // Solid white when open
      : isScrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-sm" 
        : "bg-black"
  )

  const textClass = (isScrolled || isMobileMenuOpen) ? "text-gray-900" : "text-white"

  return (
    <>
      {/* 1. Header Bar */}
      <header className={headerClass}>
          <div className="mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="shrink-0">
                   {/* <div className={cn(
                    "text-2xl font-bold transition-colors",
                    textClass
                  )}>
                    Harmey
                  </div>  */}
                  <Image src={LOGO} alt="logo" className="w-28 lg:w-32"/>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                  <NavigationMenu>
                  <NavigationMenuList>
                      {/* Product Menu */}
                      <NavigationMenuItem>
                      <NavigationMenuTrigger className={cn(textClass, (isScrolled || isMobileMenuOpen) ? "" : "bg-transparent hover:bg-white/10")}>
                          Product
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <div className="grid gap-3 p-6 w-[700px] md:grid-cols-3">
                          {productSections.map((section) => (
                              <div key={section.title}>
                              <h3 className="mb-2 text-sm font-semibold text-gray-900">{section.title}</h3>
                              <ul className="space-y-1">
                                  {section.items.map((item) => (
                                  <ListItem
                                      key={item.title}
                                      title={item.title}
                                      href={item.href}
                                  >
                                      {item.description}
                                  </ListItem>
                                  ))}
                              </ul>
                              </div>
                          ))}
                          </div>
                      </NavigationMenuContent>
                      </NavigationMenuItem>

                      {/* Customers Menu */}
                      <NavigationMenuItem>
                      <NavigationMenuTrigger className={cn(textClass, (isScrolled || isMobileMenuOpen) ? "" : "bg-transparent hover:bg-white/10")}>
                          Customers
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                          {customers.map((customer) => (
                              <ListItem
                              key={customer.title}
                              title={customer.title}
                              href={customer.href}
                              >
                              {customer.description}
                              </ListItem>
                          ))}
                          </ul>
                      </NavigationMenuContent>
                      </NavigationMenuItem>

                      {/* Resources Menu */}
                      <NavigationMenuItem>
                      <NavigationMenuTrigger className={cn(textClass, (isScrolled || isMobileMenuOpen) ? "" : "bg-transparent hover:bg-white/10")}>
                          Resources
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                          {resources.map((resource) => (
                              <ListItem
                              key={resource.title}
                              title={resource.title}
                              href={resource.href}
                              >
                              {resource.description}
                              </ListItem>
                          ))}
                          </ul>
                      </NavigationMenuContent>
                      </NavigationMenuItem>

                      {/* Pricing Link */}
                      <NavigationMenuItem>
                        <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(),
                        textClass,
                        (isScrolled || isMobileMenuOpen) ? "" : "bg-transparent hover:bg-white/10"
                        )}>
                        Pricing
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                  </NavigationMenuList>
                  </NavigationMenu>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                  <Button 
                  variant="ghost" 
                  className={cn(textClass, (isScrolled || isMobileMenuOpen) ? "" : "hover:bg-white/10")}
                  asChild
                  >
                  <Link href="/login">Sign in</Link>
                  </Button>
                  <Button 
                  className="bg-primary text-gray-900 hover:bg-primary/75"
                  asChild
                  >
                  <Link href="/get-started">Get started</Link>
                  </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={cn("lg:hidden p-2", textClass)}
              >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              </div>
          </div>
      </header>

      {/* 2. Mobile Menu - Moved OUTSIDE the header tag */}
      <div className={cn(
        "fixed inset-0 top-16 z-40 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden",
        isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
      )}>
          <div className="px-4 py-4 space-y-2 min-h-full pb-20">
              {/* Mobile Product Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileDropdown('product')}
                  className="w-full flex items-center justify-between py-2 text-gray-900 font-semibold"
                >
                  Product
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    mobileDropdowns.product && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    mobileDropdowns.product ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden space-y-3 ml-4">
                    {productSections.map((section) => (
                      <div key={section.title}>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{section.title}</div>
                        {section.items.map((item) => (
                          <Link 
                            key={item.title}
                            href={item.href}
                            className="block py-1.5 text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Customers Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileDropdown('customers')}
                  className="w-full flex items-center justify-between py-2 text-gray-900 font-semibold"
                >
                  Customers
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    mobileDropdowns.customers && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    mobileDropdowns.customers ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden space-y-1 ml-4">
                    {customers.map((item) => (
                      <Link 
                        key={item.title}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Resources Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="w-full flex items-center justify-between py-2 text-gray-900 font-semibold"
                >
                  Resources
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    mobileDropdowns.resources && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    mobileDropdowns.resources ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden space-y-1 ml-4">
                    {resources.map((item) => (
                      <Link 
                        key={item.title}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/pricing" 
                className="block py-3 text-gray-900 font-semibold border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-6 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-base"
                  asChild
                >
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button 
                  className="w-full h-12 text-base bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                  asChild
                >
                  <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                    Get started
                  </Link>
                </Button>
              </div>
          </div>
      </div>
    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}