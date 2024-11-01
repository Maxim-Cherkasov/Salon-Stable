"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Send } from "lucide-react"

export function Hero() {
  return (
    <div className="container mx-auto px-4 relative max-w-7xl min-h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=2070&q=80')] bg-cover bg-center"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">
          Transform Your Look
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Experience luxury hairstyling at its finest. Our master stylists create bespoke looks tailored to your unique style.
        </p>
      </div>

      {/* Sticky Contact Bar */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full border border-zinc-200/50 dark:border-zinc-800/50 p-1.5 flex gap-1 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-zinc-600 hover:text-emerald-500 hover:bg-white dark:text-zinc-400 dark:hover:text-emerald-400 dark:hover:bg-zinc-800"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-zinc-600 hover:text-sky-500 hover:bg-white dark:text-zinc-400 dark:hover:text-sky-400 dark:hover:bg-zinc-800"
            onClick={() => window.open('https://t.me/yourusername', '_blank')}
          >
            <Send className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-zinc-600 hover:text-violet-500 hover:bg-white dark:text-zinc-400 dark:hover:text-violet-400 dark:hover:bg-zinc-800"
            onClick={() => window.location.href = 'tel:+1234567890'}
          >
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}