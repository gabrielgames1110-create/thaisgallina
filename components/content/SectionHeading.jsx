import React from 'react';

// "Sua *melhor experiência* começa aqui" → *…* renders in teal; "\n" forces a line break.
function renderTitle(title) {
  if (typeof title !== 'string') return title;
  const lines = title.split('\n');
  return lines.map((line, li) => {
    const parts = line.split('*').map((p, i) => (
      i % 2 ? <span key={i} className="section-heading__highlight">{p}</span> : <React.Fragment key={i}>{p}</React.Fragment>
    ));
    return lines.length > 1
      ? <span key={li} className="section-heading__line">{parts}</span>
      : <React.Fragment key={li}>{parts}</React.Fragment>;
  });
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as,
  size,
  align = 'start',
  actions,
  id,
  className,
}) {
  const resolvedSize = size || (as === 'h1' ? 'hero' : 'section');
  const Tag = as || (resolvedSize === 'hero' ? 'h1' : 'h2');
  return (
    <div className={[
      'section-heading',
      resolvedSize === 'hero' && 'section-heading--hero',
      align === 'center' && 'section-heading--center',
      className,
    ].filter(Boolean).join(' ')}>
      <div className="section-heading__text">
        {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
        <Tag id={id} className={'section-heading__title section-heading__title--' + resolvedSize}>{renderTitle(title)}</Tag>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
      {actions && <div className="section-heading__actions">{actions}</div>}
    </div>
  );
}
