"use client";
export default function Slide5() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {/* Visual mantido */}
         <img src="/slide 6.png" alt="Diagrama de Computadores em Rede" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Arthur</div>
        <h1 className="slide-title">Sistemas Fracamente Acoplados</h1>
        <p className="slide-subtitle">Loosely Coupled </p>
        <p className="slide-content">
          Nesta arquitetura distribuída, o conceito de centralização desaparece. <strong>Sistemas fracamente acoplados  são compostos por nós computacionais autônomos.</strong>
        </p>
        <div className="gamma-card" style={{ marginTop: '1.5rem', background: 'rgba(255, 255, 255, 0.03)' }}>
          <div className="gamma-card-title">Troca de Mensagens (Message Passing)</div>
          <p className="slide-content" style={{ fontSize: '1.5rem' }}>
            Cada nó (servidor ou máquina) possui sua própria memória local privada e seu próprio Sistema Operacional de host. A comunicação entre os nós é assíncrona, feita exclusivamente via infraestrutura de rede externa (TCP/IP, InfiniBand) utilizando protocolos padronizados de troca de mensagens.
          </p>
        </div>
      </div>
    </div>
  );
}