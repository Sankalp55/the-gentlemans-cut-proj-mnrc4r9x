import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, build-safe 3D card primitives.
 * Many UI kits export these as named exports.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

export function CardItem({ as, className, ...props }: CardItemProps) {
  const Comp: any = as ?? "div";
  return <Comp className={className} {...props} />;
}
