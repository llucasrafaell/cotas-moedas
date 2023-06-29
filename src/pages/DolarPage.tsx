import React, { useEffect, useState } from "react";
import { fetchHistoricDolarData, CoinsHistoricData } from "../data/services/queryHistoricData";
import CurrencyTable from "../ui/components/CurrencyTable";

const DollarPage: React.FC = () => {
  const [dolarData, setDolarData] = useState<CoinsHistoricData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricDolarData();
      setDolarData(data);
    };

    fetchData();
  }, []);

  return <CurrencyTable currencyData={dolarData} />;
};

export default DollarPage;
