import React, { useEffect, useState } from "react";
import { fetchHistoricBitcoinData, CoinsHistoricData } from "../data/services/queryHistoricData";
import CurrencyTable from "../ui/components/CurrencyTable";

const BitcoinPage: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<CoinsHistoricData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricBitcoinData();
      setBitcoinData(data);
    };

    fetchData();
  }, []);

  return <CurrencyTable currencyData={bitcoinData} />;
};

export default BitcoinPage;
