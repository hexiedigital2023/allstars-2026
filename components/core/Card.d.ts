/**
 * Rounded content card for attractions, value props, and package summaries.
 * @startingPoint section="Core" subtitle="Rounded content card, 3 tones" viewport="700x260"
 */
export interface CardProps {
  title?: string;
  tone?: 'light' | 'cream' | 'dark';
  children: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
