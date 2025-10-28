'use client'

import { Section } from '@/components/Section'
import { Card, CardContent } from '@/components/ui/card'
import { content } from '@/lib/content'
import { motion } from 'framer-motion'
import { Building2, GraduationCap, Plane, Truck, Briefcase, Utensils } from 'lucide-react'

const industryIcons: Record<string, any> = {
  Hospitals: Building2,
  Schools: GraduationCap,
  Airports: Plane,
  Logistics: Truck,
  Hotels: Building2,
  Restaurants: Utensils,
}

export default function IndustriesPage() {
  return (
    <div className="pt-24 pb-12">
      <Section
        title={content.industries.title}
        description="Multi-sector demand for instant, safe sterilization"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(content.industries.tiers).map(([tier, items], tierIdx) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6 capitalize text-uv-secondary">
                {tier} Market
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((industry, idx) => {
                  const Icon = industryIcons[industry] || Building2
                  return (
                    <Card key={idx} className="hover:border-uv-secondary/50 transition-all">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <Icon className="text-uv-secondary mb-3" size={32} />
                        <h4 className="font-medium text-uv-text">{industry}</h4>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

