'use client'

import { Section } from '@/components/Section'
import { ProductCard } from '@/components/ProductCard'
import { content } from '@/lib/content'

export function Products() {
  return (
    <Section eyebrow="Our Products" title="Sterilization Solutions for Every Need">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductCard
          title={content.products.uvClave.title}
          description={content.products.uvClave.description}
          features={content.products.uvClave.features}
          imageSrc="/images/uv-clave.jpg"
          delay={0}
          href="/products#uv-clave"
        />
        <ProductCard
          title={content.products.uvBulb.title}
          description={content.products.uvBulb.description}
          features={content.products.uvBulb.features}
          imageSrc="/images/uv-bulb.jpg"
          delay={0.1}
          href="/products#uv-bulb"
        />
        <ProductCard
          title={content.products.uvClave2.title}
          description={content.products.uvClave2.description}
          features={content.products.uvClave2.features}
          imageSrc="/images/uv-clave2.jpg"
          delay={0.2}
          href="/products#uv-clave2"
        />
        <ProductCard
          title={content.products.uvPen.title}
          description={content.products.uvPen.description}
          features={content.products.uvPen.features}
          imageSrc="/images/uv-pen.svg"
          delay={0.3}
          href="/products#uv-pen"
        />
      </div>
    </Section>
  )
}

