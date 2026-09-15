import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

interface SmartLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** Renders an internal app route as a client-side <Link>, everything else as a plain <a>. */
const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(function SmartLink(
  { href, children, ...rest },
  ref
) {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} ref={ref} {...rest}>
      {children}
    </a>
  );
});

export default SmartLink;
