import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Build-safe fallback for templates expecting `AnimatedTestimonials`.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials?.map((t, idx) => (
        <figure key={idx} className="mb-6">
          <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
          <figcaption className="mt-2 text-xs opacity-80">
            {t.name}
            {t.title ? ` · ${t.title}` : ""}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
