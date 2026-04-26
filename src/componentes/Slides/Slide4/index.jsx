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
        <h1 className="slide-title">Análise Técnica: Fortemente Acoplados</h1>
        <p className="slide-content" style={{ marginBottom: '1.2rem' }}>Uma arquitetura que troca tolerância a falhas por desempenho bruto absoluto.</p>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.3)', marginBottom: '1rem' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={22} /> Vantagens e Aplicações 
          </div>
          <p className="slide-content" style={{ fontSize: '1.2rem' }}>
            Acesso a dados praticamente instantâneo. Ideal para cargas de trabalho que exigem intenso sincronismo, como processamento gráfico (Renderização), sistemas bancários in-memory e modelagem científica (simulações meteorológicas).
          </p>
        </div>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(255, 100, 100, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF6464' }}>
            <XCircle size={22} /> Desvantagens e Limitações 
          </div>
          <p className="slide-content" style={{ fontSize: '1.2rem' }}>
            <strong>Baixa escalabilidade física e Ponto Único de Falha (SPOF).</strong> Como todos dependem da mesma memória, um defeito no pente de RAM derruba o sistema inteiro. Além disso, adicionar processadores satura rapidamente o barramento de memória (Gargalo de Von Neumann).
          </p>
        </div>
      </div>
    </div>
  );
}