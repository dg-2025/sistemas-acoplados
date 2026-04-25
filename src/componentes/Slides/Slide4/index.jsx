"use client";
import VisualizadorGLB from '@/componentes/UI/VisualizadorGLB';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="slide-container layout-reverse">
      <div className="glass-panel midia-box modelo-3d">
<VisualizadorGLB
  arquivo="/transmeta_crusoe.glb"
  escala={0.4}
  cameraPos={[0, 1.5, 6]}
/>
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Daniel</div>
        <h1 className="slide-title">Análise: Fortemente Acoplados</h1>
        <p className="slide-content" style={{ marginBottom: '1.5rem' }}>O alto grau de dependência gera resultados extremos em desempenho e limitações.</p>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.3)', marginBottom: '1rem' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={22} /> Vantagens Reais
          </div>
          <p className="slide-content">Desempenho bruto excepcional e latência interna quase nula. Ideal para processamento que exige respostas imediatas e onde uma CPU precisa saber o que a outra está fazendo em tempo real.</p>
        </div>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(255, 100, 100, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF6464' }}>
            <XCircle size={22} /> Desvantagens e Gargalos
          </div>
          <p className="slide-content">Escalabilidade física limitada. Como tudo passa pela mesma memória, adicionar mais processadores gera congestionamento no barramento de dados. Além disso, se a memória falhar, o sistema inteiro trava.</p>
        </div>
      </div>
    </div>
  );
}