'use client';

import { type ChangeEvent, type FormEvent, useRef, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const directors = [
  ['Director Presidente', 'José Marcos Sarabia'],
  ['Vicepresidente', 'Paulo Sergio Sarabia'],
  ['Director', 'Antonio Ivar Sarabia'],
  ['Director Titular', 'Eloisa Sarabia'],
];

// Preserve the existing executive roster while applying the approved governance copy.
const executives = [
  ['Gerente General', 'Walter Sanabra'],
  ['ALA/FT + DPO', 'Eduardo Monteiro'],
  ['Gerente Comercial', 'Gabriel dos Santos'],
  ['Coordinación Operativa', 'Carlos Santana'],
];

const boardIntro = 'El Directorio de GS3 S.A. es el órgano máximo de gobierno de la entidad.';
const boardDescription = 'El Directorio es responsable de la definición estratégica, la supervisión de la gestión y el cumplimiento de los estándares de buen gobierno corporativo aplicables a la entidad.';
const executivesIntro = 'La Plana Ejecutiva de GS3 S.A. está conformada por los funcionarios responsables de la operación cotidiana de la entidad.';
const regulatoryFramework = 'GS3 S.A. adopta los estándares de buen gobierno corporativo establecidos por el Banco Central del Paraguay y las guías específicas aplicables a los operadores de crédito.';
const graduality = 'La implementación de órganos, comités y políticas sigue el cronograma del plan de implementación, sin formalismos sin sustancia.';

function GovernanceSections() {
  const principles = [
    ['Proporcionalidad:', 'las exigencias se adecuan al tamaño y complejidad operativa de la entidad y se escalan con el crecimiento.'],
    ['Gradualidad:', graduality],
    ['Razonabilidad:', 'cada medida adoptada responde a una justificación técnica y regulatoria verificable.'],
    ['Congruencia:', 'las decisiones de gobierno son coherentes con el propósito del Grupo Sarabia y con el posicionamiento de GS3.'],
  ];
  return <div className="governance-overview">
    <section className="governance-row"><h2>Marco regulatorio</h2><p>{regulatoryFramework}</p></section>
    <section className="governance-row"><h2>Nuestro compromiso con el buen gobierno</h2><p>GS3 S.A. presenta su Manual de Gobierno Corporativo como expresión de su compromiso con la integridad, la transparencia y el buen gobierno. Como OCD supervisado por la Superintendencia de Bancos del BCP, GS3 asume que un gobierno corporativo sólido es la base sobre la cual se construye la confianza del público, de los clientes, de los accionistas y de los reguladores.</p></section>
    <section className="governance-principles"><h2>Nuestro gobierno corporativo se articula en torno a cuatro principios rectores:</h2><div className="governance-principle-grid">{principles.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
  </div>;
}

function ManagementCards() {
  return <>
    <section className="governance-management">
      <h2>Directorio</h2><div className="governance-management-copy"><p>{boardIntro}</p><p>{boardDescription}</p></div>
      <div className="governance-people-grid governance-directors">{directors.map(([role, name]) => <article key={role}><span>{role}</span><h3>{name}</h3></article>)}</div>
    </section>
    <section className="governance-management">
      <h2>Plana Ejecutiva</h2><p className="governance-management-copy">{executivesIntro}</p>
      <div className="governance-people-grid">{executives.map(([role, name]) => <article key={role}><span>{role}</span><h3>{name}</h3></article>)}</div>
    </section>
  </>;
}

export function ReportsContent() {
  return <div className="reports-content"><ManagementCards/><GovernanceSections/></div>;
}

export function GovernanceContent() {
  return <div className="governance-content"><GovernanceSections/><ManagementCards/></div>;
}

export function ClaimsManagementContent() {
  return <div className="policy-intro claims-intro"><p>Nuestros canales de consulta y mecanismos de atención de sugerencias y reclamos, que nos permiten mejorar y satisfacer plenamente a nuestros clientes.</p></div>;
}

function sendComplaint(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const attachments = form.getAll('attachment').filter((value): value is string => typeof value === 'string' && value.length > 0);
  const body = [
    `Tipo de presentación: ${form.get('type')}`,
    `Nombre completo: ${form.get('name')}`,
    `RUC: ${form.get('document')}`,
    `Correo electrónico: ${form.get('email')}`,
    `Teléfono: ${form.get('phone')}`,
    `Producto u operación: ${form.get('product')}`,
    '',
    `Descripción: ${form.get('description')}`,
    attachments.length ? `\nArchivos seleccionados (adjuntarlos manualmente al correo): ${attachments.join(', ')}` : '',
  ].filter(Boolean).join('\n');
  window.location.href = `mailto:reclamos@gs3.com.py?subject=${encodeURIComponent(`Presentación ${form.get('type')} desde el sitio GS3`)}&body=${encodeURIComponent(body)}`;
}

function ComplaintFileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.currentTarget.files ?? []);
    if (selected.length) setFiles((current) => [...current, ...selected]);
    event.currentTarget.value = '';
  }

  function removeFile(indexToRemove: number) {
    setFiles((current) => current.filter((_, index) => index !== indexToRemove));
  }

  return <div className="complaint-upload-field form-full">
    <label id="complaint-upload-label">Adjuntar documentos</label>
    <input ref={inputRef} className="complaint-upload-input" type="file" multiple aria-labelledby="complaint-upload-label" tabIndex={-1} onChange={addFiles} />
    {files.map((file, index) => <input type="hidden" name="attachment" value={file.name} key={`attachment-${file.name}-${file.size}-${file.lastModified}-${index}`} />)}
    <div className={`complaint-upload${files.length ? ' is-filled' : ''}`}>
      {files.map((file, index) => <span className="complaint-upload-chip" key={`${file.name}-${file.size}-${file.lastModified}-${index}`}>
        <span>{file.name}</span>
        <button type="button" aria-label={`Remover ${file.name}`} onClick={() => removeFile(index)}><img src="/assets/close-fill.svg" alt="" aria-hidden="true" /></button>
      </span>)}
      <button className="complaint-upload-action" type="button" onClick={() => inputRef.current?.click()}>
        {files.length ? <><span aria-hidden="true">+</span><span>Adjuntar</span></> : <><span>Adjuntar</span><span>Documentación</span></>}
      </button>
    </div>
  </div>;
}

export function ComplaintsContent() {
  return <>
    <div className="policy-intro"><p>Este es el canal de GS3 para que nuestros clientes presenten reclamos, consultas o denuncias sobre los productos y servicios financieros que ofrecemos. Todos nuestros canales de atención son gratuitos.</p></div>
    <section className="faq complaints-content">
      <div className="policy-row"><h2>¿Qué puede presentar?</h2><div>
        <p><strong>Reclamo:</strong> si no está conforme con un producto, servicio, cobro o atención recibida.</p>
        <p><strong>Consulta:</strong> si tiene dudas sobre una operación, producto o servicio.</p>
        <p><strong>Denuncia:</strong> si detecta un cargo u operación no reconocida o un posible uso indebido de sus datos.</p>
      </div></div>
      <div className="policy-row"><h2>¿Qué necesita?</h2><div><p>Nombre y documento de identidad o RUC, correo electrónico o teléfono y una breve descripción de su presentación. Puede adjuntar documentos de respaldo si lo desea.</p></div></div>
      <div className="policy-row"><h2>¿Cómo presentar?</h2><div>
        <p>Puede utilizar cualquiera de estos canales gratuitos:</p>
        <div className="report-channels">
          <article><h4>Formulario web</h4><span>Disponible las 24 horas en esta página.</span></article>
          <article><h4>Correo electrónico</h4><span><a href="mailto:reclamos@gs3.com.py">reclamos@gs3.com.py</a></span></article>
          <article><h4>Atención presencial</h4><span>Avda. Aviadores del Chaco N.º 3301, Asunción<br/>Lunes a viernes, de 08:00 a 17:00</span></article>
        </div>
      </div></div>
      <div className="policy-row"><h2>¿Cuándo le respondemos?</h2><div><p>Le responderemos por escrito dentro de los 15 días hábiles. Si necesitamos más tiempo, le informaremos el motivo y una nueva fecha de respuesta, que no excederá 10 días hábiles adicionales.</p></div></div>
      <div className="policy-row"><h2>Sus datos</h2><div><p>Usaremos sus datos únicamente para atender su presentación, conforme a nuestra <a href="/transparencia/privacidad">Política de Privacidad y Protección de Datos</a>.</p></div></div>
      <div className="policy-row complaint-form-row"><div>
        <form className="complaint-form" onSubmit={sendComplaint}>
          <div className="form-grid">
            <label>Nombre completo<input name="name" autoComplete="name" placeholder="Su nombre" required /></label>
            <label>RUC<input name="document" placeholder="00000000-0" required /></label>
            <label>Correo electrónico<input name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" required /></label>
            <label>Teléfono<input name="phone" type="tel" autoComplete="tel" placeholder="+595 981 123 456" required /></label>
            <div className="form-select-field"><label htmlFor="complaint-type">Tipo de presentación</label><Select name="type" defaultValue="Reclamo"><SelectTrigger id="complaint-type" className="complaint-type-select-trigger"><SelectValue /><img src="/assets/arrow-down-s-line.svg" alt="" aria-hidden="true" /></SelectTrigger><SelectContent position="popper" align="start" className="complaint-type-select-content"><SelectItem value="Reclamo" className="complaint-type-select-item">Reclamo</SelectItem><SelectItem value="Consulta" className="complaint-type-select-item">Consulta</SelectItem><SelectItem value="Denuncia" className="complaint-type-select-item">Denuncia</SelectItem></SelectContent></Select></div>
            <label>Producto u operación<input name="product" placeholder="Préstamo personal" /></label>
            <ComplaintFileUpload />
            <label className="form-full">Descripción<textarea name="description" rows={5} placeholder="Indique qué ocurrió y cuándo." required /></label>
          </div>
          <label className="consent"><input type="checkbox" required /><span>He leído la <a href="/transparencia/privacidad">Política de Privacidad y Protección de Datos</a>.</span></label>
          <button className="action action-filled" type="submit">Enviar</button>
        </form>
        <p className="complaint-after-note">En caso de no estar conforme con la respuesta, el cliente podrá acudir a la Superintendencia de Bancos del BCP dentro de los 60 días hábiles siguientes o a la Secretaría de Defensa del Consumidor (SEDECO).</p>
      </div></div>
    </section>
  </>;
}
