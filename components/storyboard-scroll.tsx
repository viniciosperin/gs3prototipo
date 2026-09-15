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
    eyebrow: 'LA EMPRESA DE TECNOLOGIA DEL GRUPO',
    title: 'Nace un movimiento',
    paragraphs: [
      'H2O Innovation nace para transformar tendencias tecnológicas y oportunidades en capacidades, soluciones y nuevos negocios para las empresas del Grupo Sarabia y el agronegocio.',
      'A partir de una visión orientada al futuro, conecta estrategia, tecnología, datos y conocimiento para desarrollar productos, impulsar nuevas oportunidades y acompañar la evolución del sector.',
    ],
    image: '/assets/history-imgImg2.png',
    alt: 'Tecnología e innovación de H2O Innovation',
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
];

export function StoryboardScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveCard = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const next = Math.min(cards.length - 1, Math.floor(progress * cards.length));
      setActive((current) => current === next ? current : next);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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
