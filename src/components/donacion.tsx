import {
  donationTools,
  donationEquipment,
} from '@/data/content';


interface DonationListProps {
  title: string;
  items: {
    name: string;
    description: string;
  }[];
}

function DonationList({ title, items }: DonationListProps) {
  return (
    <div className="donation-category">
      <div className="donation-category__header">
        <h3>{title}</h3>
        <span>{items.length} opciones</span>
      </div>

      <div className="donation-category__list">
        {items.map((item, index) => (
          <article
            className="donation-item"
            key={item.name}
          >
            <div className="donation-item__number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="donation-item__content">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function DonationSection() {
  return (
    <section className="donation-section">
      <div className="donation-header">
        <span className="section-label">
          APOYA EL PROGRAMA
        </span>

        <h2>Materiales y equipo que puedes donar</h2>

        <p>
          Tu donación puede contribuir a llevar soluciones de
          electrificación a comunidades que lo necesitan.
          Consulta los materiales y equipos que pueden ser
          recibidos.
        </p>
      </div>

      <div className="donation-categories">
        <DonationList
          title="Herramientas"
          items={donationTools}
        />

        <DonationList
          title="Equipo"
          items={donationEquipment}
        />
      </div>
    </section>
  );
}
