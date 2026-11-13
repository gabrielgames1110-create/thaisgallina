import React, { useId, useState } from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../actions/Button.jsx';

const FIELDS = [
  { name: 'name', label: 'Nome', icon: 'user', type: 'text', placeholder: 'Seu nome completo', autoComplete: 'name' },
  { name: 'phone', label: 'Telefone', icon: 'phone', type: 'tel', placeholder: '(00) 00000-0000', autoComplete: 'tel', inputMode: 'tel' },
  { name: 'date', label: 'Data preferida', icon: 'calendar', type: 'date' },
  { name: 'time', label: 'Horário preferido', icon: 'clock', type: 'time' },
];

function maskPhone(raw) {
  const d = raw.replace(/\D/g, '').slice(0, 11);
  if (!d) return '';
  if (d.length <= 2) return '(' + d;
  if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
  if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
  return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
}

function todayISO() {
  const t = new Date();
  t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
  return t.toISOString().slice(0, 10);
}

function validate(v, minDate, hours) {
  const e = {};
  if (v.name.trim().length < 3) e.name = 'Informe seu nome.';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Informe um telefone com DDD.';
  let range = null;
  if (!v.date) e.date = 'Escolha uma data.';
  else if (minDate && v.date < minDate) e.date = 'Escolha uma data a partir de hoje.';
  else if (hours) {
    const p = v.date.split('-').map(Number);
    range = hours[new Date(p[0], p[1] - 1, p[2]).getDay()];
    if (!range) e.date = 'Não atendemos neste dia. Escolha outra data.';
  }
  if (!v.time) e.time = 'Escolha um horário.';
  else if (range && (v.time < range[0] || v.time > range[1])) e.time = 'Neste dia atendemos das ' + range[0] + ' às ' + range[1] + '.';
  return e;
}

export function AppointmentForm({
  onSubmit,
  submitLabel = 'Agendar consulta',
  surface = 'floating',
  defaultValues,
  minDate,
  openingHours,
  id,
  className,
}) {
  const uid = 'appt-' + useId().replace(/:/g, '');
  const min = minDate === undefined ? todayISO() : minDate;
  const [values, setValues] = useState({ name: '', phone: '', date: '', time: '', ...defaultValues });
  const [errors, setErrors] = useState({});

  const update = (name) => (e) => {
    const val = name === 'phone' ? maskPhone(e.target.value) : e.target.value;
    const next = { ...values, [name]: val };
    setValues(next);
    if (Object.keys(errors).length) {
      const fresh = validate(next, min, openingHours);
      setErrors((prev) => {
        const out = {};
        Object.keys(prev).forEach((k) => { if (fresh[k]) out[k] = fresh[k]; });
        return out;
      });
    }
  };

  const focusField = (field, openPicker) => {
    const el = document.getElementById(uid + '-' + field.name);
    if (!el) return;
    el.focus();
    if (openPicker && (field.type === 'date' || field.type === 'time') && el.showPicker) {
      try { el.showPicker(); } catch (err) { /* picker not allowed here */ }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values, min, openingHours);
    setErrors(found);
    const first = FIELDS.find((f) => found[f.name]);
    if (first) {
      focusField(first, false);
      return;
    }
    if (onSubmit) onSubmit({ ...values });
  };

  return (
    <form
      id={id}
      className={['appointment-form', surface === 'plain' && 'appointment-form--plain', className].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Agendamento de consulta"
    >
      <div className="appointment-form__surface">
        {FIELDS.map((f) => {
          const fid = uid + '-' + f.name;
          const err = errors[f.name];
          return (
            <div
              key={f.name}
              className={['appointment-form__cell', err && 'appointment-form__cell--invalid'].filter(Boolean).join(' ')}
              onClick={(ev) => { if (ev.target.tagName !== 'INPUT' && ev.target.tagName !== 'LABEL') focusField(f, true); }}
            >
              <label className="appointment-form__label" htmlFor={fid}>{f.label}</label>
              <div className="appointment-form__control">
                <Icon name={f.icon} size={18} className="appointment-form__icon" />
                <input
                  id={fid}
                  name={f.name}
                  type={f.type}
                  className="appointment-form__input"
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  inputMode={f.inputMode}
                  value={values[f.name]}
                  onChange={update(f.name)}
                  min={f.type === 'date' && min ? min : undefined}
                  required
                  aria-invalid={err ? true : undefined}
                  aria-describedby={err ? fid + '-error' : undefined}
                  data-empty={values[f.name] ? undefined : 'true'}
                />
              </div>
              {err && (
                <p className="appointment-form__error" id={fid + '-error'}>
                  <Icon name="alert-circle" size={14} />
                  <span>{err}</span>
                </p>
              )}
            </div>
          );
        })}
        <div className="appointment-form__actions">
          <Button type="submit">{submitLabel}</Button>
        </div>
      </div>
    </form>
  );
}
