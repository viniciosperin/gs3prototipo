'use client';

import { useEffect, useRef, useState } from 'react';

type StoryCard = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  overlay?: string;
  alt: string;
};

const cards: StoryCard[] = [
  {
    eyebrow: 'LA INNOVACIÓN SIEMPRE ESTUVO EN NUESTRO ADN',
    title: 'Una historia de evolución y liderazgo en el agro',
    paragraphs: [
      'La innovación forma parte de la esencia del Grupo Sarabia. A lo largo de nuestra historia, nos permitió transformar modelos de negocio, procesos, servicios, logística y distintas áreas del sector.',
      'Esa capacidad de evolucionar impulsó nuestra expansión en América del Sur, el desarrollo de nuevas empresas y soluciones, y una presencia cada vez más relevante en los mercados donde actuamos.',
      'Innovamos para crecer, anticiparnos a los cambios y seguir construyendo el futuro del agro.',
    ],
    image: '/assets/history-imgImg1085.png',
    alt: 'Complejo industrial del Grupo Sarabia',
  },
  {
    eyebrow: 'NUEVOS NEGÓCIOS',
    title: 'La fintech del agronegocio',
    paragraphs: [
      'GS3 nace dentro de H2O Innovation, a partir de una visión clara: construir una fintech que entienda el agronegocio desde adentro.',
      'Con operaciones iniciadas en Brasil, acompañamos a productores y empresas del sector con soluciones financieras pensadas para los tiempos, desafíos y oportunidades del campo.',
      'Somos más que crédito. Somos trabajo, familia, patria y fe. Somos GS3.',
    ],
    image: '/assets/history-imgImg1085.png',
    overlay: '/assets/history-imgImg1.png',
    alt: 'Operação financeira da GS3',
  },
  {
    eyebrow: 'LA EMPRESA DE TECNOLOGIA DEL GRUPO',
    title: 'Nace un movimiento',
    paragraphs: [
      'H2O Innovation nace para transformar tendencias tecnológicas y oportunidades en capacidades, soluciones y nuevos negocios para las empresas del Grupo Sarabia y el agronegocio.',
      'A partir de una visión orientada al futuro, conecta estrategia, tecnología, datos y conocimiento para desarrollar productos, impulsar nuevas oportunidades y acompañar la evolución del sector.',
    ],
    image: '/assets/history-imgImg2.png',
    alt: 'Tecnología e innovación de H2O Innovation',
  },
];

export function StoryboardScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const lockRef = useRef(false);
  const scrollIntentRef = useRef({ direction: 0, count: 0 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const section = sectionRef.current;
      if (!section || Math.abs(event.deltaY) < 2) return;
      const rect = section.getBoundingClientRect();
      const isPinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!isPinned || lockRef.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const next = active + direction;
      if (next < 0) return;
      if (next >= cards.length) {
        event.preventDefault();
        lockRef.current = true;
        document.querySelector('.bottom-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.setTimeout(() => {
          lockRef.current = false;
        }, 800);
        return;
      }

      event.preventDefault();
      const intent = scrollIntentRef.current;
      if (intent.direction !== direction) {
        intent.direction = direction;
        intent.count = 0;
      }
      intent.count += 1;

      if (intent.count < 2) {
        lockRef.current = true;
        window.setTimeout(() => {
          lockRef.current = false;
        }, 500);
        return;
      }

      intent.count = 0;
      lockRef.current = true;
      setActive(next);
      window.setTimeout(() => {
        lockRef.current = false;
      }, 880);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [active]);

  return (
    <section className="storyboard-scroll" ref={sectionRef} aria-label="Evolução do Grupo Sarabia">
      <div className="storyboard-sticky">
        <div className="storyboard-stage">
          {cards.map((card, index) => (
            <article className={`storyboard-card ${index === active ? 'is-active' : ''}`} key={card.title} aria-hidden={index !== active}>
              <div className="storyboard-visual">
                <img className="storyboard-background" src="/assets/history-imgFixedBg1085.png" alt="" aria-hidden="true" />
                <div className="storyboard-wash" aria-hidden="true" />
                <div className="storyboard-image-frame">
                  <img className="storyboard-image" src={card.image} alt={card.alt} />
                  {card.overlay && <img className="storyboard-image-overlay" src={card.overlay} alt="" aria-hidden="true" />}
                </div>
              </div>
              <div className="storyboard-copy">
                <p className="storyboard-eyebrow">{card.eyebrow}</p>
                <h2>{card.title}</h2>
                <div className="storyboard-body">
                  {card.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          ))}
          <div className="storyboard-indicator" aria-label={`Etapa ${active + 1} de ${cards.length}`}>
            {cards.map((card, index) => <span className={index === active ? 'is-active' : ''} key={card.title} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
