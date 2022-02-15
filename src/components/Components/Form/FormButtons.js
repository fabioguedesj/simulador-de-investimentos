import { Fragment, useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import Button from '../../UI/Button';

import classes from './FormButtons.module.css';

const FormButtons = ({ formButtonData }) => {
  const [brutoActive, setBrutoActive] = useState(true);
  const [liquidoActive, setLiquidoActive] = useState(false);

  const [preActive, setPreActive] = useState(false);
  const [posActive, setPosActive] = useState(true);
  const [fixadoActive, setFixadoActive] = useState(false);

  const brutoActiveHandler = () => {
    setLiquidoActive(false);
    setBrutoActive(true);
  };

  const liquidoActiveHandler = () => {
    setBrutoActive(false);
    setLiquidoActive(true);
  };

  const preActiveHandler = () => {
    setPosActive(false);
    setFixadoActive(false);
    setPreActive(true);
  };

  const posActiveHandler = () => {
    setFixadoActive(false);
    setPreActive(false);
    setPosActive(true);
  };

  const fixadoActiveHandler = () => {
    setPreActive(false);
    setPosActive(false);
    setFixadoActive(true);
  };

  useEffect(() => {
    formButtonData({
      brutoActive,
      liquidoActive,
      preActive,
      posActive,
      fixadoActive,
    });
  }, [brutoActive, liquidoActive, preActive, posActive, fixadoActive]);

  const brutoActiveClass = brutoActive ? 'active' : '';
  const liquidoActiveClass = liquidoActive ? 'active' : '';

  const preActiveClass = preActive ? 'active' : '';
  const posActiveClass = posActive ? 'active' : '';
  const fixadoActiveClass = fixadoActive ? 'active' : '';

  return (
    <Fragment>
      <div className={'margin-bottom-hight'}>
        <div className={classes['label-icon']}>
          <label className={'label display-block margin-bottom-small'}>
            Rendimento
          </label>
          <AiOutlineInfoCircle />
        </div>
        <Button
          type={'button'}
          borderRadius={'border--left'}
          size={'size--medium'}
          onClick={brutoActiveHandler}
          active={brutoActiveClass}>
          Bruto
        </Button>
        <Button
          type={'button'}
          borderRadius={'border--right'}
          size={'size--medium'}
          onClick={liquidoActiveHandler}
          active={liquidoActiveClass}>
          Liquido
        </Button>
      </div>

      <div className={'margin-bottom-hight'}>
      <div className={classes['label-icon']}>
          <label className={'label display-block margin-bottom-small'}>
            Tipos de indexação
          </label>
          <AiOutlineInfoCircle />
        </div>
        <Button
          type={'button'}
          borderRadius={'border--left'}
          size={'size--small'}
          onClick={preActiveHandler}
          active={preActiveClass}>
          PRÉ
        </Button>
        <Button
          type={'button'}
          borderRadius={'border--none'}
          size={'size--small'}
          onClick={posActiveHandler}
          active={posActiveClass}>
          PÓS
        </Button>
        <Button
          type={'button'}
          borderRadius={'border--right'}
          size={'size--small'}
          onClick={fixadoActiveHandler}
          active={fixadoActiveClass}>
          FIXADO
        </Button>
      </div>
    </Fragment>
  );
};

export default FormButtons;
