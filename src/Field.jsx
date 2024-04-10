export default function Field({
  label,
  amount,
  onAmountChange,
  options = [],
  selectectedCurrency,
  onSelectedCurrencyChanged,
  disabled = false,
}) {


  
  return (
    <>
      <div className="bg-fieldOne w-[400px] h-[100px] rounded-lg p-[5px]">
        <div className="h-[30px] w-[100%] bg-fieldTwo flex items-center justify-between px-[15px] rounded-t-lg">
          <label htmlFor="">{label}</label>
          <label htmlFor="" className="mr-[10px]">
            Currency
          </label>
        </div>

        <div className="bg-fieldTwo h-[60px] w-[100%] flex items-center justify-between px-[5px] rounded-b-lg">
          <input
            disabled={disabled}
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
          />

          <select
            name=""
            id=""
            className="mr-[20px] px-[10px] py-[5px] rounded-lg "
            value={selectectedCurrency}
            onChange={(e) => onSelectedCurrencyChanged(e.target.value)}
          >
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
