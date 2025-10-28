'use client'

import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { ProductCard } from '@/components/ProductCard'
import { content } from '@/lib/content'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductsPage() {
  const products = [
    {
      id: 'uv-clave',
      title: content.products.uvClave.title,
      description: content.products.uvClave.description,
      features: [
        '6 kill-log validated sterilization',
        'Touchless enclosed activation',
        'Uniform 360° coverage',
        '<7-second cycle time',
        'Multiple size configurations',
      ],
      imageSrc: '/images/uv-clave.jpg',
    },
    {
      id: 'uv-bulb',
      title: content.products.uvBulb.title,
      description: content.products.uvBulb.description,
      features: [
        'Dual-mode LED/UV operation',
        'Retrofits standard E26/E27 fixtures',
        'Motion-sensing activation',
        'Continuous disinfection layer',
        'Energy-efficient design',
      ],
      imageSrc: '/images/uv-bulb.jpg',
    },
    {
      id: 'uv-clave2',
      title: content.products.uvClave2.title,
      description: content.products.uvClave2.description,
      features: [
        'Endoscope-scale throughput',
        'Integrated drying chamber',
        'Modular shelf system',
        'FDA-ready validation',
        'Reduced reprocessing time',
      ],
      imageSrc: '/images/uv-clave2.jpg',
    },
    {
      id: 'uv-pen',
      title: content.products.uvPen.title,
      description: content.products.uvPen.description,
      features: [
        'Fiber-optic precision',
        'Internal channel sterilization',
        'No moisture or chemicals',
        'Subscription service model',
        'Maintenance included',
      ],
      imageSrc: '/images/uv-pen.jpg',
    },
  ]

  return (
    <div className="pt-24 pb-12">
      <Section
        title="Our Products"
        description="Complete sterilization solutions for every application"
      >
        <div className="space-y-24">
          {products.map((product, idx) => (
            <div key={product.id} id={product.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video relative rounded-xl overflow-hidden uv-glow">
                    {product.imageSrc ? (
                      product.imageSrc.endsWith('.svg') ? (
                        <img src={product.imageSrc} alt={product.title} className="w-full h-full object-cover" />
                      ) : (
                        <Image src={product.imageSrc} alt={product.title} fill className="object-cover" />
                      )
                    ) : (
                      <div className="w-full h-full bg-uv-surface flex items-center justify-center">
                        <span className="text-uv-text/30 font-mono text-sm">Image placeholder</span>
                      </div>
                    )}
                  </div>
                </div>
                <Card className={`h-full ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <CardContent>
                    <CardTitle className="text-3xl mb-4">{product.title}</CardTitle>
                    <CardDescription className="text-lg mb-6">{product.description}</CardDescription>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3 text-uv-text/90">
                          <span className="text-uv-secondary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

