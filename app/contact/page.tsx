'use client'

import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { content } from '@/lib/content'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="pt-24 pb-12">
      <Section
        title={content.contact.title}
        description={content.contact.subtitle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card>
              <CardContent className="pt-6">
                <Mail className="text-uv-secondary mb-3" size={24} />
                <h3 className="font-semibold mb-2">Email</h3>
                <div className="space-y-2">
                  <a href="mailto:info@uvonix.org" className="block text-uv-text/70 hover:text-uv-secondary transition-colors">
                    info@uvonix.org
                  </a>
                  <a href="mailto:info@seedpulsefund.com" className="block text-uv-text/70 hover:text-uv-secondary transition-colors">
                    info@seedpulsefund.com
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="text-uv-secondary mb-3" size={24} />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-uv-text/70">Brooklyn, NYC</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Globe className="text-uv-secondary mb-3" size={24} />
                <h3 className="font-semibold mb-2">Company Website</h3>
                <a href="https://seedpulsefund.com" target="_blank" rel="noopener noreferrer" className="text-uv-text/70 hover:text-uv-secondary transition-colors">
                  seedpulsefund.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {content.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-uv-surface border border-uv-text/20 text-uv-text focus:ring-uv focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {content.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-uv-surface border border-uv-text/20 text-uv-text focus:ring-uv focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      {content.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-uv-surface border border-uv-text/20 text-uv-text focus:ring-uv focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {content.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-uv-surface border border-uv-text/20 text-uv-text focus:ring-uv focus:outline-none resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {content.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

