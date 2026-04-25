"use client";
import VisualizadorGLB from '@/componentes/UI/VisualizadorGLB';

export default function Slide12() {
  return (
    <div className="slide-container layout-reverse">
      <div className="glass-panel midia-box modelo-3d">
         {}
<VisualizadorGLB
  arquivo="/Snapdragon.glb"
  escala={45.5}
  cameraPos={[0, 0.8, 4.5]}
/>
      </div>
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Guilherme</div>
        <h1 className="slide-title">Conclusão: O Ecossistema Moderno</h1>
        <p className="slide-content" style={{ marginBottom: '1.5rem' }}>
          Hoje, as fronteiras da computação se misturaram, utilizando o melhor de cada modelo.
        </p>
        
        <ul className="slide-content">
          <li><strong>Dispositivos Móveis:</strong> Dominados pelo <strong>AMP</strong> por questões extremas de eficiência energética térmica.</li>
          <li><strong>Computadores Pessoais:</strong> Historicamente baseados em <strong>SMP</strong>, entregando equilíbrio de carga para multitarefas do dia a dia.</li>
          <li><strong>Datacenters e IA:</strong> São a união final. Operam globalmente como sistemas <strong>Fracamente Acoplados</strong>, porém cada rack na parede é um computador robusto que roda <strong>Fortemente Acoplado</strong>.</li>
        </ul>
        
        <h2 style={{ color: '#00FF88', marginTop: '2.5rem', fontFamily: 'monospace', fontSize: 'clamp(1.5rem, 2vw, 2rem)', borderTop: '1px solid rgba(0,255,136,0.2)', paddingTop: '1rem' }}>
          Fim da Apresentação. Obrigado.
        </h2>
      </div>
    </div>
  );
}