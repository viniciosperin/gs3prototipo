'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ServicesModal } from '@/components/services-modal';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Somos', href: '/historia' },
  { label: 'Servicios' },
  { label: 'Contacto', href: '/transparencia/denuncias' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" data-mobile-open={menuOpen}>
      <div className="header-inner">
        <Link className="header-brand" href="/" aria-label="GS3 — Inicio" onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo.svg" width="111.359" height="27.499" alt="GS3" />
        </Link>
        <button className="header-menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className="header-nav" id="site-navigation" aria-label="Navegación principal" data-open={menuOpen}>
          {navigation.map(({ label, href }) => (
            label === 'Servicios'
              ? <ServicesModal key={label} triggerLabel={label} triggerClassName="header-nav-link" showTriggerArrow={false} onTriggerClick={() => setMenuOpen(false)} />
              : <Link key={label} href={href!} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
