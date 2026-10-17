
import { useId } from 'react';

function Input({
  id,
  label,
  type = 'text',
  error,
  hint,
  className = '',
  ...rest
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const describedBy = [
    hint ? hintId : null,
    error ? errorId : null,
    rest['aria-describedby'],
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  return (
    <div className="ui-input-group">
      {label && (
        <label className="ui-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        {...rest}
        id={inputId}
        type={type}
        className={`ui-input ${className}`.trim()}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
      />

      {hint && (
        <small id={hintId} className="ui-input-hint">
          {hint}
        </small>
      )}

      {error && (
        <small id={errorId} className="ui-input-error">
          {error}
        </small>
      )}
    </div>
  );
}

export default Input;
