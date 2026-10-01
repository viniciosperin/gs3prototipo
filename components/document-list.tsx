const documents = [
  { slug: 'gerenciamento-de-risco-julho-2026', title: 'Gerenciamento de Risco – Julho de 2026' },
  { slug: 'politica-de-transparencia-julho-2026', title: 'Política de Transparência – Julho de 2026' },
  { slug: 'informe-de-gestion-julio-2026', title: 'Informe de Gestión – Julio de 2026' },
];

const normativeDocuments = [
  { slug: 'lavado-de-dinero-ley-1015-1997', title: 'Lavado de dinero - Ley 1015/1997' },
  { slug: 'cambios-ley-1015-ley-3783-2009', title: 'Cambios a la Ley 1015 - Ley 3783/2009' },
  { slug: 'actualizacion-ley-1015-ley-6497-2019', title: 'Actualización de la Ley 1015 - Ley 6497/2019' },
  { slug: 'activos-virtuales-ley-6797-2021', title: 'Activos virtuales - Ley 6797/2021' },
  { slug: 'registro-otorgantes-credito-res-7-2019', title: 'Otorgantes de crédito - Resolución 7/2019' },
  { slug: 'inscripcion-casas-credito-res-132-2019', title: 'Inscripción de casas de crédito - Resolución 132/2019' },
  { slug: 'reclamos-consultas-res-2-2021', title: 'Reclamos y consultas - Resolución 2/2021' },
  { slug: 'tasas-interes-res-17-2021', title: 'Tasas de interés - Resolución 17/2021' },
  { slug: 'gobierno-corporativo-res-16-2022', title: 'Gobierno corporativo - Resolución 16/2022' },
  { slug: 'transparencia-credito-res-30-2022', title: 'Transparencia para otorgantes de crédito - Resolución 30/2022' },
  { slug: 'estadisticas-reclamos-res-27-2022', title: 'Estadísticas de reclamos - Resolución 27/2022' },
];

export function NormativeDocuments() {
  return <section className="documents normative-documents" aria-labelledby="normative-documents-title">
    <div className="documents-heading">
      <h2 id="normative-documents-title">Resúmenes en lenguaje sencillo</h2>
    </div>
    <p className="normative-note">Estos materiales explican las normas de forma sencilla. No sustituyen el texto oficial ni confirman su vigencia actual.</p>
    <div className="document-rows">
      {normativeDocuments.map(document => <a className="document-row normative-document-row" key={document.slug} href={`/documents/${document.slug}.pdf`} target="_blank" rel="noreferrer" aria-label={`Abrir resumen en PDF: ${document.title}`}>
        <span className="document-pdf"><img src="/assets/doc-pdf.svg" width="24" height="24" alt="" /></span>
        <span className="document-content"><span>{document.title}</span><small>Resumen informativo · PDF</small></span>
        <span className="document-cta">Conferir<span className="document-arrow" aria-hidden="true"><img src="/assets/arrow-document.svg" width="20" height="20" alt="" /></span></span>
      </a>)}
    </div>
  </section>;
}

export function DocumentList({ multiple = false, year = false }: { multiple?: boolean; year?: boolean }) {
  const items = multiple ? documents : documents.slice(0, 1);

  return <section className="documents" aria-labelledby="documents-title">
    <div className="documents-heading"><h2 id="documents-title">Documentos</h2>{year && <span>Año: <strong>2026</strong></span>}</div>
    <div className="document-rows">
      {items.map(document => <a className="document-row" key={document.slug} href={`/documents/${document.slug}.pdf`} target="_blank" rel="noreferrer" aria-label={`Abrir PDF: ${document.title}`}>
        <span className="document-pdf"><img src="/assets/doc-pdf.svg" width="24" height="24" alt="PDF" /></span>
        <span className="document-content"><span>{document.title}</span><small>PDF · 2026</small></span>
        <span className="document-cta">Conferir<span className="document-arrow" aria-hidden="true"><img src="/assets/arrow-document.svg" width="20" height="20" alt=""/></span></span>
      </a>)}
    </div>
  </section>;
}
