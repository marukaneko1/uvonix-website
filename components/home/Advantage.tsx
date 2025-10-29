'use client'

import { Section } from '@/components/Section'
import { FeatureChip } from '@/components/FeatureChip'
import { content } from '@/lib/content'

export function Advantage() {
  return (
    <Section
      eyebrow="Why Choose UVONIX"
      title={content.advantage.title}
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {content.advantage.chips.map((chip, idx) => (
          <FeatureChip key={idx} delay={idx * 0.05}>
            {chip}
          </FeatureChip>
        ))}
      </div>
    </Section>
  )
}

