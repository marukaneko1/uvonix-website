import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-uv-text/10 bg-uv-surface/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold text-uv-secondary mb-4">
              UVONIX
            </h3>
            <p className="text-sm text-uv-text/70 mb-4 font-body">
              Medical-grade UV-C sterilization technology. Disinfection in seconds. Protection for life.
            </p>
            <a
              href="mailto:info@seedpulsefund.com"
              className="flex items-center gap-2 text-sm text-uv-secondary hover:text-uv-primary transition-colors"
            >
              <Mail size={16} />
              info@seedpulsefund.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-uv-text mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-sm text-uv-text/70 hover:text-uv-secondary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-uv-text/70 hover:text-uv-secondary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-uv-text/70 hover:text-uv-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-uv-text mb-3 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-uv-text/70 hover:text-uv-secondary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-uv-text/70 hover:text-uv-secondary transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-uv-text/10 text-center text-sm text-uv-text/50">
          © {new Date().getFullYear()} UVONIX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

