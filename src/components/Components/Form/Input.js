import classes from './Input.module.css';

const Input = ({ label, input, isValid, onChange, onBlur, hasError, errorMessage }) => {

  return (
    <div className='margin-bottom-hight'>
      <label className={`label display-block margin-bottom-small ${isValid}`}>
        {label.text}
      </label>
      <input
        type={input.type}
        className={`${classes.input} ${isValid}`}
        value={input.value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <p className={'error-message margin-top-small'}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
