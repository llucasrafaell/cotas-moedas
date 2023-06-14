import React, { useState, useEffect } from "react";
import "./App.css";

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
  currency?: CurrencyData; // Alteração aqui permitindo que currency seja undefined
}

function CurrencyDetails({ currency }: CurrencyDetailsProps) {
  if (!currency) {
    return null; // Lida com o caso de currency ser undefined
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

function App() {
  const [currencies, setCurrencies] = useState<{ [key: string]: CurrencyData } | null>(null);

  useEffect(() => {
    fetchCurrencies();

    const interval = setInterval(fetchCurrencies, 30000); // Atualiza a cada 30 segundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  return (
    <div className="container">
    <h1 className="title"> COTAÇÃO DE MOEDAS 💰</h1>
      <div className="currency-container">
        <div className="currency-block"><CurrencyDetails currency= {currencies?.EURBRL} />
          <button className="button">
            Gráfico EUR
          </button>
        </div>
        <div className="currency-block"><CurrencyDetails currency={currencies?.USDBRL} />
          <button className="button">
            Gráfico USD
          </button>
        </div>
        <div className="currency-block"><CurrencyDetails currency={currencies?.BTCBRL} />
          <button className="button">
            Gráfico BTC
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
