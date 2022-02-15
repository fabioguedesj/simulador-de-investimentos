import { Fragment } from 'react';

import Button from '../../UI/Button';

import classes from './FormSubmiter.module.css';

const FormSubmiter = ({disabled, limparCamposHandler}) => {

  const resetClickHandler = () => {
    limparCamposHandler();
  }

  return (
    <Fragment>
      <Button
        type={'button'}
        className={'btn--transparent'}
        borderRadius={'border--all'}
        size={'size--hight'}
        fontWeight={'font--bold'}
        onClick={resetClickHandler}
        generalClasses={'margin-bottom-medium'}>
        Limpar campos
      </Button>
      <Button
        type={'submit'}
        className={'btn--orange'}
        borderRadius={'border--all'}
        size={'size--hight'}
        fontWeight={'font--bold'}
        disabled={disabled}
        generalClasses={'margin-bottom-medium'}
        >
        Simular
      </Button>
    </Fragment>
  );
};

export default FormSubmiter;
