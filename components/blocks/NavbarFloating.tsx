import * as React from "react";

export type NavbarFloatingProps = React.HTMLAttributes<HTMLElement>;

export function NavbarFloating({ className, ...props }: NavbarFloatingProps) {
  return <nav className={className} {...props} />;
}

export default NavbarFloating;
