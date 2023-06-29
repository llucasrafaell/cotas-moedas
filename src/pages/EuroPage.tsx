import React, { useEffect, useState } from "react";
import { fetchHistoricEuroData, CoinsHistoricData } from "../data/services/queryHistoricData";
import CurrencyTable from "../ui/components/CurrencyTable";

const EuroPage: React.FC = () => {
  const [euroData, setEuroData] = useState<CoinsHistoricData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricEuroData();
      setEuroData(data);
    };

    fetchData();
  }, []);

  return <CurrencyTable currencyData={euroData} />;
};

export default EuroPage;
