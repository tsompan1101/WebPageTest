import { useState } from "react";
import { contacto } from "@/data/content";
import ProjectInterestForm from "./Forms";

export default function ModalityContacto() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section id="ModalidadContacto" className="contact-section">
      <div className="project-interest__header">
        <span className="section-label">UNETE</span>

        <h2>{contacto.h2}</h2>

        <p>{contacto.description}</p>
      </div>

      <div className="contact-options">

        {/* WHATSAPP */}
        <a
          href={`tel:${contacto.Number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-option"
        >
          <div className="contact-icon phone-icon">
            <span>◉</span>
          </div>

          <div className="contact-content">
            <h3>Llamanos</h3>
            <p>Contáctanos directamente</p>
          </div>
        </a>

        {/* CORREO */}
        <a
          href={`mailto:${contacto.mailto}`}
          className="contact-option"
        >
          <div className="contact-icon email-icon">
            <span>✉</span>
          </div>

          <div className="contact-content">
            <h3>Correo</h3>
            <p>Envíanos un mensaje</p>
          </div>
        </a>

        {/* FORMULARIO */}
        <button
          type="button"
          onClick={() => setIsSelected(!isSelected)}
          className={`contact-option contact-form-button ${
            isSelected ? "active" : ""
          }`}
        >
          <div className="contact-icon form-icon">
            <span>▤</span>
          </div>

          <div className="contact-content">
            <h3>Llenar el formulario</h3>
            <p>
              {isSelected
                ? "Ocultar formulario"
                : "Registra tu información"}
            </p>
          </div>
        </button>

      </div>

      {isSelected && (
        <div className="contact-form-container">
          <ProjectInterestForm />
        </div>
      )}
    </section>
  );
}
