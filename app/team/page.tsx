import Link from 'next/link'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function TeamPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground">Team</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Meet the barbers behind the craft.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Specialists in fades, beards, classic cuts, and scalp health—each with a distinct
              style, all held to the same shop standard. Pick your barber, or tell us your goal and
              we’ll match you to the right chair.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Book With a Barber
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
              >
                See services
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <TeamGrid
              headline="Barber profiles"
              subheadline="Pick your specialist, or let us match you."
              members={[
                {
                  name: 'Mason Hale',
                  role: 'Owner · Master Barber',
                  bio: 'Known for clean silhouettes and fades that grow out naturally. Calm consults, precise execution, and a finish that stays controlled for weeks.',
                  imageUrl: '/images/team/mason-hale.jpg',
                },
                {
                  name: 'Rico Alvarez',
                  role: 'Senior Barber',
                  bio: 'Beard architecture and razor work with comfort-first technique. Crisp without harshness—especially for sensitive skin.',
                  imageUrl: '/images/team/rico-alvarez.jpg',
                },
                {
                  name: 'Noah Kim',
                  role: 'Stylist · Texture Specialist',
                  bio: 'Modern styling and texture for straight to coily hair. Clear product education so you can recreate the finish at home.',
                  imageUrl: '/images/team/noah-kim.jpg',
                },
                {
                  name: 'Jules Carter',
                  role: 'Color & Scalp Care',
                  bio: 'Gray blending and scalp treatments with a health-first approach—designed for natural-looking results and long-term comfort.',
                  imageUrl: '/images/team/jules-carter.jpg',
                },
              ]}
            />
          </div>

          <section className="mt-16 rounded-xl border border-border/70 bg-muted p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-3 text-muted-foreground">
              A shared standard across every chair.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Consult-first',
                  description:
                    'We align on outcome, maintenance, and timing before the first snip—so there’s no “almost” at the end.',
                },
                {
                  title: 'Technical finish',
                  description:
                    'Edges, blends, and texture refined with controlled, repeatable technique. Clean under harsh lighting, too.',
                },
                {
                  title: 'Respect for your time',
                  description:
                    'We keep appointments on schedule and communicate clearly. If we’re running tight, you’ll know early.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-xl border border-border/70 bg-card/50 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                What clients say about the team
              </h2>
              <p className="mt-3 text-muted-foreground">Different barbers, same standard.</p>

              <div className="mt-8">
                <InfiniteMovingCards
                  direction="left"
                  speed="normal"
                  items={[
                    {
                      quote: 'Mason’s fades are unreal—clean and consistent every time.',
                      name: 'Kyle M.',
                      title: 'Haircut',
                    },
                    {
                      quote: 'Rico’s shave is the only one that doesn’t irritate my skin.',
                      name: 'Ben L.',
                      title: 'Hot towel shave',
                    },
                    {
                      quote:
                        'Noah explained products in a way that actually made sense. My hair finally behaves.',
                      name: 'Trevor J.',
                      title: 'Styling',
                    },
                    {
                      quote: 'Jules nailed my gray blend—natural, not obvious.',
                      name: 'Omar A.',
                      title: 'Color',
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          <div className="mt-16">
            <CTASparkles
              headline="Choose a barber—or let us match you."
              description="Tell us your goal and we’ll recommend the right chair."
              ctaLabel="Request a Match"
              ctaHref="/contact#booking"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
