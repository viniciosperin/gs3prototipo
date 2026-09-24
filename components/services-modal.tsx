'use client';

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger } from '@/components/ui/dialog';

const services = [
  ['Crédito Rural', 'Financiamos el capital de giro de la actividad agropecuaria: los fondos que el productor y las redes de distribución necesitan para sostener su flujo a lo largo de todo el ciclo productivo.', '/assets/bank-card.svg'],
  ['Descuento de documentos', 'Convertí en liquidez inmediata los cheques diferidos y pagarés que ya tenés en tu poder, sin esperar la fecha de vencimiento.', '/assets/receipt-fill.svg'],
  ['Anticipo de facturas', 'Con el anticipo de facturas, GS3 te adelantamos el importe de tus facturas por cobrar y transformás tu crédito comercial en capital disponible hoy.', '/assets/file-text-fill.svg'],
];

export function ServicesModal({ triggerLabel = 'Nuestros Servicios', triggerClassName = 'action', showTriggerArrow = true, onTriggerClick }: { triggerLabel?: string; triggerClassName?: string; showTriggerArrow?: boolean; onTriggerClick?: () => void }) {
  return <Dialog>
    <DialogTrigger asChild><button className={triggerClassName} type="button" onClick={onTriggerClick}>{triggerLabel}{showTriggerArrow&&<img src="/assets/arrow-green.svg" width="20" height="20" alt="" />}</button></DialogTrigger>
    <DialogContent className="services-modal" showCloseButton={false}>
      <div className="services-heading">
        <DialogClose className="modal-close" aria-label="Cerrar servicios"><img src="/assets/modal-close.svg" width="24" height="24" alt="" /></DialogClose>
        <img className="services-logo" src="/assets/logo.svg" width="105" height="26" alt="GS3" />
        <DialogTitle className="services-title"><span>Somos mucho más que crédito.</span> Somos el respaldo que tu producción necesita para seguir avanzando.</DialogTitle>
      </div>
      <div className="services-body">
        <div className="services-intro"><h3>Soluciones financieras para el agronegocio</h3><DialogDescription className="services-description">Como Otorgante de Crédito Dinerario (OCD), acompañamos a productores, distribuidores y empresas de la cadena agropecuaria con soluciones financieras adaptadas a sus distintas necesidades de capital y liquidez. Evaluamos cada operación con conocimiento del sector, considerando los ciclos productivos, el flujo comercial y la realidad de quienes trabajan en el agro.</DialogDescription></div>
        <div className="service-cards">{services.map(([title,description,icon])=><article key={title}><img src={icon} width="24" height="24" alt="" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div>
    </DialogContent>
  </Dialog>;
}
