import classes from './Button.module.css';

const Button = ({
  children,
  type,
  className,
  borderRadius,
  size,
  fontWeight,
  active,
  disabled,
  onClick,
  generalClasses,
}) => {
  const btnClasses = `${classes.btn} ${classes[className]} ${classes[borderRadius]} ${classes[size]} ${classes[fontWeight]} ${classes[active]} ${generalClasses}`;

  return (
    <button
      type={type}
      className={btnClasses}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
