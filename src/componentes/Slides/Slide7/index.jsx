"use client";
export default function Slide7() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Pedro</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>O Confronto Arquitetônico</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.4rem' }}>
          As diferenças estruturais direcionam cada modelo para propósitos distintos no ecossistema de TI.
        </p>
        
        <div className="gamma-grid">
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 229, 255, 0.4)', background: 'rgba(0, 229, 255, 0.05)' }}>
            <div className="gamma-card-title" style={{ color: '#00E5FF', textAlign: 'center', fontSize: '1.4rem' }}>Forte (Tightly Coupled) </div>
            <ul className="slide-content" style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
              <li><strong>Arquitetura Centralizada:</strong> Um sistema monolítico robusto de alto custo.</li>
              <li><strong>Gerenciamento:</strong> SO central escalona processos diretamente no hardware.</li>
              <li><strong>Desempenho:</strong> Latência mínima (tempo de resposta imediato inter-processo).</li>
              <li><strong>Falha:</strong> Comprometimento global.</li>
            </ul>
          </div>
          
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.4)', background: 'rgba(0, 255, 136, 0.05)' }}>
            <div className="gamma-card-title" style={{ textAlign: 'center', fontSize: '1.4rem' }}>Fraco (Loosely Coupled) </div>
            <ul className="slide-content" style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
              <li><strong>Arquitetura Distribuída:</strong> Vários computadores (Commodity Hardware).</li>
              <li><strong>Gerenciamento:</strong> Via Middleware ou rede distribuída (ex: Kubernetes).</li>
              <li><strong>Desempenho:</strong> Volume massivo (alta vazão horizontal), porém com latência de rede.</li>
              <li><strong>Falha:</strong> Isolada, mantendo o serviço online.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}