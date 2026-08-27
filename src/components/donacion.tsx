import { electrificacionDonations } from '../data/content';

export default function DonationSection() {
  return (
    <section className="donation-section">
      <div className="donation-header">
        <span className="section-label">APOYA EL PROGRAMA</span>

        <h2>Materiales que puedes donar</h2>

        <p>
          Contribuye a llevar soluciones de electrificación a las comunidades
          mediante la donación de materiales y equipos.
        </p>
      </div>

      <div className="donation-list">
        {electrificacionDonations.map((item) => (
          <article className="donation-item" key={item.name}>
            <div className="donation-icon">
              ✓
            </div>

            <div className="donation-content">
              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="donation-location">
                <span>📍</span>
                <strong>¿Dónde donarlo?</strong>
                <span>{item.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

