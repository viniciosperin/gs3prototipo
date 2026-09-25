'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const footerLinks: Record<string,string> = {'Gobierno Corporativo':'/transparencia/gobierno-corporativo','Política de Riesgos Integrales':'/transparencia/riesgos','Política de Crédito':'/transparencia/credito','Política de Privacidad':'/transparencia/privacidad','Código de Ética y Conducta':'/transparencia/etica','PLD/FT':'/transparencia/pld-ft','Canal de Denuncias':'/transparencia/denuncias','Tasas':'/transparencia/tasas','Gestión de Reclames':'/transparencia/gestion-reclames','Normativas':'/transparencia/normativas'};
const socialLinks = [
  { name: 'Instagram', icon: 2, href: 'https://www.instagram.com/gs3.fintech/' },
  { name: 'LinkedIn', icon: 4, href: 'https://www.linkedin.com/company/103188948/admin/dashboard/' },
];
export function SiteFooter() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contacto@gs3.com.py');
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    } finally {
      setCopied(true);
      if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => {
        setCopied(false);
        toastTimer.current = null;
      }, 2400);
    }
  };

  return <footer id="contacto">
    <img className="footer-watermark" src="/assets/watermark.svg" alt="" loading="lazy" />
    <Link href="/" aria-label="Ir a la página de inicio"><img className="footer-logo" src="/assets/logo-footer.svg" width="163" height="40" alt="GS3" /></Link>
    <div className="footer-columns">
      <div>
        <div className="footer-group"><h2>Transparencia</h2>{['Gobierno Corporativo', 'Política de Riesgos Integrales', 'Política de Crédito', 'Política de Privacidad', 'Código de Ética y Conducta', 'PLD/FT', 'Canal de Denuncias'].map((label) => <a key={label} href={footerLinks[label]}>{label}</a>)}</div>
      </div>
      <div>
        <div className="footer-group"><h2>Informes</h2>{['Tasas', 'Gestión de Reclames', 'Normativas'].map((label) => <a key={label} href={footerLinks[label]}>{label}</a>)}</div>
        <div className="footer-group talent"><h2>Talento</h2><a href="mailto:contacto@gs3.com.py?subject=Trabaje%20con%20nosotros">Trabaje con nosotros</a></div>
      </div>
      <div>
        <div className="footer-group"><h2>Hable con nosotros</h2><button className="contact contact-copy" type="button" onClick={copyEmail}>contacto@gs3.com.py</button><a className="contact" href="tel:+59521614401">+595 (21) 614 401</a></div>
        <div className="footer-group social"><h2>Redes Sociales</h2><div className="social-icons">{socialLinks.map(({name, icon, href}) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={`GS3 en ${name}`}><img src={`/assets/social-${icon}.svg`} width="24" height="24" alt="" /></a>)}</div></div>
      </div>
    </div>
    <small>© 2026 GS3 S.A. - Instituición Financieira. 0000000000/000 Rua Xxxxx Xxxxx, 00, - Ciudad del Este, Alto Paraná - 00000-000</small>
    <span className="copy-toast" role="status" aria-live="polite" aria-hidden={!copied} data-visible={copied} data-error={copyFailed}>{copyFailed ? 'No se pudo copiar. E-mail: contacto@gs3.com.py' : 'E-mail copiado'}</span>
  </footer>;
}
