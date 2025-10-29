'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-uv',
  {
    variants: {
      variant: {
        default:
          'bg-transparent text-uv-secondary border-2 border-uv-secondary hover:bg-uv-secondary/10 hover:scale-[1.08] hover:shadow-2xl hover:shadow-uv-secondary/70 uv-glow transition-all duration-300 text-base font-semibold px-8 py-4',
        secondary:
          'bg-uv-surface text-uv-text border border-uv-secondary/30 hover:border-uv-secondary hover:scale-[1.02] uv-glow',
        outline:
          'border-2 border-uv-secondary text-uv-secondary hover:bg-uv-secondary/10 hover:scale-[1.02]',
        ghost: 'hover:bg-uv-surface hover:text-uv-text',
      },
              size: {
                default: 'h-12 px-6',
                sm: 'h-9 px-4',
                lg: 'h-16 px-10 text-lg',
              },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

