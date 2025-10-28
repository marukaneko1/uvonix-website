'use client'

import { Section } from '@/components/Section'
import { motion } from 'framer-motion'
import { content } from '@/lib/content'

export function Industries() {
  const { tiers } = content.industries

  return (
    <Section
      eyebrow="Industries"
      title={content.industries.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(tiers).map(([key, items], tierIdx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
            className="bg-uv-surface rounded-lg p-6 uv-glow"
          >
            <h3 className="text-lg font-heading font-semibold text-uv-secondary mb-4 capitalize">
              {key} Market
            </h3>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-uv-text/80 text-sm font-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

