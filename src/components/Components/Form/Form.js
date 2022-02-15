import { useEffect, useState } from 'react';

import FormInputs from './FormInputs';

import classes from './Form.module.css';
import FormButtons from './FormButtons';
import FormSubmiter from './FormSubmiter';

const Form = ({ getUserFinalData }) => {
  const [userData, setUserData] = useState({ formIsInvalid: true });
  const [buttonData, setButtonData] = useState({});
  const [indicadores, setIndicadores] = useState([]);
  const [simulas, setSimulas] = useState([]);

  const formInputsData = (data) => setUserData(data);
  const formButtonData = (data) => setButtonData(data);

  useEffect(async () => {
    try {
      const resIn = await fetch('http://localhost:3000/indicadores');
      if (!resIn.ok) throw new Error('Algo deu errado');
      const dataIn = await resIn.json();

      setIndicadores(dataIn);

      const resSi = await fetch('http://localhost:3000/simulacoes');
      if (!resSi.ok) throw new Error('Algo deu errado');
      const dataSi = await resSi.json();

      setSimulas(dataSi);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const limparCamposHandler = () => {
    const { resetForm } = userData;
    resetForm();
    getUserFinalData('');
  };

  const getUserButtonData = () => {
    const userOptions = {
      pre: buttonData.preActive,
      pos: buttonData.posActive,
      ipca: buttonData.fixadoActive,
      bruto: buttonData.brutoActive,
      liquido: buttonData.liquidoActive,
    };

    const filteredArray = Object.entries(userOptions).filter(
      (el) => el[1] === true
    );
    const filteredObject = Object.fromEntries(filteredArray);
    return Object.keys(filteredObject).reverse();
  };

  const getSimulacao = () => {
    const userButtonData = getUserButtonData();

    return simulas
      .filter((el) => el.tipoRendimento === userButtonData[0])
      .filter((el) => el.tipoIndexacao === userButtonData[1])
      .pop();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const { formIsInvalid } = userData;

    if (formIsInvalid) return;

    const userFinalData = getSimulacao();

    getUserFinalData(userFinalData);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={`${classes['form-container']}`}>
        <FormButtons formButtonData={formButtonData} />
      </div>

      <FormInputs formInputsData={formInputsData} indicadores={indicadores} />

      <div className={classes['action-buttons']}>
        <FormSubmiter
          disabled={userData.formIsInvalid}
          limparCamposHandler={limparCamposHandler}
        />
      </div>
    </form>
  );
};

export default Form;
