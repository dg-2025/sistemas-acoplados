"use client";
export default function Slide7() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Pedro</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>O Confronto Direto</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          As diferenças fundamentais na arquitetura ditam onde cada sistema deve ser aplicado no mundo real.
        </p>
        
        <div className="gamma-grid">
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 229, 255, 0.4)', background: 'rgba(0, 229, 255, 0.05)' }}>
            <div className="gamma-card-title" style={{ color: '#00E5FF', textAlign: 'center', fontSize: '1.5rem' }}>Forte (Tightly)</div>
            <ul className="slide-content" style={{ marginTop: '1rem' }}>
              <li><strong>Arquitetura:</strong> Centralizada. Uma grande máquina robusta.</li>
              <li><strong>Gestão:</strong> O Sistema Operacional governa tudo.</li>
              <li><strong>Desempenho:</strong> Sincronismo instantâneo.</li>
            </ul>
          </div>
          
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.4)', background: 'rgba(0, 255, 136, 0.05)' }}>
            <div className="gamma-card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>Fraco (Loosely)</div>
            <ul className="slide-content" style={{ marginTop: '1rem' }}>
              <li><strong>Arquitetura:</strong> Distribuída. Várias máquinas menores operando juntas.</li>
              <li><strong>Gestão:</strong> Sistemas de controle distribuído (balanceadores).</li>
              <li><strong>Desempenho:</strong> Volume massivo de requisições.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}