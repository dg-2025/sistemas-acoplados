"use client";
export default function Slide8() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Pedro</div>
        <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Sintetização de Características Técnicas </h1>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Parâmetro Acadêmico</th>
              <th>Fortemente Acoplado </th>
              <th>Fracamente Acoplado </th>
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
              <td data-label="Parâmetro Acadêmico">Exemplos Práticos </td>
              <td data-label="Fortemente Acoplado">Mainframes modernos, Workstations 3D</td>
              <td data-label="Fracamente Acoplado">Hadoop, Nuvem AWS/Azure, Data Lakes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}