import React from "react";
import { CurrencyData } from "../../data/hooks/homeCurrencyDetails";
import { CurrencyDetails } from "../../data/hooks/homeCurrencyDetails";
import Button from "./Button";

type CurrencyBlockProps = {
    currency: CurrencyData | undefined;
  };
  
  const CurrencyBlock: React.FC<CurrencyBlockProps> = ({ currency }) => {
    return (
      <div className="currency-block">
        {currency && <CurrencyDetails currency={currency} />}
        {currency && <Button title={`Gráfico ${currency.name}`} />}
      </div>
    );
  };
  
  export default CurrencyBlock;