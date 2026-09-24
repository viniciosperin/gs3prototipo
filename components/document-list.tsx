const documents = [
  { slug: 'gerenciamento-de-risco-julho-2026', title: 'Gerenciamento de Risco – Julho de 2026' },
  { slug: 'politica-de-transparencia-julho-2026', title: 'Política de Transparência – Julho de 2026' },
  { slug: 'informe-de-gestion-julio-2026', title: 'Informe de Gestión – Julio de 2026' },
];

export function NormativeDocuments() {
  return <section className="documents normative-documents" aria-labelledby="normative-documents-title">
    <div className="documents-heading">
      <h2 id="normative-documents-title">Documentos</h2>
      <label className="normative-year"><span>Año:</span><span className="normative-year-select"><select defaultValue="2026" aria-label="Año del documento"><option value="2026">2026</option></select><img src="/assets/arrow-down-s-line.svg" alt="" /></span></label>
    </div>
    <div className="document-rows">
      <article className="document-row normative-document-row">
        <span className="document-pdf"><img src="/assets/doc-pdf.svg" width="24" height="24" alt="" /></span>
        <span className="document-content"><span>Gerenciamento de Risco – Julho de 2026</span><small>Gerenciamento de Risco – Julho de 2026</small></span>
        <span className="document-cta">Conferir<span className="document-arrow" aria-hidden="true"><img src="/assets/arrow-document.svg" width="20" height="20" alt="" /></span></span>
      </article>
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
