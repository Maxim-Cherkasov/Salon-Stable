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

      {/* Colorful Brand Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="h-[68px] w-[68px] rounded-full text-[#25D366] hover:text-[#128C7E] transition-colors"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          <MessageSquare className="h-10 w-10" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-[68px] w-[68px] rounded-full text-[#229ED9] hover:text-[#0088cc] transition-colors"
          onClick={() => window.open('https://t.me/yourusername', '_blank')}
        >
          <Send className="h-10 w-10" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-[68px] w-[68px] rounded-full text-[#0088cc] hover:text-[#006699] transition-colors"
          onClick={() => window.location.href = 'tel:+1234567890'}
        >
          <Phone className="h-10 w-10" />
        </Button>
      </div>
    </div>
  )
}