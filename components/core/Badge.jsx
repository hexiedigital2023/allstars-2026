import React from 'react';

const COLORS = {
  red: { bg: 'rgba(239,51,64,.12)', fg: 'var(--red-600)' },
  yellow: { bg: 'rgba(255,201,60,.25)', fg: '#8A6300' },
  blue: { bg: 'rgba(30,136,229,.12)', fg: 'var(--blue-600)' },
  green: { bg: 'rgba(60,184,120,.15)', fg: 'var(--green-600)' },
};

export function Badge({ color = 'red', children }) {
  const c = COLORS[color] || COLORS.red;
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center', padding: '6px 16px',
      borderRadius: 'var(--radius-pill)', background: c.bg, color: c.fg,
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)',
      letterSpacing: '.02em',
    }
  }, children);
}
