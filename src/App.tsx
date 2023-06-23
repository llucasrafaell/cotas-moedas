import "./App.css";
import { useCurrencyData } from "./data/hooks/useCurrencyData";
import CurrencyBlock from "./ui/components/CurrencyBlock";

function App() {
  const currencies = useCurrencyData();

  return (
    <div className="container">
      <h1 className="title">COTAÇÃO DE MOEDAS 💰</h1>
      <div className="currency-container">
        <CurrencyBlock currency={currencies?.EURBRL} />
        <CurrencyBlock currency={currencies?.USDBRL} />
        <CurrencyBlock currency={currencies?.BTCBRL} />
      </div>
    </div>
  );
}

export default App;
