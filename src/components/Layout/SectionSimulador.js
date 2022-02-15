import Form from '../Components/Form/Form';

import classes from './SectionSimulador.module.css';

const SectionSimulador = ({getUserFinalData}) => {
  return (
    <section className={classes['section-simulador']}>
      <h2 className={'secondary-heading margin-bottom-medium'}>Simulador</h2>
      <Form getUserFinalData={getUserFinalData}/>
    </section>
  );
};

export default SectionSimulador;
