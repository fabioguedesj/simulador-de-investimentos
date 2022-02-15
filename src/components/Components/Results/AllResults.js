import { Fragment } from 'react';
import classes from './AllResults.module.css';
import ResultCard from './ResultCard';

const AllResults = ({ finalData }) => {
  return (
    <Fragment>
      <ResultCard
        title={'Valor final Bruto'}
        value={`R$ ${finalData.valorFinalBruto}`}
        className={'value-text'}
      />
      <ResultCard
        title={'Alíquota do IR'}
        value={`${finalData.aliquotaIR}%`}
        className={'value-text'}
      />
      <ResultCard
        title={'Valor Pago em IR'}
        value={`R$ ${finalData.valorPagoIR}`}
        className={'value-text'}
      />
      <ResultCard
        title={'Valor Final Líquido'}
        value={`R$ ${finalData.valorFinalLiquido}`}
        className={'value-text value-text--green'}
      />
      <ResultCard
        title={'Valor Total Investido'}
        value={`R$ ${finalData.valorTotalInvestido}`}
        className={'value-text'}
      />
      <ResultCard
        title={'Ganho Líquido'}
        value={`R$ ${finalData.ganhoLiquido}`}
        className={'value-text value-text--green'}
      />
    </Fragment>
  );
};

export default AllResults;
