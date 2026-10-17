
import { useEffect, useId, useRef } from 'react';

function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) 
{
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`ui-modal ${className}`.trim()}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose?.();
      }}
    >
      <div className="ui-modal__header">
        <h2 id={titleId} className="ui-modal__title">
          {title}
        </h2>

        <button
          type="button"
          className="ui-modal__close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
      </div>

      <div className="ui-modal__content">{children}</div>
    </dialog>
  );
}

export default Modal;
