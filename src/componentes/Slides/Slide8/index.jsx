"use client";
export default function Slide8() {
  return (
    <div className="slide-container layout-center">
      <div className="glass-panel">
        <div className="presenter-badge">Voz: Pedro</div>
        <h1 className="slide-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Tabela Comparativa</h1>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th>Fortemente Acoplado</th>
              <th>Fracamente Acoplado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Característica">Memória</td>
              <td data-label="Fortemente Acoplado">Compartilhada (Global)</td>
              <td data-label="Fracamente Acoplado">Local e Distribuída (Privada)</td>
            </tr>
            <tr>
              <td data-label="Característica">Comunicação</td>
              <td data-label="Fortemente Acoplado">Barramentos na Placa-mãe</td>
              <td data-label="Fracamente Acoplado">Mensagens via Rede Externa</td>
            </tr>
            <tr>
              <td data-label="Característica">Latência (Atraso)</td>
              <td data-label="Fortemente Acoplado">Quase Nula</td>
              <td data-label="Fracamente Acoplado">Alta (Depende da Rede)</td>
            </tr>
            <tr>
              <td data-label="Característica">Escalabilidade</td>
              <td data-label="Fortemente Acoplado">Limitada (Custosa)</td>
              <td data-label="Fracamente Acoplado">Praticamente Infinita (Econômica)</td>
            </tr>
            <tr>
              <td data-label="Característica">Tolerância a Falhas</td>
              <td data-label="Fortemente Acoplado">Baixa (falha geral se a memória parar)</td>
              <td data-label="Fracamente Acoplado">Alta (Isolamento de falhas)</td>
            </tr>
            <tr>
              <td data-label="Característica">Casos de Uso</td>
              <td data-label="Fortemente Acoplado">Renderização, Games, Workstations</td>
              <td data-label="Fracamente Acoplado">Nuvem, Banco de Dados Distribuído, IA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}