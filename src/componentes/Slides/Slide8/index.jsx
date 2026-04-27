"use client";
import { Layers } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Pedro</div>
        <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Sintetização de Características Técnicas</h1>

        {}
        <div className="desktop-only">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Parâmetro Acadêmico</th>
                <th>Fortemente Acoplado</th>
                <th>Fracamente Acoplado</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '1.5rem' }}>
              <tr>
                <td data-label="Parâmetro Acadêmico">Organização da Memória</td>
                <td data-label="Fortemente Acoplado">Espaço Unificado (Global)</td>
                <td data-label="Fracamente Acoplado">Local e Privada (por Nó)</td>
              </tr>
              <tr>
                <td data-label="Parâmetro Acadêmico">Meio de Comunicação</td>
                <td data-label="Fortemente Acoplado">Barramento Interno (Ex: QPI, DDR)</td>
                <td data-label="Fracamente Acoplado">Message Passing via Rede (TCP, MPI)</td>
              </tr>
              <tr>
                <td data-label="Parâmetro Acadêmico">Sobrecarga de Latência</td>
                <td data-label="Fortemente Acoplado">Baixíssima (~Nanossegundos)</td>
                <td data-label="Fracamente Acoplado">Elevada (~Milissegundos)</td>
              </tr>
              <tr>
                <td data-label="Parâmetro Acadêmico">Expansão (Escalabilidade)</td>
                <td data-label="Fortemente Acoplado">Vertical (Custosa, Limitada pelo Hardware)</td>
                <td data-label="Fracamente Acoplado">Horizontal (Extremamente Econômica)</td>
              </tr>
              <tr>
                <td data-label="Parâmetro Acadêmico">Resiliência (Tolerância a Falhas)</td>
                <td data-label="Fortemente Acoplado">SPOF (Baixa / Crítica)</td>
                <td data-label="Fracamente Acoplado">Isolada e Redundante (Alta)</td>
              </tr>
              <tr>
                <td data-label="Parâmetro Acadêmico">Exemplos Práticos</td>
                <td data-label="Fortemente Acoplado">Mainframes modernos, Workstations 3D</td>
                <td data-label="Fracamente Acoplado">Hadoop, Nuvem AWS/Azure, Data Lakes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {}
        <div className="mobile-only comparison-mobile-list">
          {}
          {[
            {
              titulo: "Organização da Memória",
              forte: "Espaço Unificado (Global)",
              fraco: "Local e Privada (por Nó)"
            },
            {
              titulo: "Meio de Comunicação",
              forte: "Barramento Interno (Ex: QPI, DDR)",
              fraco: "Message Passing via Rede (TCP, MPI)"
            },
            {
              titulo: "Sobrecarga de Latência",
              forte: "Baixíssima (~Nanossegundos)",
              fraco: "Elevada (~Milissegundos)"
            },
            {
              titulo: "Expansão (Escalabilidade)",
              forte: "Vertical (Custosa, Limitada pelo Hardware)",
              fraco: "Horizontal (Extremamente Econômica)"
            },
            {
              titulo: "Resiliência (Falhas)",
              forte: "SPOF (Baixa / Crítica)",
              fraco: "Isolada e Redundante (Alta)"
            },
            {
              titulo: "Exemplos Práticos",
              forte: "Mainframes, Workstations 3D",
              fraco: "Hadoop, Nuvem AWS/Azure"
            }
          ].map((item, index) => (
            <div key={index} className="mobile-tech-card">
              <div className="mobile-tech-header">
                <Layers size={18} color="#00E5FF" />
                <h3>{item.titulo}</h3>
              </div>
              <div className="mobile-tech-body">
                <div className="tech-item-forte">
                  <span className="tech-badge">Forte</span>
                  <p>{item.forte}</p>
                </div>
                <div className="tech-item-fraco">
                  <span className="tech-badge fraco">Fraco</span>
                  <p>{item.fraco}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}