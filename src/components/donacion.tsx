import { useState } from 'react';
import {
  donationTools,
  donationEquipment,
  donationLocation,
  donationImages,
} from '@/data/content';

type Category = 'tools' | 'equipment';

export default function DonationSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category | null>(null);

  const activeItems =
    activeCategory === 'tools'
      ? donationTools
      : donationEquipment;

  return (
    <section className="donation-section">

      <div className="donation-header">
        <span className="section-label text-brand-orange">
          APOYA EL PROGRAMA
        </span>

        <h2>
          Materiales y equipo que puedes donar
        </h2>

        <p>
          Selecciona una categoría para consultar los
          materiales que puedes aportar al programa de
          electrificación.
        </p>
      </div>

      {/* BOTONES */}
      <div className="donation-buttons">

        <button
          type="button"
          className={`donation-button ${
            activeCategory === 'tools' ? 'active' : ''
          }`}
          onClick={() =>
            setActiveCategory(
              activeCategory === 'tools' ? null : 'tools'
            )
          }
        >
          <div className="donation-button__icon">
            <img src={donationImages.herramientas} alt="Herramientas" />
          </div>

          <div className="donation-button__content">
            <h3>Herramientas</h3>

            <p>
              Herramientas necesarias para realizar
              las instalaciones.
            </p>
          </div>

          <span className="donation-button__arrow">
            {activeCategory === 'tools' ? '−' : '+'}
          </span>
        </button>

        <button
          type="button"
          className={`donation-button ${
            activeCategory === 'equipment' ? 'active' : ''
          }`}
          onClick={() =>
            setActiveCategory(
              activeCategory === 'equipment'
                ? null
                : 'equipment'
            )
          }
        >
          <div className="donation-button__icon">
            <img src={donationImages.equipo} alt="Equipo" />
          </div>

          <div className="donation-button__content">
            <h3>Equipo y materiales</h3>

            <p>
              Equipo y materiales eléctricos para los
              sistemas de electrificación.
            </p>
          </div>

          <span className="donation-button__arrow">
            {activeCategory === 'equipment' ? '−' : '+'}
          </span>
        </button>

      </div>

      {/* LISTADO */}
      {activeCategory && (
        <div className="donation-list">

          <div className="donation-list__header">
            <div>
              <span className="section-label text-brand-orange">
                {activeCategory === 'tools'
                  ? 'HERRAMIENTAS'
                  : 'EQUIPO Y MATERIALES'}
              </span>

              <h3>
                {activeCategory === 'tools'
                  ? 'Herramientas'
                  : 'Equipo y materiales'}
              </h3>
            </div>

            <span className="donation-list__count">
              {activeItems.length} artículos
            </span>
          </div>

          <div className="donation-list__items">
            {activeItems.map((item, index) => (
              <div
                className="donation-list__item"
                key={item.name}
              >
                <span className="donation-list__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="donation-list__name">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      )}
      <a
        href={donationLocation.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="donation-location-card"
      >
        <div className="donation-location-card__icon">
          📍
        </div>

        <div className="donation-location-card__content">
          <span className="section-label">
            CENTRO DE DONACIÓN
          </span>

          <h3>Edificio Empresarial Tecnotam, Piso 2</h3>

          <span className="donation-location-card__address">
            {donationLocation.address}
          </span>
        </div>

        <span className="donation-location-card__arrow">
          ↗
        </span>
      </a>

    </section>
  );
}
