'use client'

import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { content } from '@/lib/content'
import { motion } from 'framer-motion'
import { Shield, Zap, Settings, CheckCircle } from 'lucide-react'

export default function TechnologyPage() {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Advanced UV-C Technology"
        description="Proprietary enclosed architecture delivering medical-grade sterilization in seconds"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">How It Works</h3>
            <ul className="space-y-4">
              {content.technology.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-uv-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-uv-text/90">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-uv-surface rounded-xl p-8 aspect-square flex items-center justify-center uv-glow"
          >
            <div className="text-center">
              <div className="text-7xl font-mono font-bold text-uv-secondary mb-2">&lt;7s</div>
              <p className="text-uv-text/70 text-sm uppercase tracking-wider">
                Sterilization Time
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Safety & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:border-uv-secondary/50 transition-all">
              <CardContent className="pt-6">
                <Shield className="text-uv-secondary mb-4" size={32} />
                <CardTitle className="mb-2">Enclosed Architecture</CardTitle>
                <CardDescription>
                  Safe operation with zero human exposure risk during sterilization cycles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-uv-secondary/50 transition-all">
              <CardContent className="pt-6">
                <Zap className="text-uv-secondary mb-4" size={32} />
                <CardTitle className="mb-2">Optimized Wavelengths</CardTitle>
                <CardDescription>
                  Germicidal UV-C at 254nm for maximum pathogen elimination efficiency
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-uv-secondary/50 transition-all">
              <CardContent className="pt-6">
                <Settings className="text-uv-secondary mb-4" size={32} />
                <CardTitle className="mb-2">FDA Ready</CardTitle>
                <CardDescription>
                  Designed to meet FDA requirements with validated 6 kill-log sterilization
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

