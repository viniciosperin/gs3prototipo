'use client';

import { type FormEvent } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ContactModal({
  triggerClassName = 'header-nav-link',
  onTriggerClick,
}: {
  triggerClassName?: string;
  onTriggerClick?: () => void;
}) {
  function sendByEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Nombre: ${form.get('name')}`,
      `Correo: ${form.get('email')}`,
      `Teléfono: ${form.get('phone')}`,
      '',
      `Mensaje: ${form.get('message')}`,
    ].join('\n');
    window.location.href = `mailto:contacto@gs3.com.py?subject=${encodeURIComponent('Consulta desde el sitio GS3')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={triggerClassName} type="button" onClick={onTriggerClick}>Contacto</button>
      </DialogTrigger>
      <DialogContent className="contact-modal" overlayClassName="contact-modal-overlay" showCloseButton={false}>
        <header className="contact-modal-heading">
          <DialogClose className="contact-modal-close" aria-label="Cerrar contacto">
            <img src="/assets/contact-modal-close.svg" width="24" height="24" alt="" />
          </DialogClose>
          <img className="contact-modal-logo" src="/assets/contact-modal-logo.svg" width="105" height="26" alt="GS3" />
          <DialogTitle className="contact-modal-title">
            ¿Querés conocer nuestras soluciones financieras o hacer una consulta? Contanos qué necesitás.
          </DialogTitle>
        </header>
        <div className="contact-modal-body">
          <form className="contact-form" onSubmit={sendByEmail}>
            <div className="contact-fields">
              <label>Nombre Completo<input name="name" autoComplete="name" placeholder="Walter Sanabria" required /></label>
              <label>Correo Electrónico<input name="email" type="email" autoComplete="email" placeholder="waltersanabria@gs3.com.br" required /></label>
              <label>Teléfono / WhatsApp<input name="phone" type="tel" autoComplete="tel" placeholder="+595 999 000 001" required /></label>
              <label className="contact-message">Mensaje<textarea name="message" placeholder="Deixe sua mensagem..." required /></label>
            </div>
            <label className="contact-consent"><input type="checkbox" required />Acepto la Política de Protección de Datos Personales</label>
            <button className="contact-submit" type="submit">Enviar Consulta</button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
