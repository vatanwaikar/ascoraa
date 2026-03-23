# Ascora - Global Import & Export B2B Platform

A modern, high-performance B2B platform connecting international businesses for import-export operations across 150+ countries.

## Features

- **Global Marketplace** - Connect with 10,000+ verified business partners across 150+ countries
- **Product Management** - Complete export hub with bulk ordering and performance analytics
- **Compliance Support** - Automated documentation, tariff classification, and regulatory guidance
- **Logistics Network** - Access vetted freight forwarders and shipping partners with real-time tracking
- **Market Analytics** - Data-driven insights on pricing, demand forecasting, and opportunities
- **Payment Solutions** - Secure multi-currency transactions with escrow protection
- **Industry Solutions** - Specialized features for textiles, electronics, chemicals, food, agriculture, and metals

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4.2 with custom design tokens
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Project Structure

```
ascora/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx              # Root layout with metadata & structured data
│   ├── globals.css             # Global styles and design tokens
│   ├── products/               # Products & services page
│   ├── export-services/        # Export services detail page
│   ├── industries/             # Industry solutions page
│   ├── global-markets/         # Global markets page
│   ├── about/                  # About us page
│   └── contact/                # Contact page
├── components/
│   ├── navigation.tsx          # Top navigation with mobile menu
│   ├── footer.tsx              # Footer with links and social
│   ├── hero-section.tsx        # Hero section component
│   ├── features-section.tsx    # Features grid
│   ├── testimonials-section.tsx # Testimonials carousel
│   └── cta-section.tsx         # Call-to-action section
├── lib/
│   ├── utils.ts                # Utility functions (cn function)
│   └── seo.ts                  # SEO utilities and metadata
├── public/
│   ├── sitemap.xml             # XML sitemap for SEO
│   └── robots.txt              # Robots configuration
└── tailwind.config.ts          # Tailwind configuration

## Design System

### Colors
- **Primary**: Navy Blue (#1a2d4d) - Main brand color
- **Accent**: Steel Blue (#4a90e2) - Secondary highlights
- **Neutrals**: White, grays, off-whites for backgrounds
- **Dark Mode**: Inverted navy and light blue scheme

### Typography
- **Sans Serif**: Geist (primary font)
- **Mono**: Geist Mono (code/technical content)
- **Sizes**: Responsive scaling with Tailwind

## Key Pages

### Homepage (`/`)
- Hero section with value proposition
- 6 key features overview
- Testimonials from global partners
- Call-to-action section
- Statistics highlighting scale

### Products (`/products`)
- 6 core product offerings with detailed features
- Export Hub, Import Solutions, Compliance, Logistics, Analytics, Payments
- Color-coded cards for visual hierarchy
- Call-to-action for trials

### Export Services (`/export-services`)
- Detailed service offerings (documentation, customs, registration, etc.)
- Process workflow (consultation → planning → execution → support)
- Benefits and use cases
- Expert team positioning

### Industries (`/industries`)
- 6 industry verticals with specialized solutions
- Textile & Fashion, Electronics, Chemicals, Food & Beverage, Metals, Agriculture
- Success stories and case studies
- Market statistics per industry

### Global Markets (`/global-markets`)
- 150+ countries overview
- 4 regional breakdowns (Asia Pacific, MENA, Europe, Americas)
- Top trading markets table
- Market insights and growth trends

### About (`/about`)
- Company story and mission
- Founding year and growth metrics
- Core values (4 pillars)
- Leadership team introduction
- Trust badges and statistics

### Contact (`/contact`)
- Contact form with validation
- Multiple contact methods (email, phone, chat, address)
- FAQ section
- Quick response time guarantees

## SEO Optimization

- **Meta Tags**: Comprehensive title and description for each page
- **Open Graph**: Social media previews with images
- **Structured Data**: JSON-LD organization schema
- **Sitemap**: XML sitemap with all pages (in `/public/sitemap.xml`)
- **Robots.txt**: Search engine crawling guidelines
- **Keywords**: Industry-relevant keywords per page
- **Mobile**: Fully responsive design (mobile-first)

## Performance Optimizations

- Next.js 16 with React Compiler support ready
- Optimized images with automatic sizing
- Semantic HTML with proper heading hierarchy
- Tailwind CSS with tree-shaking
- Client-side navigation with prefetching
- Accessibility features (ARIA labels, semantic elements)

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

Deploy easily to Vercel with one click:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Environment variables needed:
- None required for basic deployment (can add later for analytics/forms)

## Customization

### Updating Colors

Edit color variables in `/app/globals.css`:
- Primary colors use `--primary` variables
- Accent colors use `--accent` variables
- Neutral colors use `--background`, `--foreground`, `--card`

### Adding Pages

1. Create new folder in `/app`
2. Add `page.tsx` with content
3. Update `/components/navigation.tsx` with new link
4. Update `/public/sitemap.xml` with new route

### Modifying Navigation

Edit `/components/navigation.tsx` to:
- Add/remove navigation links
- Change branding
- Update mobile menu behavior

## Analytics

Vercel Analytics is integrated. To view analytics:
1. Deploy to Vercel
2. Go to project dashboard
3. Check "Analytics" tab

## Support & Maintenance

- **SEO Audit**: Use Google Search Console for monitoring
- **Performance**: Check Vercel Analytics for Core Web Vitals
- **Mobile Testing**: Test on multiple devices (use Chrome DevTools)
- **Accessibility**: Run axe accessibility checker

## Future Enhancements

- Database integration for user accounts
- Payment processing integration
- Real-time chat support
- Multi-language support
- Advanced analytics dashboard
- Blog/resource center

## License

Proprietary - Ascora Inc.

## Author

Built with v0 - Vercel's AI Code Generation Platform
