import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarFloating } from '@/components/blocks/NavbarFloating'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iron & Straight Barber Co. | Premium Haircuts, Beards & Hot Towel Shaves',
  description:
    'A premium barbershop with dark, masculine vibes—precision haircuts, beard grooming, hot towel shaves, hair styling, coloring, and scalp treatments. Book your appointment online.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <NavbarFloating
          logo="Iron & Straight Barber Co."
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Team', href: '/team' },
            { label: 'About', href: '/about' },
            { label: 'Contact/Book', href: '/contact' },
          ]}
          ctaLabel="Book"
          ctaHref="/contact#booking"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Iron & Straight Barber Co."
          description="Precision cuts. Ritual-level shaves. Built for the modern gentleman. A calm, dark studio where craft comes first—clean silhouettes, comfortable razor work, and consistent results you can repeat."
          columns={[
            {
              title: 'Iron & Straight',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Gallery', href: '/gallery' },
              ],
            },
            {
              title: 'Shop',
              links: [
                { label: 'Team', href: '/team' },
                { label: 'About', href: '/about' },
                { label: 'Contact & Booking', href: '/contact' },
              ],
            },
            {
              title: 'Hours',
              links: [
                { label: 'Mon–Fri: 10–7', href: '/contact' },
                { label: 'Sat: 10–5', href: '/contact' },
                { label: 'Sun: Closed', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Iron & Straight Barber Co. All rights reserved."
        />
      </body>
    </html>
  )
}
