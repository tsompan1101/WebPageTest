import { useState } from 'react';
import {
  interestedTypes,
  projectTypes,
  propertyStatus,
  municipalities,
  formData,
} from '@/data/content';

export default function ProjectInterestForm() {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  // Estado para controlar cuál pop-up está abierto ('terms', 'privacy' o null)
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(/*'/api/project-interest'*/'', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo enviar el formulario.');
      }

      setMessage(
        'Registro enviado correctamente. Recibirás un correo de confirmación.'
      );

      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al enviar el formulario.'
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="project-interest">
      <form className="project-interest__form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">
              {formData.labelName}
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              {formData.labelEmail}
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              {formData.labelPhone}
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="municipality">
              {formData.labelMunicipality}
            </label>

            <select
              id="municipality"
              name="municipality"
              required
            >
              <option value="">Selecciona un municipio</option>

              {municipalities.map((municipality) => (
                <option key={municipality} value={municipality}>
                  {municipality}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="locality">
              {formData.labelLocation}
            </label>

            <input
              id="locality"
              name="locality"
              type="text"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="interestedType">
              {formData.labelInterestedType}
            </label>

            <select
              id="interestedType"
              name="interestedType"
              required
            >
              <option value="">Selecciona una opción</option>

              {interestedTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="projectType">
              {formData.labelProjectType}
            </label>

            <select
              id="projectType"
              name="projectType"
              required
            >
              <option value="">Selecciona una opción</option>

              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field--full">
            <label>
              {formData.labelPredio}
            </label>

            <div className="radio-group">
              {propertyStatus.map((status) => (
                <label key={status} className="radio-option">
                  <input
                    type="radio"
                    name="propertyStatus"
                    value={status}
                    required
                  />

                  <span>{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="location">
              {formData.labelCoordinates}
            </label>

            <textarea
              id="location"
              name="location"
              rows={3}
              placeholder="Ej. 23.7369, -99.1411 o una referencia de ubicación"
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="documents">
              Documentos preliminares
            </label>

            <input
              id="documents"
              name="documents"
              type="file"
              accept=".pdf,application/pdf"
            />

            <small>
              Opcional. Solo archivos PDF.
            </small>
          </div>

          {/* Campo de privacidad modificado con enlaces para abrir los pop-ups */}
          <div className="form-field form-field--full">
            <label className="privacy-checkbox">
              <input
                type="checkbox"
                name="privacyConsent"
                required
              />
              <span>
                He leído y acepto los{' '}
                <button
                  type="button"
                  className="modal-link-btn"
                  onClick={() => setActiveModal('terms')}
                >
                  Términos y Condiciones
                </button>{' '}
                y el{' '}
                <button
                  type="button"
                  className="modal-link-btn"
                  onClick={() => setActiveModal('privacy')}
                >
                  Aviso de Privacidad
                </button>. *
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="project-interest__submit"
        >
          {sending ? 'Enviando...' : 'Enviar registro'}
        </button>

        {message && (
          <p className="project-interest__message">
            {message}
          </p>
        )}
      </form>

      {/* --- POP-UPS / MODALES --- */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {activeModal === 'terms' ? 'Términos y Condiciones' : 'Aviso de Privacidad'}
              </h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModal(null)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              {activeModal === 'terms' ? (
                <div>
                  <p>Aquí colocas todo el texto legal correspondiente a los términos y condiciones de uso de la plataforma y el registro de proyectos...</p>
                  <p>Puedes agregar más párrafos según sea necesario.</p>
                </div>
              ) : (
                <div>
                  <p>Aquí colocas el texto del aviso de privacidad, detallando el uso de los datos personales, finalidades y derechos ARCO...</p>
                  <p>En cumplimiento con las normativas vigentes...</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-accept-btn"
                onClick={() => setActiveModal(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
