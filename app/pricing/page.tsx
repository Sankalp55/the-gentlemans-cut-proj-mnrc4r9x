'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'

type Mode = 'single' | 'membership'

export default function PricingPage() {
  const [mode, setMode] = useState<Mode>('single')

  const tiers = useMemo(() => {
    if (mode === 'single') {
      return [
        {
          name: 'Haircut',
          price: '$45',
          period: 'per visit',
          features: ['Consult + cut', 'Neck cleanup', 'Style finish'],
          ctaLabel: 'Book Haircut',
          ctaHref: '/contact#booking',
        },
        {
          name: 'Cut + Beard',
          price: '$65',
          period: 'per visit',
          features: ['Haircut', 'Beard grooming', 'Hot towel finish'],
          ctaLabel: 'Book Cut + Beard',
          ctaHref: '/contact#booking',
          highlighted: true,
        },
        {
          name: 'Signature Shave',
          price: '$40',
          period: 'per visit',
          features: ['Hot towel prep', 'Straight razor shave', 'Post-shave care'],
          ctaLabel: 'Book Shave',
          ctaHref: '/contact#booking',
        },
      ]
    }

    return [
      {
        name: 'Monthly Sharp',
        price: '$79',
        period: 'per month',
        features: ['1 haircut/month', 'Priority booking', '10% off add-ons'],
        ctaLabel: 'Request Membership',
        ctaHref: '/contact#booking',
      },
      {
        name: 'Always Ready',
        price: '$129',
        period: 'per month',
        features: ['2 services/month (any core)', 'Priority booking', 'Free eyebrow tidy'],
        ctaLabel: 'Request Membership',
        ctaHref: '/contact#booking',
        highlighted: true,
      },
      {
        name: 'Executive',
        price: '$169',
        period: 'per month',
        features: ['2 services/month', '1 hot towel shave/month', '15% off products'],
        ctaLabel: 'Request Membership',
        ctaHref: '/contact#booking',
      },
    ]
  }, [mode])

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground">Pricing</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Premium results, honest pricing.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Choose single visits or membership perks. Memberships are built for regulars who like
              staying sharp without thinking about it—no contracts, and you can pause anytime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Start Booking
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-border/70 bg-card/50 p-2 inline-flex">
            <button
              type="button"
              onClick={() => setMode('single')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                mode === 'single'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-pressed={mode === 'single'}
            >
              Single Visit
            </button>
            <button
              type="button"
              onClick={() => setMode('membership')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                mode === 'membership'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-pressed={mode === 'membership'}
            >
              Membership
            </button>
          </div>

          <div className="mt-10">
            <PricingTable
              headline="Choose your rhythm"
              subheadline="For regulars who like staying sharp without thinking about it."
              tiers={tiers}
            />
            {mode === 'membership' && (
              <p className="mt-4 text-sm text-muted-foreground">
                Membership requests are confirmed by email. Unused monthly services do not roll
                over.
              </p>
            )}
          </div>

          <section className="mt-16 rounded-xl border border-border/70 bg-muted p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What you’re paying for</h2>
            <p className="mt-3 text-muted-foreground">
              Not just a cut—an experience that stays consistent.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Consistency',
                  description:
                    'We document preferences so you can repeat your best cut—length, fade height, neckline, and finish products.',
                },
                {
                  title: 'Comfort',
                  description:
                    'Hot towel finish, calm lighting, and a clean station—every time. Comfort-first doesn’t mean less precision.',
                },
                {
                  title: 'Longevity',
                  description:
                    'Shape and weight distribution designed to grow out clean, so you look intentional between visits.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16">
            <TestimonialsAnimated
              headline="Regulars say it best"
              subheadline="Why memberships work for the people who value time."
              testimonials={[
                {
                  quote:
                    'Membership is worth it—my cuts stay consistent and I never scramble for an appointment.',
                  name: 'Anthony P.',
                  role: 'Always Ready member',
                  company: 'Local client',
                },
                {
                  quote: 'The shop is dialed in. Clean, quiet, and the results are repeatable.',
                  name: 'Sam W.',
                  role: 'Monthly Sharp member',
                  company: 'Local client',
                },
                {
                  quote: 'Best beard line-up I’ve had—no harsh edges, just crisp.',
                  name: 'Caleb N.',
                  role: 'Beard grooming',
                  company: 'Local client',
                },
              ]}
            />
          </div>

          <div className="mt-16">
            <FAQAccordion
              headline="Pricing FAQ"
              subheadline="Everything you need to know before choosing a plan."
              items={[
                {
                  question: 'Do memberships require a contract?',
                  answer:
                    'No. You can pause or cancel anytime—just give us a heads-up before your next billing cycle so we can confirm the change.',
                },
                {
                  question: 'Can I use membership services for color or scalp treatments?',
                  answer:
                    'The Always Ready and Executive plans can be applied to any core service. Color may require additional time depending on the consult and desired result.',
                },
                {
                  question: 'Do you offer refunds?',
                  answer:
                    'If something feels off, tell us within 48 hours and we’ll make it right with a complimentary adjustment. Our goal is a result you’re confident wearing.',
                },
              ]}
            />
          </div>

          <div className="mt-16">
            <CTASparkles
              headline="Stay sharp without the scramble."
              description="Request a membership or book a single visit—either way, we’ll confirm quickly."
              ctaLabel="Request a Time"
              ctaHref="/contact#booking"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
