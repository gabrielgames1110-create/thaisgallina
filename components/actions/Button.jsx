import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  iconPosition = 'end',
  iconBadge = false,
  href,
  type = 'button',
  disabled = false,
  className,
  children,
  ...rest
}) {
  const cls = [
    'button',
    variant !== 'primary' && 'button--' + variant,
    size === 'lg' && 'button--lg',
    block && 'button--block',
    className,
  ].filter(Boolean).join(' ');

  let iconEl = null;
  if (icon) {
    const glyph = (
      <Icon name={icon} size={iconBadge ? 16 : 18} className={'button__icon button__icon--' + iconPosition} />
    );
    iconEl = iconBadge ? <span className="button__icon-badge" aria-hidden="true">{glyph}</span> : glyph;
  }

  const content = (
    <React.Fragment>
      {iconPosition === 'start' && iconEl}
      <span className="button__label">{children}</span>
      {iconPosition === 'end' && iconEl}
    </React.Fragment>
  );

  if (href) {
    return (
      <a className={cls} href={disabled ? undefined : href} aria-disabled={disabled || undefined} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
