'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  imageSrc?: string
  delay?: number
  href?: string
}

export function ProductCard({ title, description, features, imageSrc, delay = 0, href }: ProductCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full transition-all hover:border-uv-secondary/50 cursor-pointer">
        <div className="aspect-video relative rounded-t-lg overflow-hidden">
          {imageSrc ? (
            imageSrc.endsWith('.svg') ? (
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            ) : (
              <Image src={imageSrc} alt={title} fill className="object-cover" />
            )
          ) : (
            <div className="w-full h-full bg-uv-surface flex items-center justify-center">
              <span className="text-uv-text/30 font-mono text-sm">Image placeholder</span>
            </div>
          )}
        </div>
        <CardContent className="pt-6">
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription className="mb-4">{description}</CardDescription>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-uv-text/70 flex items-start gap-2">
                <span className="text-uv-secondary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

