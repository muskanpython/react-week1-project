
function Card({
  title,
  description,
  children,
  footer,
  className = '',
  ...rest
}) {
  return (
    <article
      className={`ui-card ${className}`.trim()}
      {...rest}
    >
      {(title || description) && (
        <header className="ui-card__header">
          {title && <h2 className="ui-card__title">{title}</h2>}

          {description && (
            <p className="ui-card__description">{description}</p>
          )}
        </header>
      )}

      <div className="ui-card__content">{children}</div>

      {footer && (
        <footer className="ui-card__footer">{footer}</footer>
      )}
    </article>
  );
}

export default Card;
