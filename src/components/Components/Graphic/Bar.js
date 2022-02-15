import { useEffect, useRef } from 'react';
import classes from './Bar.module.css';

const Bar = ({ number, semAporteHeight, comAporteHeight }) => {
  const comAporteEl = useRef();
  const semAporteEl = useRef();

  useEffect(() => {
    comAporteEl.current.style.height = comAporteHeight + 'rem';
    semAporteEl.current.style.height = semAporteHeight + 'rem';
  }, [semAporteHeight, comAporteHeight]);

  return (
    <div className={classes['bar-container']}>
      <div ref={comAporteEl} className={classes['com-aporte']}></div>
      <div ref={semAporteEl} className={classes['sem-aporte']}></div>
      <p>{number}</p>
    </div>
  );
};

export default Bar;
