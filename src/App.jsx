import { useState } from "react";
import Field from "./Field";
import useCurrencyInfo from "./useCurrencyHook";
import Button from "@mui/material/Button";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const fromAmountChange = (val) => {
    setFromAmount(val);
  };

  const toAmountChange = (val) => {
    setToAmount(val);
  };

  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("npr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const changeFromCurrency = (newCur) => {
    setFromCurrency(newCur);
  };

  const changeToCurrency = (newCur) => {
    setToCurrency(newCur);
  };

  const handleConvert = () => {
    const calc = fromAmount * currencyInfo[toCurrency];

    setToAmount(calc.toFixed(2));
  };

  return (
    <>
      <div className="h-screen bg-slate-900 flex items-center justify-center flex-col gap-[50px]">
        <Field
          label="From"
          amount={fromAmount}
          onAmountChange={fromAmountChange}
          options={currencyOptions}
          selectectedCurrency={fromCurrency}
          onSelectedCurrencyChanged={changeFromCurrency}
          disabled={false}
        />

        <Field
          label="To"
          amount={toAmount}
          onAmountChange={toAmountChange}
          options={currencyOptions}
          selectectedCurrency={toCurrency}
          onSelectedCurrencyChanged={changeToCurrency}
          disabled={true}
        />

        <Button variant="outlined" onClick={handleConvert}>
          Convert {fromCurrency} To {toCurrency}
        </Button>
      </div>
    </>
  );
}

export default App;
