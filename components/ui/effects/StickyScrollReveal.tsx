import * as React from "react";

export type StickyScrollItem = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
};

export type StickyScrollProps = {
  content: StickyScrollItem[];
  className?: string;
};

export function StickyScroll({ content, className }: StickyScrollProps) {
  return (
    <div className={className}>
      {content?.map((item, idx) => (
        <section key={idx} className="mb-8">
          {item.title ? <h3>{item.title}</h3> : null}
          {item.description ? <p>{item.description}</p> : null}
          {item.content}
        </section>
      ))}
    </div>
  );
}

export default StickyScroll;
