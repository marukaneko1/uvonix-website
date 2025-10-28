'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { content } from '@/lib/content'
import { Typewriter } from '@/components/Typewriter'
import { useState } from 'react'

export function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-uv-primary/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
          <Typewriter
            text={content.hero.title}
            speed={50}
            onComplete={() => {
              setTypingComplete(true)
              setTimeout(() => setShowSubtitle(true), 500)
            }}
          />
          {!typingComplete && <span className="inline-block ml-1 animate-pulse">|</span>}
        </h1>
        
        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-uv-text/70 mb-10 font-body max-w-3xl mx-auto"
            onAnimationComplete={() => {
              setTimeout(() => setShowButtons(true), 400)
            }}
          >
            {content.hero.subtitle}
          </motion.p>
        )}

        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/technology">
              <Button size="lg" variant="default">
                {content.hero.cta1}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="default">
                {content.hero.cta2}
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

