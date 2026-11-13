import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function CheckList({ items = [], columns = 1, className }) {
  return (
    <ul className={['check-list', columns === 2 && 'check-list--2col', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <li key={i} className="check-list__item">
          <span className="check-list__icon" aria-hidden="true"><Icon name="check" size={12} strokeWidth={3} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
