import React from "react";
import { CurrencyData } from "../../data/hooks/homeCurrencyDetails";
import { CurrencyDetails } from "../../data/hooks/homeCurrencyDetails";
import Button from "./Button";
import { Link } from 'react-router-dom';

type CurrencyBlockProps = {
  currency: CurrencyData | undefined;
  buttonTitle: string;
  path: string;
};

const CurrencyBlock: React.FC<CurrencyBlockProps> = ({ currency, buttonTitle, path }) => {
  return (
    <div className="currency-block">
      {currency && <CurrencyDetails currency={currency} />}
      {currency && (
        <Link to={path}>
          <Button title={buttonTitle} />
        </Link>
      )}
    </div>
  );
};

export default CurrencyBlock;
