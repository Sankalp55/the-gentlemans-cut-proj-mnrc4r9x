import * as React from "react";

export type ParallaxScrollProps = {
  images: string[];
  className?: string;
};

export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
  return (
    <div className={className}>
      {images?.map((src, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={idx} src={src} alt="" className="block w-full" />
      ))}
    </div>
  );
}

export default ParallaxScroll;
