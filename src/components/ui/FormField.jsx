
import React, { useId } from 'react';

function FormField({
  id,
  label,
  hint,
  error,
  required = false,
  children,
  className = '',
}) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  return (
    <div className={`ui-form-field ${className}`.trim()}>
      {label && (
        <label className="ui-input-label" htmlFor={fieldId}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      {children
        ? React.cloneElement(children, {
            id: children.props.id || fieldId,
            'aria-invalid': error ? 'true' : undefined,
            'aria-describedby': [
              hint ? hintId : null,
              error ? errorId : null,
              children.props['aria-describedby'],
            ]
              .filter(Boolean)
              .join(' ') || undefined,
          })
        : null}

      {hint && (
        <small id={hintId} className="ui-input-hint">
          {hint}
        </small>
      )}

      {error && (
        <small id={errorId} className="ui-input-error" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}

export default FormField;
