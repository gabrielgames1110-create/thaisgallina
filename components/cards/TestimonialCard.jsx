import React from 'react';
import { Icon } from '../core/Icon.jsx';

function initials(name) {
  return (name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export function TestimonialCard({ quote, name, detail, avatarSrc, rating, className }) {
  const stars = rating ? Math.max(0, Math.min(5, Math.round(rating))) : 0;
  return (
    <figure className={['testimonial-card', className].filter(Boolean).join(' ')}>
      {stars ? (
        <span className="testimonial-card__stars" role="img" aria-label={stars + ' de 5 estrelas'}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Icon key={i} name="star" size={16} fill={i < stars ? 'currentColor' : 'none'} />
          ))}
        </span>
      ) : (
        <Icon name="quote" size={28} className="testimonial-card__mark" />
      )}
      <blockquote className="testimonial-card__quote"><p>{quote}</p></blockquote>
      <figcaption className="testimonial-card__footer">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {avatarSrc ? <img src={avatarSrc} alt="" /> : initials(name)}
        </span>
        <span>
          <cite className="testimonial-card__name">{name}</cite>
          {detail && <span className="testimonial-card__detail" style={{ display: 'block' }}>{detail}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
