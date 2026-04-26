"use client";
export default function Slide9() {
  return (
    <div className="slide-container layout-standard">
      <div className="glass-panel midia-box">
         {/* Visual mantido */}
         <img src="/slide 7.png" alt="Esquema de Memória Compartilhada por Múltiplas CPUs" />
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Thiago</div>
        <h1 className="slide-title">Multiprocessamento Simétrico (SMP) </h1>
        <p className="slide-subtitle">A Democracia do Hardware</p>
        <p className="slide-content">
          O modelo SMP  é a implementação dominante em dispositivos modernos que operam de forma fortemente acoplada. Nele, a regra principal é a <strong>equidade arquitetônica</strong>.
        </p>
        <ul className="slide-content" style={{ marginTop: '-50px', fontSize: '1.5rem' }}>
          <li><strong>Núcleos Idênticos:</strong> Todos os processadores possuem exatamente a mesma capacidade computacional, frequência e arquitetura de instruções.</li>
          <li><strong>Mesmos Privilégios:</strong> Qualquer processador pode executar tanto instruções vitais do kernel do SO quanto código de espaço do usuário.</li>
          <li><strong>Compartilhamento Universal:</strong> O acesso a interrupções (IRQs), portas de entrada/saída (E/S) e memória é simétrico. O SO funciona como um maestro balanceando tarefas (threads) dinamicamente.</li>
        </ul>
      </div>
    </div>
  );
}