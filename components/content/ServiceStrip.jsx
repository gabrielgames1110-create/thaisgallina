import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

export function ServiceStrip({
  items = [],
  icon = 'dental',
  marquee = true,
  duration = 40,
  label = 'Serviços',
  className,
}) {
  const [paused, setPaused] = useState(false);
  const renderItems = (clone) => items.map((text, i) => (
    <li
      key={(clone ? 'c' : 'o') + i}
      className={'service-strip__item' + (clone ? ' service-strip__item--clone' : '')}
      aria-hidden={clone ? 'true' : undefined}
    >
      <Icon name={icon} size={30} strokeWidth={1.5} />
      <span>{text}</span>
    </li>
  ));

  return (
    <div
      className={['service-strip', marquee && 'service-strip--marquee', className].filter(Boolean).join(' ')}
      style={{ '--strip-duration': duration + 's' }}
      data-paused={paused ? 'true' : undefined}
    >
      <div className="service-strip__viewport">
        <ul className="service-strip__track" aria-label={label}>
          {renderItems(false)}
          {marquee && renderItems(true)}
        </ul>
      </div>
      {marquee && (
        <button
          type="button"
          className="service-strip__toggle"
          aria-label="Pausar animação"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
        >
          <Icon name={paused ? 'player-play' : 'player-pause'} size={16} />
        </button>
      )}
    </div>
  );
}
