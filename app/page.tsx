import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ServicesModal } from '@/components/services-modal';
const A = '/assets/';
function Action({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  return <a className={`action${filled ? ' action-filled' : ''}`} href={href}>{children}<img src={`${A}arrow-${filled ? 'white' : 'green'}.svg`} width="20" height="20" alt="" /></a>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <SiteHeader />
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title"><span>Mucho más que crédito.</span> Un aliado del productor</h1><div className="hero-description"><p>Conocemos el agro desde adentro. Por eso, entendemos sus ciclos, sus desafíos y las decisiones que mueven el campo.</p><ServicesModal /></div></div>
        <div className="hero-image"><video autoPlay muted loop playsInline preload="metadata" aria-label="Cosecha en el campo"><source src={`${A}home-hero.mp4`} type="video/mp4" /></video></div>
      </section>
      <section className="solutions" id="servicios" aria-labelledby="solutions-title">
        <h2 id="solutions-title">Soluciones financieras<br /><span>con los valores del campo,</span><br />para cada etapa del ciclo productivo.</h2>
        <div className="service-row"><div className="landscape-image"><img src={`${A}home-service-main.png`} alt="Cosecha de la zafra al atardecer" loading="lazy" /></div><div className="service-copy"><h3>Del crédito al financiamiento de la zafra</h3><p>Soluciones financieras para responder a las necesidades de tu producción, desde la planificación hasta el cierre de la campaña.</p><ServicesModal /></div></div>
        <div className="values"><article><div className="value-image"><img src={`${A}home-value-integrity.png`} alt="Productores trabajando durante la cosecha" loading="lazy" /></div><h3>Fe para actuar con integridad</h3><p>Tomamos cada decisión con responsabilidad, respeto y conciencia de su impacto.</p></article><article className="family-copy"><div className="value-image family-image"><img src={`${A}home-value-generations.png`} alt="Familia de productores junto a la cosechadora" loading="lazy" /></div><h3>Familia para valorar lo que realmente importa</h3><p>Construimos relaciones duraderas, basadas en la confianza, la cooperación y el compromiso con quienes nos rodean.</p></article></div>
      </section>
      <div className="bottom-wrap"><section className="history" id="historia" aria-labelledby="history-title"><img className="history-background" src={`${A}history-field.png`} alt="" loading="lazy" /><img className="history-curve" src={`${A}curve.svg`} alt="" loading="lazy" /><div className="history-content"><img className="sarabia" src={`${A}sarabia.svg`} width="114" height="64" alt="Grupo Sarabia" /><div><p className="overline">Somos una empresa del Grupo Sarabia</p><h2 id="history-title">Más de 30 años de experiencia en el agro respaldan nuestro conocimiento del campo</h2></div><Action href="/historia" filled>Nuestra historia</Action></div></section>
<SiteFooter /></div>
    </main>
  </>;
}
