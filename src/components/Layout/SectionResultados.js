import Graphic from '../Components/Graphic/Graphic';
import AllResults from '../Components/Results/AllResults';

import classes from './SectionResultados.module.css';

const SectionResultados = ({ finalData }) => {
  return (
    <section className={classes['section-resultados']}>
      <h2 className={'secondary-heading margin-bottom-medium'}>
        Resultado da Simulação
      </h2>
      <div className={`margin-bottom-medium ${classes['results-container']}`}>
        <AllResults finalData={finalData} />
      </div>
      <h4 className='fourth-heading margin-bottom-medium'>
        Projeção de Valores
      </h4>
      <Graphic finalData={finalData} />
    </section>
  );
};

export default SectionResultados;
