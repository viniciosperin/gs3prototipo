(function () {
  'use strict';

  const modal = document.querySelector('.consultant-modal');
  let returnFocus = null;

  function openModal(trigger) {
    if (!modal) return;
    returnFocus = trigger;
    const subject = modal.querySelector('[name="subject"]');
    if (subject) subject.value = trigger.dataset.consultantSubject || 'Consulta comercial';
    modal.hidden = false;
    document.body.classList.add('modal-open');
    const closeButton = modal.querySelector('.consultant-close');
    if (closeButton) closeButton.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  }

  document.addEventListener('click', function (event) {
    const trigger = event.target.closest('[data-consultant-cta]');
    if (trigger) {
      event.preventDefault();
      openModal(trigger);
      return;
    }
    if (modal && (event.target.closest('.consultant-close') || event.target === modal)) closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeModal();
  });

  document.addEventListener('submit', function (event) {
    if (!event.target.matches('.consultant-form')) return;
    event.preventDefault();
    alert('Gracias. Tu consulta está lista para ser conectada con el servicio de envío del hosting.');
    event.target.reset();
    closeModal();
  });

})();
