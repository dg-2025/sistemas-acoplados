"use client";
import { Combine, ActivitySquare } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Thiago</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>SMP: Controle e Gargalos</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          A simetria traz vantagens em organização, mas esbarra nas limitações físicas da memória central.
        </p>
        
        <div className="gamma-grid">
          <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.4)' }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Combine size={24} /> Balanceamento Automático
            </div>
            <p className="slide-content">
              O Sistema Operacional age como um maestro, enxergando uma grande "piscina" unificada de recursos. Ele distribui tarefas automaticamente para os núcleos que estiverem ociosos no momento, garantindo que nenhum processador fique parado enquanto os outros estão sobrecarregados.
            </p>
          </div>
          
          <div className="gamma-card" style={{ borderColor: 'rgba(255, 100, 100, 0.4)' }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF6464' }}>
              <ActivitySquare size={24} /> Concorrência de Barramento
            </div>
            <p className="slide-content">
              Como todos os processadores idênticos tentam acessar a mesma memória simultaneamente, cria-se um gargalo de dados (Gargalo de Von Neumann). É o principal fator que impede um computador doméstico de ter 500 núcleos idênticos operando na mesma placa-mãe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}