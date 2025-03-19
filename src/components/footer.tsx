"use client"

import Link from "next/link"
import { Separator } from "./ui/separator"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">FluidLearn</h3>
          <p className="text-sm text-muted-foreground">
            Interactive fluid mechanics learning platform for students and professionals.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Learning Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/basics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Fluid Basics
              </Link>
            </li>
            <li>
              <Link href="/simulations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Interactive Simulations
              </Link>
            </li>
            <li>
              <Link href="/tests" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Knowledge Tests
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Topics</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/basics/fluid-properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Fluid Properties
              </Link>
            </li>
            <li>
              <Link href="/basics/fluid-statics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Fluid Statics
              </Link>
            </li>
            <li>
              <Link href="/basics/fluid-dynamics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Fluid Dynamics
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium text-sm">About</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="container flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FluidLearn. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
