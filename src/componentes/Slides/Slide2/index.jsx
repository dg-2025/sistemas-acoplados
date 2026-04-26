"use client";
import { Flame, Users, Link2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Isaac</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>Evolução Histórica do Paralelismo</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          A transição para sistemas paralelos não foi uma escolha arbitrária, mas uma barreira imposta pelas leis da física de semicondutores.
        </p>
        <div className="gamma-grid">
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Flame size={40} color="#FF6464" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">Barreira Térmica</div>
            <p className="slide-content" style={{ fontSize: '1.5rem' }}>O fim da 'Dennard Scaling'. Aumentar a frequência (clock) de um único núcleo tornou-se insustentável devido à dissipação extrema de calor no silício, exigindo uma nova abordagem estrutural.</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Users size={40} color="#00E5FF" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">Escalabilidade Horizontal</div>
            <p className="slide-content" style={{ fontSize: '1.5rem' }}>A solução adotada pela indústria foi a divisão de tarefas (multicore e clusters). Adicionam-se múltiplas unidades de processamento operando concorrentemente para aumentar a vazão (throughput).</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Link2 size={40} color="#00FF88" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">O Fator "Acoplamento"</div>
            <p className="slide-content" style={{ fontSize: '1.5rem' }}>Para que múltiplos processadores cooperem, eles precisam se comunicar. O 'Grau de Acoplamento' define como hardware, memória e Sistema Operacional se integram[cite: 20].</p>
          </div>
        </div>
      </div>
    </div>
  );
}