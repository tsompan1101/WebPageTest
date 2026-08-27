import { estufasTransferInfo } from '../data/content';

export default function TransferSection() {
  const info = estufasTransferInfo;

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <section className="transfer-section">
      <div className="transfer-header">
        <span className="section-label">APOYO AL PROGRAMA</span>

        <h2>Datos para realizar una transferencia</h2>

        <p>
          Si deseas apoyar el programa de estufas mediante una transferencia
          bancaria, utiliza los siguientes datos del proveedor.
        </p>
      </div>

      <div className="transfer-card">
        <div className="transfer-data">
          <div className="transfer-row">
            <span>Banco</span>
            <strong>{info.banco}</strong>
          </div>

          <div className="transfer-row">
            <span>Beneficiario</span>
            <strong>{info.beneficiario}</strong>
          </div>

          <div className="transfer-row">
            <span>Cuenta</span>
            <div>
              <strong>{info.cuenta}</strong>
              <button onClick={() => copy(info.cuenta)}>
                Copiar
              </button>
            </div>
          </div>

          <div className="transfer-row">
            <span>CLABE interbancaria</span>
            <div>
              <strong>{info.clabe}</strong>
              <button onClick={() => copy(info.clabe)}>
                Copiar
              </button>
            </div>
          </div>

          <div className="transfer-row">
            <span>Referencia / concepto</span>
            <strong>{info.referencia}</strong>
          </div>
        </div>

        <div className="transfer-notice">
          <strong>Importante</strong>
          <p>
            Verifica los datos bancarios antes de realizar cualquier
            transferencia.
          </p>
        </div>
      </div>
    </section>
  );
}

