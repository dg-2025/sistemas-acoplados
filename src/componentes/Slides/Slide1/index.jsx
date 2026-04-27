"use client";
import { Cpu, Network, Zap, Users } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="presenter-badge">Voz: Isaac</div>
        <Cpu size={80} color="#00E5FF" style={{ marginBottom: '1rem' }} />
        <h1 className="slide-title" style={{ border: 'none', marginBottom: '0.5rem' }}>
          Sistemas Acoplados  e Multiprocessamento
        </h1>
        <p className="slide-subtitle">
          Arquitetura, Paralelismo e Escalabilidade
        </p>

        {}
        <div className="slide-content" style={{ marginTop: '1rem', maxWidth: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
          <p>
            Nesta apresentação, analisaremos a evolução do paralelismo computacional, abordando os aspectos conceituais, técnicos e aplicações atuais  de arquiteturas fortemente acopladas (tightly coupled), fracamente acopladas (loosely coupled) e os paradigmas de multiprocessamento SMP e AMP.
          </p>
        </div>

        {}
        <div className="gamma-grid" style={{ marginTop: '1.5rem' }}>
          <div className="gamma-card" style={{ alignItems: 'center' }}>
            <Network size={32} color="#00E5FF" />
            <div className="gamma-card-title" style={{ marginTop: '0.5rem' }}>Acoplamento</div>
            <p className="slide-content" style={{ fontSize: '1.9rem', textAlign: 'center' }}>Grau de integração entre CPU, memória e barramentos.</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center' }}>
            <Zap size={32} color="#FF6464" />
            <div className="gamma-card-title" style={{ marginTop: '0.5rem' }}>Simetria (SMP / AMP)</div>
            <p className="slide-content" style={{ fontSize: '1.9rem', textAlign: 'center' }}>Organização e especialização dos núcleos de processamento.</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center' }}>
            <Users size={32} color="#00FF88" />
            <div className="gamma-card-title" style={{ marginTop: '0.5rem' }}>Equipe de Pesquisa</div>
            <p className="slide-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem', textAlign: 'center', fontSize: '1.9rem' }}>
              <span>Isaac</span> <span>Thiago</span> <span>Arthur</span>
              <span>Pedro</span> <span>Daniel</span> <span>Guilherme</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}