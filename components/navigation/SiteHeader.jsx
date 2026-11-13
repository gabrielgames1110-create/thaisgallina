import React, { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../actions/Button.jsx';
import { IconButton } from '../actions/IconButton.jsx';

export function SiteHeader({
  brand = 'Thais Gallina',
  brandHref = '#',
  logoSrc,
  links = [],
  ctaLabel = 'Agendar consulta',
  ctaShortLabel = 'Agendar',
  ctaHref,
  onCtaClick,
  sticky = false,
  className,
}) {
  const [open, setOpen] = useState(false);
  const panelId = 'site-header-panel-' + useId().replace(/:/g, '');
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const handleCta = (e) => {
    setOpen(false);
    if (onCtaClick) onCtaClick(e);
  };

  return (
    <header ref={rootRef} className={['site-header', sticky && 'site-header--sticky', className].filter(Boolean).join(' ')}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href={brandHref}>
          {logoSrc ? <img className="site-header__logo" src={logoSrc} alt={brand} /> : brand}
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          <ul className="site-header__links">
            {links.map((l) => (
              <li key={l.label}>
                <a className="site-header__link" href={l.href || '#'} aria-current={l.current ? 'page' : undefined}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <Button href={ctaHref} onClick={handleCta}>
            <span className="site-header__cta-full">{ctaLabel}</span>
            <span className="site-header__cta-short">{ctaShortLabel}</span>
          </Button>
          <IconButton
            className="site-header__menu"
            variant="secondary"
            icon={open ? 'x' : 'menu-2'}
            label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          />
        </div>
      </div>
      <div id={panelId} className="site-header__panel" data-open={open ? 'true' : 'false'}>
        <nav aria-label="Menu">
          <ul className="site-header__panel-links">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  className="site-header__panel-link"
                  href={l.href || '#'}
                  aria-current={l.current ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  <Icon name="chevron-right" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
