export interface CoinsHistoricData {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  }
  
  export const fetchHistoricEuroData = async (): Promise<CoinsHistoricData[]> => {
    try {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching euro data:", error);
      return [];
    }
  };

  export const fetchHistoricDolarData = async (): Promise<CoinsHistoricData[]> => {
    try {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/json/daily/USD-BRL/15"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching dolar data:", error);
      return [];
    }
  };

  export const fetchHistoricBitcoinData = async (): Promise<CoinsHistoricData[]> => {
    try {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/json/daily/BTC-BRL/15"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching bitcoin data:", error);
      return [];
    }
  };
  