import Link from 'next/link'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { PricingTable } from '@/components/blocks/PricingTable'

export default function ServicesPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm text-muted-foreground">Services</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                Services & pricing—straightforward and premium.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Choose a classic cut, a full grooming reset, or targeted scalp care. Every service
                starts with a quick consult to align on outcome and maintenance. Add-ons are
                available when you want extra detail without booking a separate appointment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Book a Service
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
                >
                  Compare memberships
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur-md shadow-sm p-6">
                <h2 className="text-xl font-semibold">What to expect</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="text-foreground font-medium">Consult-first:</span> we confirm
                    length, shape, and upkeep before we start.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">On-schedule:</span> we respect your
                    time and keep the day moving.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Finish ritual:</span> hot towel +
                    styling guidance so the look holds.
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  For long/thick hair or corrective work, we’ll quote you before we begin—no
                  surprises.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-xl border border-border/70 bg-card/50 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/70">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Core services</h2>
              <p className="mt-3 text-muted-foreground">
                Transparent pricing with clear inclusions.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-sm text-muted-foreground">
                      <th className="py-3 pr-6 font-medium">Service</th>
                      <th className="py-3 pr-6 font-medium">Time</th>
                      <th className="py-3 pr-6 font-medium">Price</th>
                      <th className="py-3 font-medium">Includes</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      {
                        service: 'Haircut',
                        time: '30–45 min',
                        price: '$45',
                        includes: 'Consult, cut, neckline cleanup, style finish',
                      },
                      {
                        service: 'Beard Grooming',
                        time: '20–30 min',
                        price: '$28',
                        includes: 'Trim + shape, line-up, hot towel finish',
                      },
                      {
                        service: 'Hair Styling',
                        time: '20–30 min',
                        price: '$25',
                        includes: 'Wash (optional), blow-dry, product finish',
                      },
                      {
                        service: 'Hair Coloring (Gray Blend / Toner)',
                        time: '45–75 min',
                        price: 'From $65',
                        includes: 'Consult, application, rinse, style finish',
                      },
                      {
                        service: 'Hot Towel Shave',
                        time: '30–45 min',
                        price: '$40',
                        includes: 'Prep oil, hot towel, straight-razor shave, post balm',
                      },
                      {
                        service: 'Scalp Treatment (Detox + Hydration)',
                        time: '30–45 min',
                        price: '$38',
                        includes: 'Exfoliation, massage, mask, rinse + finish',
                      },
                    ].map((row) => (
                      <tr key={row.service} className="border-t border-border/70">
                        <td className="py-4 pr-6 font-medium">{row.service}</td>
                        <td className="py-4 pr-6 text-muted-foreground">{row.time}</td>
                        <td className="py-4 pr-6">{row.price}</td>
                        <td className="py-4 text-muted-foreground">{row.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Prices may vary slightly for long/thick hair or corrective work. You’ll be quoted
                before we start.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <PricingTable
              headline="Most booked bundles"
              subheadline="Save time and get the full finish."
              tiers={[
                {
                  name: 'The Classic',
                  price: '$65',
                  period: 'per visit',
                  features: ['Haircut', 'Beard grooming', 'Hot towel finish'],
                  ctaLabel: 'Book The Classic',
                  ctaHref: '/contact#booking',
                  highlighted: true,
                },
                {
                  name: 'The Reset',
                  price: '$85',
                  period: 'per visit',
                  features: ['Haircut', 'Hot towel shave', 'Style finish'],
                  ctaLabel: 'Book The Reset',
                  ctaHref: '/contact#booking',
                },
                {
                  name: 'Scalp & Style',
                  price: '$75',
                  period: 'per visit',
                  features: ['Scalp treatment', 'Hair styling', 'Product guidance'],
                  ctaLabel: 'Book Scalp & Style',
                  ctaHref: '/contact#booking',
                },
              ]}
            />
          </div>

          <section className="mt-16 rounded-xl border border-border/70 bg-muted p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Add-ons (optional)</h2>
            <p className="mt-3 text-muted-foreground">
              Upgrade any service with quick enhancements.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Eyebrow tidy', description: '$10 · 10 min' },
                { title: 'Nose/ear wax', description: '$12 · 10–15 min' },
                { title: 'Beard conditioning mask', description: '$10 · add-on' },
                { title: 'Razor line-up', description: '$12 · add-on' },
                { title: 'Deep shampoo', description: '$8 · add-on' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-card/60 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-sm text-muted-foreground">
              Not sure what to add? Tell us your goal in the booking notes (e.g., “clean up brows”
              or “sensitive skin”) and we’ll recommend the right enhancements.
            </div>
          </section>

          <div className="mt-16">
            <FAQAccordion
              headline="Service questions"
              subheadline="Not sure what to book? Start here."
              items={[
                {
                  question: 'What should I choose: beard grooming or hot towel shave?',
                  answer:
                    'Beard grooming keeps length and shape with a crisp line-up. Hot towel shave removes everything with comfort-first prep and a clean, smooth finish.',
                },
                {
                  question: 'Do you do skin fades and tapers?',
                  answer:
                    'Yes—skin fades, low/mid/high fades, and classic tapers are all available. We’ll recommend the best option based on your head shape and growth pattern.',
                },
                {
                  question: 'Is hair coloring damaging?',
                  answer:
                    'We use controlled application and recommend aftercare. We’ll assess hair health before any color service and adjust timing and product choice accordingly.',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
