import "../ui/styles/HomePage.css"
import { useCurrencyData } from "../data/hooks/useCurrencyData";
import CurrencyBlock from "../ui/components/CurrencyBlock";

const HomePage = () => {
  const currencies = useCurrencyData();

  return (
    <div className="container">
      <h1 className="title">COTAÇÃO DE MOEDAS 💰</h1>
      <div className="currency-container">
        <CurrencyBlock
          currency={currencies?.EURBRL}
          buttonTitle="Gráfico EUR"
          path="/euro"
        />
        <CurrencyBlock
          currency={currencies?.USDBRL}
          buttonTitle="Gráfico USD"
          path="/dolar"
        />
        <CurrencyBlock
          currency={currencies?.BTCBRL}
          buttonTitle="Gráfico BTC"
          path="/btc"
        />
      </div>
    </div>
  );
}

export default HomePage;
