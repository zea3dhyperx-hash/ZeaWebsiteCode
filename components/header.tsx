"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInModal } from "./sign-in-modal"
import { GetStartedModal } from "./get-started-modal"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaybooksOpen, setIsPlaybooksOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const navLinks = [
    { href: "/features", label: "Features" },
    // { href: "/features-2", label: "Features 2" },
    { href: "/why-us", label: "Why Us" },
    // { href: "/why-us-2", label: "Why Us 2" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-lift">
            {/* <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-400">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div> */}
            {/* <span className="font-bold text-xl text-foreground">ZeaCRM</span> */}
            <Image
              src="/logo.png"
              alt="zeaCRM logo"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-foreground transition-all duration-300 ease-out hover:text-primary group ${
                  isActive(link.href) ? "text-primary font-semibold" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            {/* Industries Dropdown (Desktop) */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Industries
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  // href="/allIndustries/healthcare"
                  href="Industries2/healthcare1/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-t-lg"
                >
                  Healthcare
                </Link>
                <Link
                  // href="/allIndustries/realestate"
                  href="/Industries2/realestate/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Real Estate
                </Link>
                <Link
                  // href="/allIndustries/retail"
                  href="/Industries2/Retail/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Retail & E-commerce
                </Link>
                <Link
                  // href="/allIndustries/professional"
                  href="/Industries/professional/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Professional Services
                </Link>
                <Link
                  // href="/allIndustries/education"
                  href="/Industries/Educationservice/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Education & Training
                </Link>
                <Link
                  // href="/allIndustries/finance"
                  href="/Industries/Finance/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Finance & Insurance
                </Link>
                <Link
                  // href="/allIndustries/automotive"
                  href="/Industries/Automotive/index.html"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Automotive & Manufacturing
                </Link>
                <Link
                  href="/industries#finance"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg border-t border-border"
                >
                  Other Industries
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Playbooks
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {/* <Link
                  href="/blogs"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-t-lg"
                >
                  Blogs
                </Link> */}
                <Link
                  href="/blogs"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  Blogs
                </Link>
                <Link
                  href="/guides"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  Guides
                </Link>
                {/* <Link
                  href="/guides-2"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  Guides
                </Link> */}
                <Link
                  href="/demo"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  Demo
                </Link>
                {/* <Link
                  href="/demo-2"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border rounded-b-lg"
                >
                  Demo 2
                </Link> */}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsSignInOpen(true)}
              className="hover-lift hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Login
            </Button>
            <Button
              onClick={() => setIsGetStartedOpen(true)}
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold hover-lift transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/50"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-slide-down">
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-foreground transition-all duration-300 ${
                      isActive(link.href) ? "text-primary font-semibold" : "hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div>
                  <button
                    onClick={() => setIsPlaybooksOpen(!isPlaybooksOpen)}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors w-full"
                  >
                    Playbooks
                    <ChevronDown size={16} className={`transition-transform ${isPlaybooksOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isPlaybooksOpen && (
                    <div className="flex flex-col gap-2 mt-2 pl-4 border-l border-border">
                      <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">
                        Blogs
                      </Link>
                      {/* <Link href="/blogs-2" className="text-foreground hover:text-primary transition-colors">
                        Blogs 2
                      </Link> */}
                      <Link href="/guides" className="text-foreground hover:text-primary transition-colors">
                        Guides
                      </Link>
                      {/* <Link href="/guides-2" className="text-foreground hover:text-primary transition-colors">
                        Guides 2
                      </Link> */}
                      <Link href="/demo-2" className="text-foreground hover:text-primary transition-colors">
                        Demo
                      </Link>
                      {/* <Link href="/demo" className="text-foreground hover:text-primary transition-colors">
                        Demo 2
                      </Link> */}
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSignInOpen(true)
                    setIsOpen(false)
                  }}
                  className="w-full bg-transparent hover:bg-primary/10"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => {
                    setIsGetStartedOpen(true)
                    setIsOpen(false)
                  }}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
    </>
  )
}
