import React from 'react';

export function Button({ variant = 'primary', size = 'md', href, onClick, children }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-display)', fontWeight: 600,
    borderRadius: 'var(--radius-pill)', border: '2px solid transparent', cursor: 'pointer',
    textDecoration: 'none', transition: 'transform .15s ease, filter .15s ease',
  };
  const sizes = {
    md: { padding: '14px 28px', fontSize: 'var(--text-base)' },
    sm: { padding: '10px 20px', fontSize: 'var(--text-sm)' },
  };
  const variants = {
    primary: { background: 'var(--color-primary)', color: 'var(--color-text-on-dark)', boxShadow: 'var(--shadow-lift)' },
    accent: { background: 'var(--color-accent)', color: 'var(--color-text)' },
    outline: { background: 'transparent', color: 'var(--color-text)', borderColor: 'var(--ink-900)' },
    dark: { background: 'var(--color-bg-dark)', color: 'var(--color-text-on-dark)' },
  };
  const style = { ...base, ...sizes[size], ...variants[variant] };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, { href, onClick, style, onMouseDown: e => e.currentTarget.style.transform = 'scale(.97)', onMouseUp: e => e.currentTarget.style.transform = 'scale(1)' }, children);
}
