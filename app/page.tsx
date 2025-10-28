import { Hero } from '@/components/home/Hero'
import { Problem } from '@/components/home/Problem'
import { Technology } from '@/components/home/Technology'
import { Products } from '@/components/home/Products'
import { Industries } from '@/components/home/Industries'
import { Advantage } from '@/components/home/Advantage'
import { CTA as HomeCTA } from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Technology />
      <Products />
      <Industries />
      <Advantage />
      <HomeCTA />
    </>
  )
}

