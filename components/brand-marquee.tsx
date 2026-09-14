import type { ReactNode } from 'react';
export function BrandMarquee({children}:{children:ReactNode}){
 return <section className="brand-marquee" aria-label="Empresas del Grupo Sarabia">
  <div className="brand-marquee-window"><div className="brand-marquee-track"><div className="brand-marquee-set">{children}</div><div className="brand-marquee-set" aria-hidden="true" inert>{children}</div></div></div>
 </section>;
}
