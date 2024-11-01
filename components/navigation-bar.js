"use client"

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Scissors } from "lucide-react"
import Link from "next/link"

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#gallery" className="text-lg">Our Works</Link>
                <Link href="#prices" className="text-lg">Prices</Link>
                <Link href="#contact" className="text-lg">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">StyleCuts</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#gallery" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200">Our Works</Link>
          <Link href="#prices" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200">Prices</Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200">Contact</Link>
        </nav>

        <div className="w-[88px]"></div>
      </div>
    </header>
  )
}