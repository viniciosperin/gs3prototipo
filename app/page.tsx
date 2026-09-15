import { SiteFooter } from '@/components/site-footer';
import { ServicesModal } from '@/components/services-modal';
const A = '/assets/';
function Action({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  return <a className={`action${filled ? ' action-filled' : ''}`} href={href}>{children}<img src={`${A}arrow-${filled ? 'white' : 'green'}.svg`} width="20" height="20" alt="" /></a>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="header"><a href="#" aria-label="GS3 — Inicio"><img src={`${A}logo.svg`} width="112" height="28" alt="GS3" /></a></header>
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title"><span>Mucho más que crédito.</span> Un parceiro del productor</h1><div className="hero-description"><p>Conocemos lo que implica producir porque también venimos del campo. Por eso, facilitamos el acceso al crédito con una atención ágil, cercana y pensada para la realidad del agro.</p><ServicesModal /></div></div>
        <div className="hero-image"><img className="hero-figma-image" src={`${A}home-harvest.png`} alt="Cosechadoras trabajando en un campo al atardecer" /></div>
      </section>
      <section className="solutions" id="servicios" aria-labelledby="solutions-title">
        <h2 id="solutions-title">Soluciones financieras<br /><span>con los valores del campo,</span><br />para cada etapa del ciclo productivo.</h2>
        <div className="service-row"><div className="landscape-image"><img src={`${A}landscape.png`} alt="Paisaje agrícola con cultivos y campos productivos" loading="lazy" /></div><div className="service-copy"><h3>Del crédito al financiamiento de la zafra</h3><p>Soluciones financieras para responder a las necesidades de tu producción, desde la planificación hasta el cierre de la campaña.</p><ServicesModal /></div></div>
        <div className="values"><article><div className="value-image"><img src={`${A}integrity.png`} alt="Productores conversando durante la cosecha" loading="lazy" /></div><h3>Fe para actuar con integridad</h3><p>Tomamos cada decisión con responsabilidad, respeto y conciencia de su impacto.</p></article><article><div className="value-image family-image"><img src={`${A}family.png`} alt="Una familia de productores junto a su cosechadora" loading="lazy" /></div><div className="family-copy"><h3>Familia para valorar lo que realmente importa</h3><p>Construimos relaciones duraderas, basadas en la confianza, la cooperación y el compromiso con quienes nos rodean.</p></div></article></div>
      </section>
      <div className="bottom-wrap"><section className="history" id="historia" aria-labelledby="history-title"><img className="history-background" src={`${A}history-field.png`} alt="" loading="lazy" /><img className="history-curve" src={`${A}curve.svg`} alt="" loading="lazy" /><div className="history-content"><img className="sarabia" src={`${A}sarabia.svg`} width="114" height="64" alt="Grupo Sarabia" /><div><p className="overline">Somos una empresa del Grupo Sarabia</p><h2 id="history-title">Más de 30 años de experiencia en el agro respaldan nuestro conocimiento del campo</h2></div><Action href="/historia" filled>Nuestra historia</Action></div></section>
<SiteFooter /></div>
    </main>
  </>;
}
