import { ServicesModal } from '@/components/services-modal';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Somos', href: '/historia' },
  { label: 'Servicios' },
  { label: 'Contacto', href: '/transparencia/denuncias' },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="header-brand" href="/" aria-label="GS3 — Inicio">
          <img src="/assets/logo.svg" width="111.359" height="27.499" alt="GS3" />
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          {navigation.map(({ label, href }) => (
            label === 'Servicios'
              ? <ServicesModal key={label} triggerLabel={label} triggerClassName="header-nav-link" showTriggerArrow={false} />
              : <a key={label} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
