"use client";
export default function Slide3() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {}
         <img src="/Slide 5.jpg" alt="Diagrama de Sistema Fortemente Acoplado" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Daniel</div>
        <h1 className="slide-title">Fortemente Acoplados</h1>
        <p className="slide-subtitle">Tightly Coupled</p>
        <p className="slide-content">
          Nesta arquitetura altamente integrada, os processadores operam de forma interdependente, <strong>compartilhando rigorosamente o mesmo espaço físico de memória principal</strong>.
        </p>
        <ul className="slide-content" style={{ marginTop: '1.5rem' }}>
          <li><strong>Memória Compartilhada:</strong> Todos os núcleos enxergam e acessam os mesmos dados simultaneamente.</li>
          <li><strong>Comunicação Direta:</strong> A troca de informações ocorre em altíssima velocidade pelos barramentos da própria placa-mãe.</li>
          <li><strong>Relógio Único:</strong> Operam sob uma mesma sincronia de tempo, garantindo precisão milimétrica em cálculos complexos.</li>
        </ul>
      </div>
    </div>
  );
}