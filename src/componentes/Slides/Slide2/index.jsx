"use client";
import { Flame, Users, Link2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Isaac</div>
        <h1 className="slide-title" style={{ textAlign: 'center' }}>Por que surgiu o Paralelismo?</h1>
        <p className="slide-content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          A evolução dos sistemas computacionais não foi apenas uma escolha, mas uma exigência física e arquitetônica.
        </p>
        <div className="gamma-grid">
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Flame size={40} color="#FF6464" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">Barreira Térmica</div>
            <p className="slide-content">Aumentar o clock de um único núcleo encontrou limites físicos. O calor excessivo impedia velocidades maiores sem derreter o silício.</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Users size={40} color="#00E5FF" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">Dividir e Conquistar</div>
            <p className="slide-content">A solução foi a <strong>escalabilidade horizontal interna</strong>: adicionar múltiplos processadores para dividir e processar a carga de trabalho simultaneamente.</p>
          </div>
          <div className="gamma-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Link2 size={40} color="#00FF88" style={{ marginBottom: '0.8rem' }} />
            <div className="gamma-card-title">O Acoplamento</div>
            <p className="slide-content">O grau de acoplamento define o quão integrados esses processadores são: como eles compartilham memória, dados e recursos do sistema.</p>
          </div>
        </div>
      </div>
    </div>
  );
}