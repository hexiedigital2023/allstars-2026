import React from 'react';

export function Card({ title, children, tone = 'light' }) {
  const tones = {
    light: { background: 'var(--white)', color: 'var(--color-text)' },
    cream: { background: 'var(--color-bg-alt)', color: 'var(--color-text)' },
    dark: { background: 'var(--color-bg-dark)', color: 'var(--color-text-on-dark)' },
  };
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
      boxShadow: tone === 'dark' ? 'none' : 'var(--shadow-card)',
      fontFamily: 'var(--font-body)', ...tones[tone],
    }
  }, [
    title && React.createElement('h3', { key: 't', style: { fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 12px', fontWeight: 600 } }, title),
    React.createElement('div', { key: 'c', style: { fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)' } }, children),
  ]);
}
