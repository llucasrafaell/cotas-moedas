import { useState, useEffect } from "react";
import { queryAPI } from "../services/queryCurrencyData";
import { CurrencyData} from "./homeCurrencyDetails";

export const useCurrencyData = () => {
  const [currencies, setCurrencies] = useState<{ [key: string]: CurrencyData } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryAPI();
      if (data) {
        setCurrencies(data);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 1000); // Atualiza a cada 30 segundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currencies;
};
