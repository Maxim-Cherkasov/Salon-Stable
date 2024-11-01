"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content: "Absolutely amazing experience! The attention to detail and professionalism exceeded my expectations. My hair has never looked better, and the atmosphere was so welcoming.",
    author: "Ray Robertson",
    role: "Regular Client",
    date: "10th Feb, 2023",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "The stylists here are true artists! They took the time to understand exactly what I wanted and delivered results that exceeded my expectations. The salon's ambiance is perfect.",
    author: "Emma Thompson",
    role: "VIP Client",
    date: "15th Feb, 2023",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "I've been to many salons, but this one stands out. The level of expertise and attention to detail is unmatched. They really listen to what you want and deliver beyond expectations.",
    author: "Michael Chen",
    role: "Monthly Client",
    date: "20th Feb, 2023",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5
  },
  {
    id: 4,
    content: "Found my go-to salon! The team here is incredibly skilled and professional. They transformed my hair completely, and I couldn't be happier with the results.",
    author: "Sarah Martinez",
    role: "Regular Client",
    date: "25th Feb, 2023",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5
  }
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-zinc-950 text-zinc-950 dark:fill-zinc-200 dark:text-zinc-200" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-zinc-100 via-zinc-50/50 to-white dark:from-zinc-900 dark:via-zinc-950/50 dark:to-black" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            What our valued clients say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl opacity-75" />
              <Card className="relative p-8 bg-background/80 backdrop-blur-sm border-0">
                <StarRating rating={testimonial.rating} />
                
                <p className="mt-6 mb-8 text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-zinc-200 dark:border-zinc-800">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="h-11 px-8 border-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Reviews"}
          </Button>
        </div>
      </div>
    </section>
  )
}