
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
