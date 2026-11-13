import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function IconButton({
  icon,
  label,
  variant = 'primary',
  size = 'md',
  raised = false,
  iconSize,
  href,
  type = 'button',
  className,
  ...rest
}) {
  const cls = [
    'icon-button',
    variant !== 'primary' && 'icon-button--' + variant,
    size === 'lg' && 'icon-button--lg',
    raised && 'icon-button--raised',
    className,
  ].filter(Boolean).join(' ');
  const glyph = <Icon name={icon} size={iconSize || (size === 'lg' ? 22 : 20)} />;

  if (href) {
    return (
      <a className={cls} href={href} aria-label={label} title={label} {...rest}>{glyph}</a>
    );
  }
  return (
    <button className={cls} type={type} aria-label={label} title={label} {...rest}>{glyph}</button>
  );
}
