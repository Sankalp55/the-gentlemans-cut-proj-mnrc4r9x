import * as React from "react";

export type SparklesCoreProps = React.HTMLAttributes<HTMLDivElement> & {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

/**
 * Lightweight fallback implementation.
 * Some templates expect a named export `SparklesCore`.
 */
export function SparklesCore({
  className,
  background,
  particleColor,
  ...props
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background: background ?? "transparent",
        color: particleColor,
      }}
      {...props}
    />
  );
}

export default SparklesCore;
