import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  className = '',
  theme = 'light', // 'light' or 'dark'
  type = 'button',
  style = {},
  ...props
}) {
  let baseClass = 'btn-luxury-pill';
  if (theme === 'dark' || theme === 'outline') baseClass = 'btn-luxury-outline';
  if (theme === 'tab') baseClass = 'btn-luxury-tab';

  const classNames = `${baseClass} ${className}`;

  const content = (
    <span className="btn-text-content">{children}</span>
  );

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick} style={style} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} style={style} {...props}>
      {content}
    </button>
  );
}
