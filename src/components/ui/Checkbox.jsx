
import { useId } from 'react';

function Checkbox({
  id,
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  hint,
  className = '',
  ...rest
}) {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const hintId = `${checkboxId}-hint`;

  return (
    <div className="ui-checkbox-group">
      <div className="ui-checkbox-row">
        <input
          {...rest}
          id={checkboxId}
          type="checkbox"
          className={`ui-checkbox ${className}`.trim()}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          aria-describedby={hint ? hintId : undefined}
        />

        {label && (
          <label className="ui-checkbox-label" htmlFor={checkboxId}>
            {label}
          </label>
        )}
      </div>

      {hint && (
        <small id={hintId} className="ui-input-hint">
          {hint}
        </small>
      )}
    </div>
  );
}

export default Checkbox;
