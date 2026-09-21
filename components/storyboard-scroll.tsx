type StoryCard = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
};

const cards: StoryCard[] = [
  { eyebrow: 'GRUPO SARABIA', title: 'Más de 30 años viviendo y transformando el agro', paragraphs: ['Durante más de tres décadas, Grupo Sarabia ha construido su historia dentro del agronegocio, desarrollando empresas, soluciones y nuevos modelos de negocio en distintos eslabones de la cadena.', 'Esa trayectoria nos permitió conocer el campo desde adentro: sus personas, sus desafíos, sus ciclos y las decisiones que mueven el negocio todos los días.', 'A lo largo de nuestra historia, la innovación ha sido una forma de evolucionar, anticiparnos a los cambios y seguir creando valor para el agro en América Latina.'], image: '/assets/history-story-sarabia.png', alt: 'Instalaciones del Grupo Sarabia' },
  { eyebrow: 'H2O INNOVATION', title: 'Nace un movimiento', paragraphs: ['H2O Innovation nace para transformar el conocimiento acumulado por Grupo Sarabia en tecnología, datos, inteligencia y nuevos productos digitales.', 'Como empresa de tecnología e innovación del Grupo, conectamos conocimiento del negocio, ingeniería, datos, inteligencia artificial e inteligencia territorial para crear soluciones capaces de transformar la forma en que empresas y productores toman decisiones.', 'Más que desarrollar tecnología, construimos capacidades y nuevos negocios para impulsar la evolución del ecosistema del agro.'], image: '/assets/history-story-h2o.png', alt: 'Presentación de H2O Innovation' },
  { eyebrow: 'GS3 FINTECH', title: 'Una fintech creada desde el agro', paragraphs: ['De la unión entre el conocimiento de más de 30 años de Grupo Sarabia y las capacidades tecnológicas de H2O Innovation nace GS3.', 'Una fintech creada desde el agro, para entender las necesidades financieras de productores y empresas del sector con la profundidad de quien conoce su realidad.', 'Iniciamos nuestras operaciones en Brasil desarrollando soluciones financieras y experiencias digitales pensadas para los ciclos, desafíos y oportunidades del campo.'], image: '/assets/history-story-gs3.png', alt: 'Equipe GS3 trabalhando em uma reunião' },
];

export function StoryboardScroll() {
  return <section className="storyboard-scroll" aria-labelledby="storyboard-title"><div className="storyboard-heading"><p>NUESTRA HISTORIA</p><h2 id="storyboard-title">Conocemos el agro desde adentro</h2></div><div className="storyboard-stage">{cards.map((card) => <article className="storyboard-card" key={card.title}><img className="storyboard-image" src={card.image} alt={card.alt} loading="lazy" /><div className="storyboard-copy"><p className="storyboard-eyebrow">{card.eyebrow}</p><h3>{card.title}</h3><div className="storyboard-body">{card.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></article>)}</div></section>;
}
