'use client'

import { CTA as CTAComponent } from '@/components/CTA'
import { content } from '@/lib/content'

export function CTA() {
  return (
    <CTAComponent
      title={content.cta.title}
      description={content.cta.description}
      primaryButton={{
        text: content.cta.buttonText,
        href: '/contact',
      }}
    />
  )
}

