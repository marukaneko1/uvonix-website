'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CTAProps {
  title: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  variant?: 'default' | 'outline'
}

export function CTA({ title, description, primaryButton, secondaryButton, variant = 'default' }: CTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-uv-text/70 mb-8 font-body">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <Link href={primaryButton.href}>
              <Button variant={variant === 'default' ? 'default' : 'outline'} size="lg">
                {primaryButton.text}
              </Button>
            </Link>
          )}
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button variant="secondary" size="lg">
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

