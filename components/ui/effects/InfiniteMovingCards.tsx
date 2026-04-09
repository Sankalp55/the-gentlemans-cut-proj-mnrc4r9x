import * as React from "react";

export type InfiniteMovingCardsItem = {
  quote?: string;
  name?: string;
  title?: string;
};

export type InfiniteMovingCardsProps = {
  items: InfiniteMovingCardsItem[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
};

export function InfiniteMovingCards({ items, className }: InfiniteMovingCardsProps) {
  return (
    <div className={className}>
      {items?.map((it, idx) => (
        <div key={idx} className="mb-4">
          {it.quote ? <div>{it.quote}</div> : null}
          {(it.name || it.title) ? (
            <div className="text-xs opacity-80">
              {it.name}
              {it.title ? ` · ${it.title}` : ""}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default InfiniteMovingCards;
