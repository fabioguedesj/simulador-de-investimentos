import { useState } from 'react';

const UseInput = (validValue) => {
  const [initialValue, setInicialValue] = useState('');
  const [valueIsBlur, setValueIsBlur] = useState(false);

  const initialValueIsInvalid = validValue(initialValue);
  const initialValueHasError = initialValueIsInvalid && valueIsBlur;

  const valueChangeHandler = (e) => setInicialValue(e.target.value);
  const valueBlur = () => setValueIsBlur(true);

  const reset = () => {
    setValueIsBlur(false);
    setInicialValue('');
  };

  return {
    value: initialValue,
    isInvalid: initialValueIsInvalid,
    hasError: initialValueHasError,
    valueChangeHandler: valueChangeHandler,
    valueBlurHandler: valueBlur,
    reset,
  };
};

export default UseInput;
