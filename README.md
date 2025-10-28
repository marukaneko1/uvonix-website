# Uvonix Website

A modern, biotech-grade website for Uvonix - specialists in UV-C sterilization technology.

## 🎨 Design

**Color Palette:**
- Primary: UV Ion Blue (#005DFF)
- Secondary: Electric Cyan (#2DF1FF)
- Tertiary: Ultraviolet Glow (#6F7FFF)
- Background: Graphite Black (#0C0C0D)
- Surface: Slate Steel (#2A2F35)
- Text: Cool Gray (#E1E4E8)
- Cards: Sanitized White (#F9FAFB)

**Typography:**
- Headings: Poppins (600, 700)
- Body: Inter (400, 500)
- Numerics: JetBrains Mono (400)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── contact/          # Contact page
│   ├── industries/       # Industries page
│   ├── products/         # Products page
│   ├── team/             # Team page
│   ├── technology/       # Technology page
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── home/             # Home page sections
│   ├── ui/               # Reusable UI components
│   ├── Footer.tsx        # Site footer
│   ├── Navigation.tsx    # Site navigation
│   └── ...               # Other reusable components
└── lib/
    ├── content.ts        # Centralized content/strings
    └── utils.ts          # Utility functions
```

## 🖼️ Adding Images

Place product images in `/public/images/`:
- `uv-clave.jpg`
- `uv-bulb.jpg`
- `uv-clave2.jpg`
- `uv-pen.jpg`

## ⚡ Features

- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom color system
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Accessibility best practices
- ✅ Dark mode enabled
- ✅ Optimized images

## 🎯 Key Pages

- **Home** (`/`): Hero, problem statement, technology, products, industries, advantages, CTA
- **Technology** (`/technology`): Detailed UV-C technology explanation
- **Products** (`/products`): UV Clave, Retrofit UV Bulb, UV Clave 2.0, UV Pen
- **Industries** (`/industries`): Primary, secondary, and tertiary markets
- **Team** (`/team`): Team member profiles
- **Contact** (`/contact`): Contact form

## 🔧 Configuration

The project uses custom CSS variables defined in `app/globals.css` and mapped to Tailwind colors in `tailwind.config.ts`. All copy text is centralized in `lib/content.ts` for easy updates.

## 📝 License

Proprietary - Uvonix

