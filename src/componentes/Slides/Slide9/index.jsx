"use client";
export default function Slide9() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {}
         <img src="/slide 7.png" alt="Esquema de Memória Compartilhada por Múltiplas CPUs" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Thiago</div>
        <h1 className="slide-title">Multiprocessamento Simétrico (SMP)</h1>
        <p className="slide-subtitle">A Democracia do Hardware</p>
        <p className="slide-content">
          O SMP é uma aplicação prática clássica dos Sistemas Fortemente Acoplados. No padrão Simétrico, <strong>todos os núcleos de processamento são idênticos</strong> fisicamente e possuem o mesmo nível de privilégio.
        </p>
        <ul className="slide-content" style={{ marginTop: '1.5rem' }}>
          <li>Acessam o mesmo espaço de memória.</li>
          <li>Compartilham o mesmo acesso aos dispositivos de Entrada/Saída.</li>
          <li>São gerenciados por um único Sistema Operacional centralizado.</li>
        </ul>
      </div>
    </div>
  );
}