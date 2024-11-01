"use client"

import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Scissors, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Footer() {
  const mapInitialized = useRef(false)

  useEffect(() => {
    if (mapInitialized.current) return
    
    if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      const script = document.createElement("script")
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=en_US"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        // @ts-ignore
        ymaps.ready(() => {
          // @ts-ignore
          new ymaps.Map("ymap", {
            center: [40.7128, -74.0060], // New York coordinates
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"]
          })
        })
      }
    }

    mapInitialized.current = true

    return () => {
      mapInitialized.current = false
    }
  }, [])

  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-semibold tracking-tight">StyleCuts</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Premium hair salon providing exceptional styling services in a luxurious and welcoming environment.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Hours</h3>
              <div className="flex items-start gap-3 text-zinc-400">
                <Clock className="h-4 w-4 mt-1" />
                <div className="space-y-1 text-sm">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location & Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@stylecuts.com</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Style Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto w-full h-[300px] rounded-xl overflow-hidden bg-zinc-900">
            <div id="ymap" className="w-full h-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-zinc-200 text-zinc-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-zinc-200 text-zinc-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-zinc-200 text-zinc-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm text-zinc-400">
              © 2024 StyleCuts Studio. All rights reserved.
            </div>

            <div className="flex gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-zinc-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}