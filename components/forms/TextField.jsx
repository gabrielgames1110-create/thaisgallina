import React, { useId, useState } from 'react';
import { Icon } from '../core/Icon.jsx';

export function TextField({
  label,
  icon,
  type = 'text',
  options,
  placeholder,
  error,
  hint,
  required = false,
  disabled = false,
  id,
  value,
  defaultValue,
  onChange,
  className,
  ...inputProps
}) {
  const autoId = 'field-' + useId().replace(/:/g, '');
  const fieldId = id || autoId;
  const hintId = hint ? fieldId + '-hint' : undefined;
  const errorId = error ? fieldId + '-error' : undefined;
  const isPicker = type === 'date' || type === 'time' || !!options;
  const initial = defaultValue !== undefined ? defaultValue : (options && placeholder !== undefined ? '' : undefined);
  const [emptyState, setEmptyState] = useState(!(value !== undefined ? value : initial));
  const isEmpty = value !== undefined ? !value : emptyState;

  const handleChange = (e) => {
    setEmptyState(!e.target.value);
    if (onChange) onChange(e);
  };

  const common = {
    id: fieldId,
    className: 'field__input',
    disabled,
    required,
    value,
    defaultValue: value === undefined ? initial : undefined,
    onChange: handleChange,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': [errorId, hintId].filter(Boolean).join(' ') || undefined,
    'data-empty': isPicker && isEmpty ? 'true' : undefined,
    ...inputProps,
  };

  return (
    <div className={['field', error && 'field--invalid', disabled && 'field--disabled', className].filter(Boolean).join(' ')}>
      <label className="field__label" htmlFor={fieldId}>
        {label}
        {required && <span className="field__required" aria-hidden="true"> *</span>}
      </label>
      <div className="field__control">
        {icon && <Icon name={icon} size={18} className="field__icon" />}
        {options ? (
          <select {...common}>
            {placeholder !== undefined && <option value="" disabled hidden>{placeholder}</option>}
            {options.map((o) => {
              const opt = typeof o === 'string' ? { value: o, label: o } : o;
              return <option key={opt.value} value={opt.value}>{opt.label}</option>;
            })}
          </select>
        ) : (
          <input type={type} placeholder={placeholder} {...common} />
        )}
        {options && <Icon name="chevron-down" size={18} className="field__chevron" />}
      </div>
      {error && (
        <p className="field__error" id={errorId}>
          <Icon name="alert-circle" size={16} />
          <span>{error}</span>
        </p>
      )}
      {hint && !error && <p className="field__hint" id={hintId}>{hint}</p>}
    </div>
  );
}
