export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] satisfies readonly NavItem[];
