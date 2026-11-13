import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Badge({ children, tone = 'primary', variant = 'soft', size = 'sm', icon, className }) {
  const cls = [
    'badge',
    tone === 'neutral' && 'badge--neutral',
    variant === 'outline' && 'badge--outline',
    size === 'lg' && 'badge--lg',
    className,
  ].filter(Boolean).join(' ');
  let iconEl = null;
  if (icon) {
    iconEl = size === 'lg'
      ? <span className="badge__icon-wrap" aria-hidden="true"><Icon name={icon} size={18} /></span>
      : <Icon name={icon} size={14} />;
  }
  return <span className={cls}>{iconEl}{children}</span>;
}
