"use client";
export default function Slide5() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {}
         <img src="/slide 6.png" alt="Diagrama de Computadores em Rede" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Arthur</div>
        <h1 className="slide-title">Fracamente Acoplados</h1>
        <p className="slide-subtitle">Loosely Coupled</p>
        <p className="slide-content">
          O poder da independência. Neste modelo, cada processador faz parte de um "nó autônomo". <strong>Cada unidade possui sua própria memória local</strong> e, muitas vezes, seu próprio Sistema Operacional.
        </p>
        <div className="gamma-card" style={{ marginTop: '1.5rem' }}>
          <div className="gamma-card-title">A Rede como Barramento</div>
          <p className="slide-content">
            A comunicação e a colaboração entre os processadores ocorrem por meio da <strong>troca ativa de mensagens</strong> através de uma infraestrutura externa de rede (Cabos Metálicos, Switches ou Fibra Ótica).
          </p>
        </div>
      </div>
    </div>
  );
}