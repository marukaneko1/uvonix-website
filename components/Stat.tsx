'use client'

import { motion } from 'framer-motion'

interface StatProps {
  value: string
  label: string
  delay?: number
}

export function Stat({ value, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-mono font-bold text-uv-secondary mb-2">
        {value}
      </div>
      <div className="text-sm text-uv-text/70 font-body uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}

