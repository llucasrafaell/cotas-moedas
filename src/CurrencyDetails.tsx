interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  bid: string;
  ask: string;
}

interface CurrencyDetailsProps {
  currency: CurrencyData;
}

export function CurrencyDetails({ currency }: CurrencyDetailsProps) {
  return (
    <div className="values">
      <p>Moeda: {currency.code}</p>
      <p>Codein: {currency.codein}</p>
      <p>Name: {currency.name}</p>
      <p>Compra: {currency.bid}</p>
      <p>Venda: {currency.ask}</p>
      <p>High: {currency.high}</p>
      <p>Low: {currency.low}</p>
    </div>
  );
}
