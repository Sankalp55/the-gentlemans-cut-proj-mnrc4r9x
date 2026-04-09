'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { CTASparkles } from '@/components/blocks/CTASparkles'

type BookingState = {
  fullName: string
  phone: string
  email: string
  service: string
  barber: string
  preferredDate: string
  preferredTime: string
  notes: string
}

const SERVICES = [
  'Haircut',
  'Beard Grooming',
  'Hair Styling',
  'Hair Coloring (Gray Blend / Toner)',
  'Hot Towel Shave',
  'Scalp Treatment (Detox + Hydration)',
  'Bundle: The Classic',
  'Bundle: The Reset',
  'Bundle: Scalp & Style',
] as const

const BARBERS = ['No preference', 'Mason Hale', 'Rico Alvarez', 'Noah Kim', 'Jules Carter'] as const
const TIMES = ['Morning', 'Midday', 'Afternoon', 'Evening'] as const

export default function ContactPage() {
  const searchParams = useSearchParams()

  const preselectedBarber = useMemo(() => {
    const b = searchParams.get('barber')
    if (!b) return 'No preference'
    return BARBERS.includes(b as any) ? b : 'No preference'
  }, [searchParams])

  const [booking, setBooking] = useState<BookingState>({
    fullName: '',
    phone: '',
    email: '',
    service: 'Haircut',
    barber: 'No preference',
    preferredDate: '',
    preferredTime: 'Afternoon',
    notes: '',
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setBooking((prev) => ({ ...prev, barber: preselectedBarber }))
  }, [preselectedBarber])

  function validateBooking() {
    if (!booking.fullName.trim()) return false
    if (!booking.phone.trim()) return false
    if (!booking.email.trim()) return false
    if (!booking.service.trim()) return false
    if (!booking.preferredDate.trim()) return false
    if (!booking.preferredTime.trim()) return false
    return true
  }

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (!validateBooking()) {
        setStatus('error')
        return
      }

      // Client-side only: simulate a successful request.
      // In production, wire this to your booking tool (e.g., Calendly, Square, Fresha) or email client.
      setStatus('success')

      // Optional: reset some fields while keeping service preference
      setBooking((prev) => ({
        ...prev,
        notes: '',
      }))
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm text-muted-foreground">Contact & Booking</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                Book your appointment. We’ll handle the rest.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Request a time, choose a service, and tell us your goal. We’ll confirm by email or
                text during business hours. If you’re unsure what to book, add a note like “low
                maintenance cut” or “sensitive skin shave” and we’ll guide you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Jump to Booking Form
                </Link>
                <Link
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-card/50 px-5 py-3 text-foreground font-medium hover:shadow-sm transition"
                >
                  Call the Shop
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur-md shadow-sm p-6">
                <h2 className="text-xl font-semibold">Shop details</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-muted-foreground">Business hours</dt>
                    <dd className="text-foreground text-right">
                      Mon–Fri 10–7 · Sat 10–5 · Sun Closed
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-muted-foreground">Address</dt>
                    <dd className="text-foreground text-right">
                      112 Forge Street, Suite B, Your City
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd className="text-foreground text-right">+1 (555) 123-4567</dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd className="text-foreground text-right">book@ironandstraight.co</dd>
                  </div>
                </dl>

                <div className="mt-6 rounded-xl border border-border/70 bg-muted p-4">
                  <p className="text-sm font-medium">Map</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Use an iframe embed in production for: <span className="text-foreground">112 Forge Street Suite B</span>
                  </p>
                  <div className="mt-3 aspect-video w-full rounded-lg border border-border/70 bg-card/60" />
                </div>
              </div>
            </div>
          </div>

          <section id="booking" className="mt-16 rounded-xl border border-border/70 bg-card/50">
            <div className="p-6 md:p-10 border-b border-border/70">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Booking request</h2>
              <p className="mt-3 text-muted-foreground">
                Client-side form (no account needed). We confirm within business hours.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.fullName}
                    onChange={(e) => setBooking((p) => ({ ...p, fullName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.phone}
                    onChange={(e) => setBooking((p) => ({ ...p, phone: e.target.value }))}
                    required
                    type="tel"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.email}
                    onChange={(e) => setBooking((p) => ({ ...p, email: e.target.value }))}
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Service</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.service}
                    onChange={(e) => setBooking((p) => ({ ...p, service: e.target.value }))}
                    required
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Preferred barber</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.barber}
                    onChange={(e) => setBooking((p) => ({ ...p, barber: e.target.value }))}
                  >
                    {BARBERS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Preferred date</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.preferredDate}
                    onChange={(e) => setBooking((p) => ({ ...p, preferredDate: e.target.value }))}
                    required
                    type="date"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Preferred time</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.preferredTime}
                    onChange={(e) => setBooking((p) => ({ ...p, preferredTime: e.target.value }))}
                    required
                  >
                    {TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium">
                    Notes (style goals, reference link, allergies)
                  </label>
                  <textarea
                    className="mt-2 min-h-[120px] w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={booking.notes}
                    onChange={(e) => setBooking((p) => ({ ...p, notes: e.target.value }))}
                    placeholder="Example: ‘Low taper, keep length on top. Sensitive skin—no alcohol aftershave. Reference: …’"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Send Booking Request
                </button>

                {status === 'success' && (
                  <p className="text-sm text-foreground">
                    Request sent. We’ll confirm your appointment shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again or call the shop.
                  </p>
                )}
              </div>
            </form>
          </section>

          <section className="mt-16">
            <ContactForm
              headline="Questions before you book?"
              subheadline="Send a message—pricing, timing, and service recommendations included."
              contactInfo={[
                { label: 'Phone', value: '+1 (555) 123-4567' },
                { label: 'Email', value: 'book@ironandstraight.co' },
                { label: 'Address', value: '112 Forge Street, Suite B, Your City' },
              ]}
            />
          </section>

          <section id="policies" className="mt-16">
            <FeaturesGrid
              badge="Good to know"
              headline="Shop policies"
              subheadline="Clear expectations = a better experience."
              features={[
                {
                  title: 'Late arrivals',
                  description:
                    'Arriving 10+ minutes late may require rescheduling depending on the day’s schedule.',
                },
                {
                  title: 'Adjustments',
                  description:
                    'If something feels off, contact us within 48 hours for a complimentary adjustment.',
                },
                {
                  title: 'No-show',
                  description:
                    'Repeated no-shows may require prepayment for future bookings.',
                },
                {
                  title: 'Payments',
                  description:
                    'Cards and cash accepted. Tips appreciated, never expected.',
                },
              ]}
            />
          </section>

          <div className="mt-16">
            <CTASparkles
              headline="Walk out sharp. Keep it easy to maintain."
              description="We’ll recommend the right cut for your routine and growth pattern."
              ctaLabel="Request an Appointment"
              ctaHref="/contact#booking"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
