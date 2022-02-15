import { useState } from 'react';
import Header from './components/Components/Header';
import SectionResultados from './components/Layout/SectionResultados';
import SectionSimulador from './components/Layout/SectionSimulador';
import Card from './components/UI/Card';

import classes from './App.module.css';

const App = () => {
  const [finalData, setFinalData] = useState();

  const getUserFinalData = (data) => setFinalData(data);

  const isShown = finalData ? true : false;

  return (
    <Card>
      <Header />
      <div className={classes.sections}>
        <SectionSimulador getUserFinalData={getUserFinalData} />
        {isShown && <SectionResultados finalData={finalData}/>}
      </div>
    </Card>
  );
};

export default App;
