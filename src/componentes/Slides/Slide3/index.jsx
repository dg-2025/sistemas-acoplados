"use client";
export default function Slide3() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {/* Visual mantido */}
         <img src="/Slide 5.jpg" alt="Diagrama de Sistema Fortemente Acoplado" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Daniel</div>
        <h1 className="slide-title">Sistemas Fortemente Acoplados</h1>
        <p className="slide-subtitle">Tightly Coupled </p>
        <p className="slide-content">
          Em sistemas fortemente acoplados, a interdependência de hardware é máxima. Os processadores compartilham rigidamente o mesmo espaço de memória primária e um único relógio de sistema (clock).
        </p>
        <ul className="slide-content" style={{ marginTop: '1.5rem', fontSize: 'clamp(1.3rem, 1.2vw, 1.2rem)' }}>
          <li><strong>Memória Global e UMA/NUMA:</strong> Qualquer modificação feita por um núcleo na memória é imediatamente visível para os demais. A latência de comunicação é medida em nanossegundos (ns).</li>
          <li><strong>Barramentos Dedicados:</strong> A troca de dados ocorre inteiramente através das trilhas da placa-mãe (FSB, QPI, HyperTransport).</li>
          <li><strong>Controle Monolítico:</strong> Um único Sistema Operacional possui controle soberano sobre todos os recursos físicos e escalona as <i>threads</i> ativamente.</li>
        </ul>
      </div>
    </div>
  );
}