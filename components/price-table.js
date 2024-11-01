"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const services = [
  { name: "Women's Haircut", price: "$60", description: "Includes consultation, wash, cut & style" },
  { name: "Men's Haircut", price: "$40", description: "Precision cut with styling" },
  { name: "Color & Highlights", price: "$120", description: "Full color or partial/full highlights" },
  { name: "Blowout & Styling", price: "$45", description: "Professional blow dry & styling" },
  { name: "Hair Treatment", price: "$80", description: "Deep conditioning & repair treatment" },
  { name: "Bridal Styling", price: "$150", description: "Complete bridal hair design" },
]

export function PriceTable() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl" />
      <div className="relative rounded-xl border bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
            Service Menu
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose from our range of professional services
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[300px] font-semibold">Service</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="text-right font-semibold w-[100px]">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.name} className="hover:bg-muted/50">
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell className="text-muted-foreground">{service.description}</TableCell>
                <TableCell className="text-right font-semibold">{service.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}