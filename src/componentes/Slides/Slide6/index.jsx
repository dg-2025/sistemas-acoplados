"use client";
import VisualizadorGLB from '@/componentes/UI/VisualizadorGLB';
import { Infinity, ShieldAlert } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="slide-container layout-reverse">
      <div className="glass-panel midia-box modelo-3d">
<VisualizadorGLB
  arquivo="/server_rack.glb"
  escala={1.0}
  cameraPos={[0, 1.8, 7]}
/>
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Arthur</div>
        <h1 className="slide-title">Análise: O Poder dos Clusters</h1>
        <p className="slide-content" style={{ marginBottom: '1.5rem' }}>A base de servidores de datacenters modernos e computação em nuvem.</p>
        
        <div className="gamma-card" style={{ marginBottom: '1rem', borderColor: 'rgba(0, 229, 255, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E5FF' }}>
            <Infinity size={22} /> Escalabilidade Massiva
          </div>
          <p className="slide-content">O limite físico não existe. Para aumentar o poder do sistema, basta plugar mais uma máquina no switch da rede, sem necessidade de alterar o hardware existente.</p>
        </div>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={22} /> Tolerância a Falhas vs Latência
          </div>
          <p className="slide-content">Se um nó queimar, os outros continuam trabalhando de forma isolada, mantendo o serviço online. <strong>O contraponto:</strong> a comunicação por rede impõe uma latência muito maior comparado a sistemas fortemente acoplados.</p>
        </div>
      </div>
    </div>
  );
}