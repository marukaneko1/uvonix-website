'use client'

import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { content } from '@/lib/content'
import { motion } from 'framer-motion'

export default function TeamPage() {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Our Team"
        description="Experts in biotech, engineering, and clinical validation"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full hover:border-uv-secondary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="aspect-square w-32 h-32 rounded-full bg-gradient-to-br from-uv-primary to-uv-tertiary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-uv-secondary text-center mb-3">
                    {member.role}
                  </p>
                  <CardDescription className="text-center">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

