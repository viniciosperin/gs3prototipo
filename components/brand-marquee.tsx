'use client';
import { useState, type ReactNode } from 'react';
export function BrandMarquee({children}:{children:ReactNode}){
 const [paused,setPaused]=useState(false);
 return <section className="brand-marquee" aria-label="Empresas del Grupo Sarabia" data-paused={paused}>
  <div className="brand-marquee-window"><div className="brand-marquee-track"><div className="brand-marquee-set">{children}</div><div className="brand-marquee-set" aria-hidden="true" inert>{children}</div></div></div>
  <button type="button" className="brand-marquee-toggle" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'Reanudar movimiento':'Pausar movimiento'}</button>
 </section>;
}
