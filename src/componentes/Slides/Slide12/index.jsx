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
        <h1 className="slide-title">Conclusão e Convergência</h1>
        <p className="slide-content" style={{ marginBottom: '1.5rem' }}>
          Hoje, as fronteiras puras da computação desapareceram. A engenharia de hardware moderna aplica o melhor de cada modelo arquitetônico:
        </p>
        
        <ul className="slide-content" style={{ fontSize: '1.2rem' }}>
          <li><strong>Mobile & Embarcados:</strong> Operam fortemente fundamentados no modelo <strong>AMP</strong>  para assegurar eficiência e autonomia de bateria.</li>
          <li><strong>Computação Pessoal:</strong> Desktops e Laptops dependem do balanço de carga do <strong>SMP</strong>  (fortemente acoplado)  para fluidez em multitarefa.</li>
          <li><strong>Datacenters Corporativos:</strong> Utilizam uma abordagem híbrida escalável. Operam globalmente distribuídos como <strong>Fracamente Acoplados</strong> (clusters redundantes) , mas cada lâmina de servidor físico internamente é uma supermáquina baseada em arquitetura paralela fortemente acoplada.</li>
        </ul>
        
        <div style={{ marginTop: '1.5rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
          <p><strong>Referências Acadêmicas:</strong></p>
          <p>- TANENBAUM, A. S. Sistemas Operacionais Modernos (2015).</p>
          <p>- SILBERSCHATZ, A. Fundamentos de Sistemas Operacionais (2018).</p>
          <p>- STALLINGS, W. Arquitetura e Organização de Computadores (2017).</p>
        </div>

        <h2 style={{ color: '#00FF88', marginTop: '1rem', fontFamily: 'monospace', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', borderTop: '1px solid rgba(0,255,136,0.2)', paddingTop: '0.8rem' }}>
          Agradecemos a atenção. Perguntas?
        </h2>
      </div>
    </div>
  );
}