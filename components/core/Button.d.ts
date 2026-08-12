/**
 * Pill-shaped call-to-action button in the Allstars brand voice.
 * @startingPoint section="Core" subtitle="Primary CTA button, 4 variants" viewport="700x160"
 */
export interface ButtonProps {
  variant?: 'primary' | 'accent' | 'outline' | 'dark';
  size?: 'md' | 'sm';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
