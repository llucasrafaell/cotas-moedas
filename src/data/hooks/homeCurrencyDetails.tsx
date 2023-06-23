export interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  bid: string;
  ask: string;
}
export interface CurrencyDetailsProps {
  currency?: CurrencyData;
}

export function CurrencyDetails({ currency }: CurrencyDetailsProps) {

  if (!currency) { 
    return null;
  }

  return (
    <div className="currency-details">
      <div className="currency-details-title"><p>{currency.code}</p></div>
      <p>{currency.name}</p>
      <p><strong>Valor de compra:</strong></p>
      <p>R${currency.bid}</p>
      <p><strong>Valor de venda:</strong></p>
      <p>R${currency.ask}</p>
      <p>
      <strong>🔝High: </strong>R${currency.high} 
      <strong>⬇️Low: </strong>R${currency.low}
      </p>
    </div>
  );
}
