import { HeroAurora } from '@/components/blocks/HeroAurora'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { StatsCounter } from '@/components/blocks/StatsCounter'

export default function HomePage() {
  return (
    <div>
      <HeroAurora
        badge="Iron & Straight Barber Co."
        headline="A darker, sharper barbershop experience."
        subheadline="Cuts, fades, shaves, and scalp care—delivered with ritual-level detail. Book in seconds, walk out precise."
        primaryCta={{ label: 'Book an Appointment', href: '/contact#booking' }}
        secondaryCta={{ label: 'View Services & Prices', href: '/services' }}
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The finish is the difference.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Iron & Straight is built for clients who notice the details: clean transitions,
                comfortable razor work, and a cut that holds its shape as it grows. Our process is
                consistent—consult first, execute with intent, then finish with a hot towel and
                styling that matches your hair type and routine.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you’re coming in for a quick taper, a full reset, or scalp care that actually
                improves dryness and irritation, you’ll get a calm experience and repeatable
                results—without the rush.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur-md shadow-sm p-6">
                <h3 className="text-xl font-semibold">Today’s shop highlights</h3>
                <div className="mt-6">
                  <StatsCounter
                    stats={[
                      { label: 'Walk-ins welcome', value: 'Limited', suffix: ' slots daily' },
                      { label: 'Avg. service time', value: '30–60', suffix: ' min' },
                      { label: 'Signature finish', value: 'Hot towel', suffix: ' + styling' },
                    ]}
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Want the fastest experience? Book ahead. Prefer to pop in? We keep a few walk-in
                  slots when the day allows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCloud
        headline="Trusted by locals who care about the details."
        logos={[
          { name: 'Steel & Suds Magazine', imageUrl: '/images/logos/steel-suds.svg' },
          { name: 'Northside Gentlemen’s Club', imageUrl: '/images/logos/northside-gc.svg' },
          { name: 'Koa Grooming Supply', imageUrl: '/images/logos/koa-grooming.svg' },
          { name: 'Midnight Coffee Roasters', imageUrl: '/images/logos/midnight-coffee.svg' },
          { name: 'Leather & Thread Co.', imageUrl: '/images/logos/leather-thread.svg' },
        ]}
      />

      <FeaturesCards3D
        badge="Our standard"
        headline="Built like a craft shop. Run like a modern studio."
        subheadline="Premium tools, consistent process, and a quiet confidence in every detail."
        features={[
          {
            title: 'Precision Consult',
            description:
              'Face shape, growth patterns, and lifestyle—then we cut with intent so your style fits your routine.',
          },
          {
            title: 'Ritual Hot Towel',
            description:
              'Heat + steam prep for smoother shaves and calmer skin, finished with the right balm—not a generic splash.',
          },
          {
            title: 'Fade & Texture Mastery',
            description:
              'Clean transitions, controlled weight, and natural movement—built to grow out without losing the silhouette.',
          },
          {
            title: 'Scalp & Hair Health',
            description:
              'Detox and hydration treatments designed to reduce dryness, buildup, and irritation over time.',
          },
          {
            title: 'Sanitation First',
            description:
              'Barbicide protocol, fresh blades, and a station reset every client. Clean tools are non-negotiable.',
          },
          {
            title: 'Easy Booking',
            description:
              'Pick your barber, service, and time—no back-and-forth. We confirm quickly during business hours.',
          },
        ]}
      />

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Booking, reminders, and aftercare—simplified.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A premium experience should feel effortless. Our booking flow is straightforward, and
              our aftercare guidance is practical—so your cut looks right not just day one, but week
              three.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: 'Appointment Requests',
                  description:
                    'Choose service + barber + preferred time. We confirm fast and keep communication clear—no guessing.',
                },
                {
                  title: 'SMS/Email Reminder Copy',
                  description:
                    'Pre-written reminder templates you can paste into your tool—helpful for keeping schedules tight and on time.',
                },
                {
                  title: 'Aftercare Guides',
                  description:
                    'Quick routines for beard oil, styling, and scalp maintenance—built around what you can actually keep up with.',
                },
                {
                  title: 'Gift Cards',
                  description:
                    'Print-friendly certificates for holidays and events. A clean gift that always lands well.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <TestimonialsAnimated
        headline="The kind of shop people keep coming back to."
        subheadline="Real feedback from clients who notice the difference."
        testimonials={[
          {
            quote:
              'Best fade I’ve had in years. The consult was quick but thorough—exactly what I wanted.',
            name: 'Marcus T.',
            role: 'Skin fade + texture crop',
            company: 'Local client',
          },
          {
            quote:
              'Hot towel shave was unreal. No irritation, and the finish felt like a ritual.',
            name: 'Evan R.',
            role: 'Signature shave',
            company: 'Local client',
          },
          {
            quote:
              'They fixed a bad cut from another place and made it look intentional. Respect.',
            name: 'Jonah K.',
            role: 'Cut correction + styling',
            company: 'Local client',
          },
          {
            quote:
              'Scalp treatment helped with dryness immediately. Clean shop, calm vibe, great music.',
            name: 'Derek S.',
            role: 'Scalp detox',
            company: 'Local client',
          },
        ]}
      />

      <FAQAccordion
        headline="Quick answers before you book."
        subheadline="If you’re unsure which service to choose, we’ll guide you."
        items={[
          {
            question: 'Do you take walk-ins?',
            answer:
              'Yes—limited daily walk-in slots are available. Booking ahead guarantees your time and lets you choose your preferred barber.',
          },
          {
            question: 'What’s included in a haircut?',
            answer:
              'A haircut includes a consult, the cut itself, neckline cleanup, an optional wash if needed, a style finish, and product guidance matched to your hair type.',
          },
          {
            question: 'Can you work with curly/coily hair?',
            answer:
              'Absolutely. We tailor sectioning, tension, and finish products to your curl pattern so the shape and texture look intentional—without over-thinning.',
          },
          {
            question: 'How should I prep for a hot towel shave?',
            answer:
              'Arrive with a clean face if possible. We’ll handle the rest: prep oil, hot towel, straight-razor technique, and post-shave care to reduce irritation.',
          },
          {
            question: 'Do you offer kids’ cuts?',
            answer:
              'Yes. We recommend booking during quieter hours for the best experience, especially for first-time visits.',
          },
        ]}
      />

      <CTASparkles
        headline="Ready for a cut that holds its shape for weeks?"
        description="Book your slot—walk out sharp, calm, and confident."
        ctaLabel="Book Now"
        ctaHref="/contact#booking"
      />
    </div>
  )
}
