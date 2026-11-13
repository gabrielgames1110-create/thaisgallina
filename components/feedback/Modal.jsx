import React, { useEffect, useId, useRef } from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../actions/IconButton.jsx';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  icon,
  tone = 'primary',
  size = 'md',
  closeLabel = 'Fechar',
  contained = false,
  className,
}) {
  const titleId = 'modal-title-' + useId().replace(/:/g, '');
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const node = dialogRef.current;
    if (node && !contained) node.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (closeRef.current) closeRef.current();
        return;
      }
      if (e.key !== 'Tab' || !node) return;
      const items = node.querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === node)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    let prevOverflow;
    if (!contained) {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      if (!contained) document.body.style.overflow = prevOverflow;
      if (!contained && previous && previous.focus) previous.focus();
    };
  }, [open, contained]);

  if (!open) return null;

  return (
    <div
      className={['modal-backdrop', contained && 'modal-backdrop--contained'].filter(Boolean).join(' ')}
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
    >
      <div
        ref={dialogRef}
        className={['modal', size !== 'md' && 'modal--' + size, className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <IconButton icon="x" label={closeLabel} variant="ghost" className="modal__close" onClick={onClose} />
        <div className="modal__header">
          {icon && (
            <span className={'modal__icon' + (tone === 'success' ? ' modal__icon--success' : '')} aria-hidden="true">
              <Icon name={icon} size={26} />
            </span>
          )}
          <h2 className="modal__title" id={titleId}>{title}</h2>
        </div>
        {children && <div className="modal__body">{children}</div>}
        {actions && <div className="modal__actions">{actions}</div>}
      </div>
    </div>
  );
}
