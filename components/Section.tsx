'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  title?: string
  eyebrow?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, eyebrow, description, children, className }: SectionProps) {
  return (
    <section className={cn('container py-24 section-divider', className)}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          {eyebrow && (
            <p className="text-sm font-medium text-uv-secondary uppercase tracking-wider mb-2">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-uv-text/70 font-body">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  )
}

