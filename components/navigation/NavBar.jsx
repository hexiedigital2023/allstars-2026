import React from 'react';

export function NavBar({ links = [], phone = '(780) 757-0055', active }) {
  return React.createElement('header', {
    style: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px var(--space-6)', background: 'var(--white)', borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)', position: 'sticky', top: 0, zIndex: 10,
    }
  }, [
    React.createElement('div', { key: 'logo', style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-primary)' } }, 'Allstars'),
    React.createElement('nav', { key: 'nav', style: { display: 'flex', gap: 24 } },
      links.map((l, i) => React.createElement('a', {
        key: i, href: l.href,
        style: { color: l.href === active ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)' }
      }, l.label))
    ),
    React.createElement('a', { key: 'phone', href: 'tel:' + phone.replace(/[^0-9+]/g, ''), style: { fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text)', textDecoration: 'none' } }, phone),
  ]);
}
