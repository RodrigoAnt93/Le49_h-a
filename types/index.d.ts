declare module "react-anchor-link-smooth-scroll" {
  import { ComponentType, AnchorHTMLAttributes } from "react";

  interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    offset?: () => number | number;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  }

  const AnchorLink: ComponentType<AnchorLinkProps>;

  export default AnchorLink;
}
