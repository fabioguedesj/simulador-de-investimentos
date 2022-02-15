import classes from './ResultCard.module.css';

const ResultCard = ({ title, value, className }) => {

  return (
    <div className={classes['card-container']}>
      <h3 className={'tertiary-heading margin-bottom-hight'}>{title}</h3>
      <p className={className}>{value}</p>
    </div>
  );
};

export default ResultCard;
