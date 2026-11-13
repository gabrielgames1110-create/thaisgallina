import React from 'react';
import { Icon } from '../core/Icon.jsx';

const NETWORK_LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  whatsapp: 'WhatsApp',
  youtube: 'YouTube',
  x: 'X',
  pinterest: 'Pinterest',
};

export function TopBar({
  phone,
  email,
  address,
  addressHref,
  socials = [],
  ctaLabel = 'Fale conosco',
  ctaHref,
  className,
}) {
  const digits = phone ? phone.replace(/[^\d+]/g, '') : '';
  const intl = digits.charAt(0) === '+' || (digits.length !== 10 && digits.length !== 11) ? digits : '+55' + digits;
  const tel = phone ? 'tel:' + intl : undefined;
  const addressInner = (
    <React.Fragment>
      <Icon name="map-pin" size={16} />
      <span>{address}</span>
    </React.Fragment>
  );
  return (
    <div className={['top-bar', className].filter(Boolean).join(' ')}>
      <div className="container top-bar__inner">
        <ul className="top-bar__info">
          {phone && (
            <li>
              <a className="top-bar__item" href={tel}><Icon name="phone" size={16} /><span>{phone}</span></a>
            </li>
          )}
          {email && (
            <li className="top-bar__item--email">
              <a className="top-bar__item" href={'mailto:' + email}><Icon name="mail" size={16} /><span>{email}</span></a>
            </li>
          )}
          {address && (
            <li className="top-bar__item--address">
              {addressHref
                ? <a className="top-bar__item" href={addressHref}>{addressInner}</a>
                : <span className="top-bar__item">{addressInner}</span>}
            </li>
          )}
        </ul>
        {socials.length > 0 && (
          <ul className="top-bar__social" aria-label="Redes sociais">
            {socials.map((s) => (
              <li key={s.network}>
                <a className="top-bar__social-link" href={s.href || '#'} aria-label={s.label || NETWORK_LABELS[s.network] || s.network}>
                  <span className="top-bar__social-dot"><Icon name={'brand-' + s.network} size={15} /></span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {ctaHref && (
          <a className="top-bar__cta" href={ctaHref}>
            {ctaLabel}
            <Icon name="arrow-right" size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
