import Link from 'next/link'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function GalleryPage() {
  const images = [
    '/images/gallery/fade-texture-01.jpg',
    '/images/gallery/taper-classic-02.jpg',
    '/images/gallery/beard-line-03.jpg',
    '/images/gallery/shave-04.jpg',
    '/images/gallery/curls-05.jpg',
    '/images/gallery/color-grayblend-06.jpg',
    '/images/gallery/pompadour-07.jpg',
    '/images/gallery/scalp-08.jpg',
  ]

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm text-muted-foreground">Gallery</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                Work that looks clean in any light.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Fades, beards, texture, and classic silhouettes—captured with minimal retouching.
                Bring a reference photo and we’ll tailor it to your face shape, growth pattern, and
                maintenance level.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Book Your Look
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
                >
                  See services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur-md shadow-sm p-6">
                <h2 className="text-xl font-semibold">Recent work, real finishes</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We aim for results that read as clean in daylight, office lighting, and night
                  photos. That means balanced blends, controlled weight, and a finish matched to
                  your hair type—not a one-product-fits-all approach.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <ParallaxScroll images={images} />
          </div>

          <section className="mt-16 rounded-xl border border-border/70 bg-muted p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              How we get consistent results
            </h2>
            <p className="mt-3 text-muted-foreground">
              A repeatable process that still feels personal.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Consult',
                  description: 'We align on length, shape, and maintenance.',
                },
                {
                  title: 'Build the silhouette',
                  description: 'Set weight lines and balance the profile.',
                },
                {
                  title: 'Detail & texture',
                  description: 'Refine transitions and add movement.',
                },
                {
                  title: 'Finish ritual',
                  description: 'Hot towel + product finish matched to your hair type.',
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
            <div className="rounded-xl border border-border/70 bg-card/50 p-6 md:p-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proof in the details</h2>
                <p className="mt-3 text-muted-foreground">
                  A shop built on repeat clients and consistent craft.
                </p>
              </div>
              <div className="mt-8">
                <StatsCounter
                  stats={[
                    { label: '5-star reviews', value: '300+', suffix: '' },
                    { label: 'Returning clients', value: '72', suffix: '%' },
                    { label: 'Avg. rebook time', value: '3.5', suffix: ' weeks' },
                    { label: 'Services performed', value: '10k+', suffix: '' },
                  ]}
                />
              </div>
            </div>
          </section>

          <div className="mt-16">
            <CTASparkles
              headline="Bring a reference photo—we’ll tailor it to your face shape."
              description="Book now and we’ll confirm your appointment ASAP."
              ctaLabel="Book Appointment"
              ctaHref="/contact#booking"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
