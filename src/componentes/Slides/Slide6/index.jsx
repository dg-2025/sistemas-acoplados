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
        <h1 className="slide-title">Análise Técnica: Fracamente Acoplados</h1>
        <p className="slide-content" style={{ marginBottom: '1.5rem' }}>A base estrutural da Computação em Nuvem e de Datacenters.</p>
        
        <div className="gamma-card" style={{ marginBottom: '1rem', borderColor: 'rgba(0, 229, 255, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E5FF' }}>
            <Infinity size={22} /> Escalabilidade e Resiliência (Vantagens) 
          </div>
          <p className="slide-content" style={{ fontSize: '1.2rem' }}>
            <strong>Escalabilidade virtualmente ilimitada.</strong> Basta adicionar novos nós à rede para ampliar o poder computacional. Além disso, garante <strong>Alta Disponibilidade e Tolerância a Falhas</strong>: se um nó falha, os outros reconfiguram a rede e assumem a carga sem interromper o serviço global.
          </p>
        </div>
        
        <div className="gamma-card" style={{ borderColor: 'rgba(0, 255, 136, 0.3)' }}>
          <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={22} /> Desempenho e Complexidade (Desvantagens) 
          </div>
          <p className="slide-content" style={{ fontSize: '1.2rem' }}>
            A comunicação via rede física insere uma latência de milissegundos (muito mais lenta que um barramento interno). Exige desenvolvimento de software altamente complexo (orquestradores de contêineres e middlewares) para lidar com assincronismo, balanceamento de carga e consistência de dados distribuídos.
          </p>
        </div>
      </div>
    </div>
  );
}