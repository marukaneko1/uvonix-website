'use client'

import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { content } from '@/lib/content'

const staggerDelay = 0.1

export function Problem() {
  return (
    <Section
      eyebrow="The Problem"
      title={content.problem.title}
      description={content.problem.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.problem.points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * staggerDelay }}
          >
            <Card className="h-full hover:border-uv-secondary/50 transition-all">
              <CardContent>
                <CardTitle className="mb-3 text-lg">{point.title}</CardTitle>
                <CardDescription className="text-base">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

