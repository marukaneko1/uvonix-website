'use client'

import { Section } from '@/components/Section'
import { motion } from 'framer-motion'
import { content } from '@/lib/content'
import { CheckCircle } from 'lucide-react'

export function Technology() {
  return (
    <Section
      eyebrow="Our Technology"
      title={content.technology.title}
      description={content.technology.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-4">
            {content.technology.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3 text-lg"
              >
                <CheckCircle className="text-uv-secondary flex-shrink-0 mt-1" size={24} />
                <span className="text-uv-text/90">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-uv-surface rounded-xl p-8 aspect-square flex items-center justify-center uv-glow"
        >
          <div className="text-center">
            <div className="text-6xl font-mono font-bold text-uv-secondary mb-2">6 KILL-LOG</div>
            <p className="text-uv-text/70 text-sm uppercase tracking-wider">
              Pathogen Elimination
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

