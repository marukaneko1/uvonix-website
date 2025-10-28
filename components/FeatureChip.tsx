'use client'

import { motion } from 'framer-motion'

interface FeatureChipProps {
  children: React.ReactNode
  delay?: number
}

export function FeatureChip({ children, delay = 0 }: FeatureChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-6 py-3 rounded-full bg-uv-surface border border-uv-secondary/30 uv-glow text-sm font-medium text-uv-text hover:border-uv-secondary transition-all"
    >
      {children}
    </motion.div>
  )
}

