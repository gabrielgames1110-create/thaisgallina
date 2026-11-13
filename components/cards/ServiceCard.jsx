import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt = '',
  media,
  icon = 'dental',
  href = '#',
  linkLabel = 'Saiba mais',
  headingLevel = 3,
  className,
}) {
  const Heading = 'h' + headingLevel;
  let mediaEl = media;
  if (!mediaEl) {
    mediaEl = imageSrc
      ? <img src={imageSrc} alt={imageAlt} loading="lazy" />
      : (
        <div className="media-placeholder">
          <Icon name="photo" size={24} />
          <span>Fotografia 4:3</span>
        </div>
      );
  }
  return (
    <article className={['service-card', className].filter(Boolean).join(' ')}>
      <div className="service-card__figure">
        <div className="service-card__media">{mediaEl}</div>
        <span className="service-card__icon" aria-hidden="true"><Icon name={icon} size={24} /></span>
      </div>
      <div className="service-card__body">
        <Heading className="service-card__title">{title}</Heading>
        {description && <p className="service-card__description">{description}</p>}
        {href && (
          <a className="service-card__link" href={href}>
            {linkLabel}
            <span className="visually-hidden">: {title}</span>
            <Icon name="arrow-right" size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
