"use client";
export default function Slide11() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {}
         <img src="/slide 9.webp" alt="Comparação Visual entre chips SMP e chips AMP" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Guilherme</div>
        <h1 className="slide-title">Multiprocessamento Assimétrico (AMP)</h1>
        <p className="slide-subtitle">A Especialização Estratégica</p>
        <p className="slide-content">
          No AMP, o paradigma muda. Os processadores <strong>não são idênticos</strong>. Eles possuem tamanhos físicos, velocidades, consumos de energia e arquiteturas totalmente díspares.
        </p>
        
        <div className="gamma-card" style={{ marginTop: '1.5rem', borderColor: 'rgba(0, 229, 255, 0.3)' }}>
          <div className="gamma-card-title">Arquitetura big.LITTLE</div>
          <p className="slide-content">
            Muito comum em smartphones modernos (como o chip Snapdragon). Possui núcleos "BIG" de alta potência para rodar jogos e cálculos pesados, acompanhados de núcleos "LITTLE" (minúsculos) que gerenciam áudio e o telefone em stand-by, garantindo uma economia de bateria brutal.
          </p>
        </div>
      </div>
    </div>
  );
}