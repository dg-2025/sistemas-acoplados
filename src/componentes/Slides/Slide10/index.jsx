"use client";
import { Combine, ActivitySquare } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Thiago</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>Controle e Gargalos do modelo SMP</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
          A simetria facilita a programação e o balanceamento, mas esbarra nas limitações físicas da memória central.
        </p>
        
        <div className="gamma-grid">
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.4)' }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Combine size={24} /> Balanceamento Automático (Vantagem)
            </div>
            <p className="slide-content" style={{ fontSize: '1.5rem' }}>
              Facilidade para o Sistema Operacional. Ele trata a memória e as CPUs como um "pool" único de recursos. Se a CPU 1 estiver ociosa enquanto a CPU 2 processa dados pesados, o SO transfere processos entre as filas (Load Balancing) sem atrito, maximizando a eficiência de uso.
            </p>
          </div>
          
          <div className="gamma-card" style={{ borderColor: 'rgba(255, 100, 100, 0.4)' }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF6464' }}>
              <ActivitySquare size={24} /> Coerência de Cache e Barramento (Gargalo)
            </div>
            <p className="slide-content" style={{ fontSize: '1.5rem' }}>
              Como múltiplas CPUs alteram variáveis na mesma memória RAM, manter a integridade dos dados nas memórias Cache L1/L2 de cada processador exige protocolos pesados (como MESI). O tráfego intenso de "sincronização de cache" no barramento impede o sistema SMP  de escalar para centenas de núcleos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}