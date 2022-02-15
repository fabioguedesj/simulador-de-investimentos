import { Fragment } from 'react';
import Bar from './Bar';

import classes from './Graphic.module.css';

const Graphic = ({ finalData }) => {
  const semAporteValues = Object.values(finalData.graficoValores.semAporte);
  const comAporteValues = Object.values(finalData.graficoValores.comAporte);

  const maiorValorSemAporte = semAporteValues.reduce((acc, el) => {
    return acc > el ? acc : el;
  });

  const maiorValorComAporte = comAporteValues.reduce((acc, el) => {
    return acc > el ? acc : el;
  });

  const semAporteHeightValues = semAporteValues.map(
    (el) => (el / maiorValorSemAporte) * 5
  );

  const comAporteHeightValues = comAporteValues.map(
    (el) => (el / maiorValorComAporte) * 20
  );

  const aporteData = semAporteHeightValues.map((el, i) => {
    return { semAporte: el, comAporte: comAporteHeightValues[i] };
  });

  const aporteBar = aporteData.map((el, i) => (
    <Bar
      key={i}
      semAporteHeight={el.semAporte}
      comAporteHeight={el.comAporte}
      number={i}
    />
  ));

  return (
    <Fragment>
      <div className={`margin-bottom-hight ${classes['graphic-container']}`}>
        {aporteBar}
        <p className={classes['rodape-left']}>Valor (R$)</p>
        <p className={classes['rodape-bottom']}>Tempo (meses)</p>
      </div>
      <div className={classes['rodape-container']}>
        <div className={classes['label-bullet']}>
          <div className={classes['com-aporte--bullet']} />
          <p className={classes['com-aporte']}>Com aporte</p>
        </div>
        <div className={classes['label-bullet']}>
          <div className={classes['sem-aporte--bullet']} />
          <p className={classes['sem-aporte']}>Sem aporte</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Graphic;
