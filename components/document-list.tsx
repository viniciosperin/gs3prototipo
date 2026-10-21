"use client";

import { useState } from 'react';

const documents = [
  { slug: 'gerenciamento-de-risco-julho-2026', title: 'Gerenciamento de Risco – Julho de 2026', year: 2026 },
  { slug: 'politica-de-transparencia-julho-2026', title: 'Política de Transparência – Julho de 2026', year: 2026 },
  { slug: 'informe-de-gestion-julio-2026', title: 'Informe de Gestión – Julio de 2026', year: 2026 },
];

const normativeDocuments = [
  { slug: 'activos-virtuales-ley-6797-2021', title: 'Ley N.º 6797/2021 - Proveedores de activos virtuales' },
  { slug: 'actualizacion-ley-1015-ley-6497-2019', title: 'Ley N.º 6497/2019 - Modifica la Ley 1015' },
  { slug: 'lavado-de-dinero-ley-1015-1997', title: 'Ley N.º 1015/1997 - Prevención del lavado' },
  { slug: 'cambios-ley-1015-ley-3783-2009', title: 'Ley N.º 3783/2009 - Modifica la Ley 1015' },
  { slug: 'registro-otorgantes-credito-res-7-2019', title: 'Resolución N.º 7/2019 - Registro de otorgantes de crédito' },
  { slug: 'transparencia-credito-res-30-2022', title: 'Resolución N.º 30/2022 - Transparencia de otorgantes de crédito' },
  { slug: 'tasas-interes-res-23-2023-acta-9-23-febrero', title: 'Resolución N.º 23, Acta N.º 9 - Tasas de interés', url: 'https://www.bcp.gov.py/documents/20117/0/Resolucion%2B23%2Bacta%2B9%281%29.pdf/04511247-ca29-0702-cd22-2a9e0dabc734?t=1743517105359.pdf' },
  { slug: 'reclamos-consultas-res-2-2021', title: 'Resolución N.º 2/2021 - Reclamos y consultas' },
  { slug: 'inscripcion-casas-credito-res-132-2019', title: 'Resolución SB.SG. N.º 132/2019 - Casas de crédito' },
  { slug: 'gobierno-corporativo-res-16-2022', title: 'Resolución N.º 16 - Gobierno corporativo' },
  { slug: 'estadisticas-reclamos-res-27-2022', title: 'Resolución SB.SG. N.º 0027/2022 - Estadísticas de reclamos' },
];

export function NormativeDocuments() {
  return <section className="documents normative-documents" aria-labelledby="normative-documents-title">
    <div className="documents-heading">
      <h2 id="normative-documents-title">Documentos</h2>
    </div>
    <div className="document-rows">
      {normativeDocuments.map(document => {
        const isUnavailable = 'unavailable' in document && document.unavailable;
        const href = 'url' in document ? document.url : `/documents/${document.slug}.pdf`;
        const content = <>
          <span className="document-pdf"><img src="/assets/doc-pdf.svg" width="24" height="24" alt="" /></span>
          <span className="document-content"><span>{document.title}</span></span>
          <span className="document-cta">{!isUnavailable && <><span className="document-cta-label">Conferir</span><span className="document-arrow" aria-hidden="true"><img src="/assets/arrow-document.svg" width="20" height="20" alt="" /></span></>}</span>
        </>;

        return isUnavailable
          ? <div className="document-row normative-document-row document-pending" key={document.slug}>{content}</div>
          : <a className="document-row normative-document-row" key={document.slug} href={href} target="_blank" rel="noreferrer" aria-label={`Abrir PDF: ${document.title}`}>{content}</a>;
      })}
    </div>
  </section>;
}

export function DocumentList({ multiple = false, year = false }: { multiple?: boolean; year?: boolean }) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const availableYears = Array.from(new Set(documents.map(document => document.year))).sort((a, b) => b - a);
  const items = year
    ? documents.filter(document => document.year === selectedYear)
    : multiple ? documents : documents.slice(0, 1);

  return <section className="documents" aria-labelledby="documents-title">
    <div className="documents-heading"><h2 id="documents-title">Documentos</h2>{year && <label className="documents-year-label">Año: <select className="documents-year-select" aria-label="Seleccionar año de documentos" value={selectedYear} onChange={event => setSelectedYear(Number(event.target.value))}>{availableYears.map(documentYear => <option key={documentYear} value={documentYear}>{documentYear}</option>)}</select></label>}</div>
    <div className="document-rows">
      {items.map(document => <a className="document-row" key={document.slug} href={`/documents/${document.slug}.pdf`} target="_blank" rel="noreferrer" aria-label={`Abrir PDF: ${document.title}`}>
        <span className="document-pdf"><img src="/assets/doc-pdf.svg" width="24" height="24" alt="PDF" /></span>
        <span className="document-content"><span>{document.title}</span><small>PDF · {document.year}</small></span>
        <span className="document-cta"><span className="document-cta-label">Conferir</span><span className="document-arrow" aria-hidden="true"><img src="/assets/arrow-document.svg" width="20" height="20" alt=""/></span></span>
      </a>)}
    </div>
  </section>;
}
