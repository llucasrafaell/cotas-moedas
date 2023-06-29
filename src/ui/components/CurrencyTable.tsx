import React from "react";
import { CoinsHistoricData } from "../../data/services/queryHistoricData";

type CurrencyTableProps = {
  currencyData: CoinsHistoricData[];
};

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencyData }) => {
  return (
    <div>
      <h2>Cotação da Moeda nos últimos 15 dias</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Alta</th>
            <th>Baixa</th>
            <th>Variação</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map((data) => (
            <tr key={data.timestamp}>
              <td>{data.create_date}</td>
              <td>{data.bid}</td>
              <td>{data.high}</td>
              <td>{data.low}</td>
              <td>{data.varBid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
