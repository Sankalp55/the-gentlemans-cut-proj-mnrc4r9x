import Link from 'next/link'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground">About</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              A shop built on quiet confidence and clean craft.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Iron & Straight was founded to bring back the ritual—without the noise. The goal is
              simple: precision you can see, comfort you can feel, and consistency you can repeat.
              We’re not a loud, crowded chop shop. We’re a focused studio where the details matter:
              growth patterns, hair density, skin sensitivity, and the reality of your daily routine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
              >
                Book a Visit
              </Link>
            </div>
          </div>

          <section className="mt-16 rounded-xl border border-border/70 bg-muted p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our story</h2>
            <p className="mt-3 text-muted-foreground">
              From a single chair to a full-service studio.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'The first chair',
                  description:
                    'Started with appointment-only cuts focused on fade consistency and clean grow-out—built for clients who want repeatable results.',
                },
                {
                  title: 'The ritual returns',
                  description:
                    'Introduced hot towel finishes and straight-razor techniques with comfort-first prep to reduce irritation and elevate the experience.',
                },
                {
                  title: 'Health-first grooming',
                  description:
                    'Added scalp treatments and gray blending for clients who care about long-term hair and skin health—not just a quick fix.',
                },
                {
                  title: 'The modern studio',
                  description:
                    'A dark, calm space designed for focus—no rush, no chaos, just craft and clear communication.',
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop standards</h2>
              <p className="mt-3 text-muted-foreground">
                The details you can feel, not just see.
              </p>
            </div>

            <div className="mt-8">
              <BentoGrid>
                <BentoGridItem
                  title="Sanitation protocol"
                  description="Fresh blades, disinfected tools, and station reset every appointment. Clean tools are non-negotiable."
                />
                <BentoGridItem
                  title="Lighting that tells the truth"
                  description="Balanced lighting so your cut looks sharp everywhere—not just in the mirror."
                />
                <BentoGridItem
                  title="Sound & pace"
                  description="Low volume, steady pace, and a calm experience from start to finish."
                />
                <BentoGridItem
                  title="Product integrity"
                  description="We recommend only what suits your hair type and routine—no upsell pressure."
                />
              </BentoGrid>
            </div>
          </section>

          <section className="mt-16 rounded-xl border border-border/70 bg-card/50 p-6 md:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Built on repeat clients
              </h2>
              <p className="mt-3 text-muted-foreground">Consistency is the real luxury.</p>
            </div>
            <div className="mt-8">
              <StatsCounter
                stats={[
                  { label: 'Avg. rebook rate', value: '70', suffix: '%+' },
                  { label: 'Adjustments', value: 'Free', suffix: ' within 48h' },
                  { label: 'Consult time', value: '2–5', suffix: ' min' },
                  { label: 'Signature finish', value: 'Hot towel', suffix: '' },
                ]}
              />
            </div>
          </section>

          <div className="mt-16">
            <CTASparkles
              headline="Come in once. You’ll get why people stay."
              description="Book a service and we’ll confirm your time quickly."
              ctaLabel="Book Appointment"
              ctaHref="/contact#booking"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
