import { Fragment, useEffect } from 'react';

import Input from './Input';
import UseInput from '../../../hooks/use-input';

import classes from './FormInputs.module.css';

const FormInputs = ({ formInputsData, indicadores }) => {
  const verifyNumValidity = (value) => !value || isNaN(+value);

  const {
    value: aporteInicial,
    isInvalid: aporteInicialIsInvalid,
    hasError: aporteInicialHasError,
    valueChangeHandler: aporteInicialChangeHandler,
    valueBlurHandler: aporteInicialBlurHandler,
    reset: aporteInicialReset,
  } = UseInput(verifyNumValidity);

  const {
    value: aporteMensal,
    isInvalid: aporteMensalIsInvalid,
    hasError: aporteMensalHasError,
    valueChangeHandler: aporteMensalChangeHandler,
    valueBlurHandler: aporteMensalBlurHandler,
    reset: aporteMensalReset,
  } = UseInput(verifyNumValidity);

  const {
    value: prazo,
    isInvalid: prazoIsInvalid,
    hasError: prazoHasError,
    valueChangeHandler: prazoChangeHandler,
    valueBlurHandler: prazoBlurHandler,
    reset: prazoReset,
  } = UseInput(verifyNumValidity);

  const {
    value: rentabilidade,
    isInvalid: rentabilidadeIsInvalid,
    hasError: rentabilidadeHasError,
    valueChangeHandler: rentabilidadeChangeHandler,
    valueBlurHandler: rentabilidadeBlurHandler,
    reset: rentabilidadeReset,
  } = UseInput(verifyNumValidity);

  const {
    value: ipca,
    valueChangeHandler: ipcaChangeHandler,
  } = UseInput(verifyNumValidity);

  const {
    value: cdi,
    valueChangeHandler: cdiChangeHandler,
  } = UseInput(verifyNumValidity);

  const formIsInvalid =
    aporteInicialIsInvalid ||
    aporteMensalIsInvalid ||
    prazoIsInvalid ||
    rentabilidadeIsInvalid;

  const resetForm = () => {
    aporteInicialReset();
    aporteMensalReset();
    prazoReset();
    rentabilidadeReset();
  };

  useEffect(() => {
    formInputsData({
      formIsInvalid,
      resetForm,
      values: {
        aporteInicial,
        aporteMensal,
        prazo,
        rentabilidade,
        ipca,
        cdi,
      },
    });
  }, [aporteInicial, aporteMensal, prazo, rentabilidade, ipca, cdi]);

  const aporteInicialClass = aporteInicialHasError ? 'invalid' : '';
  const aporteMensalClass = aporteMensalHasError ? 'invalid' : '';
  const prazoClass = prazoHasError ? 'invalid' : '';
  const rentabilidadeClass = rentabilidadeHasError ? 'invalid' : '';

  const cdiValue = indicadores[0]?.valor ?? 'Carregando...';
  const ipcaValue = indicadores[1]?.valor ?? 'Carregando...';

  return (
    <Fragment>
      <div className={`${classes['form-container']}`}>
        <Input
          label={{ text: 'Aporte Inicial' }}
          input={{ type: 'text', value: aporteInicial }}
          isValid={aporteInicialClass}
          onChange={aporteInicialChangeHandler}
          onBlur={aporteInicialBlurHandler}
          hasError={aporteInicialHasError}
          errorMessage={'Aporte deve ser um número'}
        />
        <Input
          label={{ text: 'Aporte Mensal' }}
          input={{ type: 'text', value: aporteMensal }}
          isValid={aporteMensalClass}
          onChange={aporteMensalChangeHandler}
          onBlur={aporteMensalBlurHandler}
          hasError={aporteMensalHasError}
          errorMessage={'Aporte deve ser um número'}
        />
      </div>

      <div className={`${classes['form-container']}`}>
        <Input
          label={{ text: 'Prazo (em meses)' }}
          input={{ type: 'text', value: prazo }}
          isValid={prazoClass}
          onChange={prazoChangeHandler}
          onBlur={prazoBlurHandler}
          hasError={prazoHasError}
          errorMessage={'Prazo deve ser um número'}
        />
        <Input
          label={{ text: 'Rentabilidade' }}
          input={{ type: 'text', value: rentabilidade }}
          isValid={rentabilidadeClass}
          onChange={rentabilidadeChangeHandler}
          onBlur={rentabilidadeBlurHandler}
          hasError={rentabilidadeHasError}
          errorMessage={'Rentabilidade deve ser um número'}
        />
      </div>

      <div className={`${classes['form-container']}`}>
        <Input
          label={{ text: 'IPCA (ao ano)' }}
          input={{ type: 'text', value: ipcaValue }}
          onChange={ipcaChangeHandler}
        />
        <Input
          label={{ text: 'CDI (ao ano)' }}
          input={{ type: 'text', value: cdiValue }}
          onChange={cdiChangeHandler}
        />
      </div>
    </Fragment>
  );
};

export default FormInputs;
