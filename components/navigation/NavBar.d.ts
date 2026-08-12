/**
 * Sticky top navigation with brand mark, page links, and click-to-call phone number.
 * @startingPoint section="Navigation" subtitle="Sticky site nav with call CTA" viewport="900x90"
 */
export interface NavLink { label: string; href: string; }
export interface NavBarProps {
  links: NavLink[];
  phone?: string;
  active?: string;
}
export function NavBar(props: NavBarProps): JSX.Element;
