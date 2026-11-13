import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function InfoCard({ icon = 'shield-check', title, description, children, headingLevel = 3, className }) {
  const Heading = 'h' + headingLevel;
  return (
    <article className={['info-card', className].filter(Boolean).join(' ')}>
      <span className="info-card__icon" aria-hidden="true"><Icon name={icon} size={24} /></span>
      <Heading className="info-card__title">{title}</Heading>
      {(description || children) && <div className="info-card__body">{description || children}</div>}
    </article>
  );
}
