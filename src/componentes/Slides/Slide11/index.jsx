"use client";
export default function Slide11() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {/* Visual mantido */}
         <img src="/slide 9.webp" alt="Comparação Visual entre chips SMP e chips AMP" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Guilherme</div>
        <h1 className="slide-title" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)' }}>Multiprocessamento Assimétrico (AMP) </h1>
        <p className="slide-subtitle">A Especialização Estratégica</p>
        <p className="slide-content">
          No modelo AMP, a simetria é intencionalmente quebrada. Os processadores <strong>não são idênticos</strong> e possuem finalidades, velocidades, arquiteturas e níveis de privilégio heterogêneos. Historicamente, envolvia uma CPU mestre governando as escravas.
        </p>
        
        <div className="gamma-card" style={{ marginTop: '1.5rem', borderColor: 'rgba(0, 229, 255, 0.3)' }}>
          <div className="gamma-card-title">Aplicações Atuais: Arquitetura big.LITTLE </div>
          <p className="slide-content" style={{ fontSize: '1.2rem' }}>
            A aplicação mais bem-sucedida do AMP  moderno ocorre nos SoCs ARM de smartphones (ex: Snapdragon, Apple Silicon). O SO direciona cargas pesadas (Jogos, IA) para clusters de alta performance ("big"), enquanto processos em stand-by rodam em núcleos minúsculos de baixíssimo consumo ("LITTLE"). Isso resolve a barreira energética de forma brilhante.
          </p>
        </div>
      </div>
    </div>
  );
}