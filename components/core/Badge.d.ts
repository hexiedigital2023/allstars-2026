/**
 * Rounded colored pill for tagging attractions/features (e.g. "Ages 1-3", "Zipline").
 * @startingPoint section="Core" subtitle="Colored feature/age tag pill" viewport="700x120"
 */
export interface BadgeProps {
  color?: 'red' | 'yellow' | 'blue' | 'green';
  children: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
