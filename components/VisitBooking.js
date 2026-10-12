'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  HOURS_LINE_1,
  HOURS_LINE_2,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
  MAP_VIEW_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESERVATION_ENDPOINT
} from '../lib/siteConfig';

const PEOPLE_OPTIONS = ['1–2', '3–4', '5–6', '7–8'];
const OPEN_MINUTES = 5 * 60;
const CLOSE_MINUTES = 14 * 60 + 30;
const NOTE_MAX = 400;

function todayISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function timeToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function isWeekend(iso) {
  const day = parseLocalDate(iso).getDay();
  return day === 0 || day === 6;
}

function digitsOnly(value) {
  return value.replace(/\D/g, '');
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isValidAuPhone(value) {
  const digits = digitsOnly(value);
  if (digits.length === 10 && /^0[2378]\d{8}$/.test(digits)) return true;
  if (digits.length === 10 && /^04\d{8}$/.test(digits)) return true;
  if (digits.length === 11 && /^61[23784]\d{8}$/.test(digits)) return true;
  return false;
}

function validateField(key, form, minDate) {
  const value = (form[key] ?? '').trim();

  switch (key) {
    case 'name': {
      if (!value) return 'please enter your name.';
      if (value.length < 2) return 'name needs at least 2 characters.';
      if (!/^[\p{L}\p{M}'’.\- ]+$/u.test(value)) return 'use letters only in your name.';
      return '';
    }
    case 'email': {
      if (!value) return 'please enter your email.';
      if (!isValidEmail(value)) return 'enter a valid email address.';
      return '';
    }
    case 'phone': {
      if (!value) return '';
      if (!isValidAuPhone(value)) return 'enter a valid australian phone number.';
      return '';
    }
    case 'people': {
      if (!PEOPLE_OPTIONS.includes(form.people)) return 'pick how many people.';
      return '';
    }
    case 'date': {
      if (!value) return 'please choose a date.';
      if (minDate && value < minDate) return 'date can’t be in the past.';
      if (isWeekend(value)) return 'we’re closed weekends — pick a weekday.';
      return '';
    }
    case 'time': {
      if (!value) return 'please choose a time.';
      const mins = timeToMinutes(value);
      if (Number.isNaN(mins) || mins < OPEN_MINUTES || mins > CLOSE_MINUTES) {
        return 'pick a time between 5:00 am and 2:30 pm.';
      }
      if (form.date && minDate && form.date === minDate) {
        const now = new Date();
        const nowMins = now.getHours() * 60 + now.getMinutes();
        if (mins <= nowMins) return 'pick a later time for today.';
      }
      return '';
    }
    case 'note': {
      if (value.length > NOTE_MAX) return `keep notes under ${NOTE_MAX} characters.`;
      return '';
    }
    default:
      return '';
  }
}

function validateForm(form, minDate) {
  const keys = ['name', 'email', 'phone', 'people', 'date', 'time', 'note'];
  const next = {};
  keys.forEach(key => {
    const message = validateField(key, form, minDate);
    if (message) next[key] = message;
  });
  return next;
}

export default function VisitBooking() {
  const [minDate, setMinDate] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    people: '1–2',
    date: '',
    time: '08:00',
    note: ''
  });

  useEffect(() => {
    const t = todayISO();
    setMinDate(t);
    setForm(f => (f.date ? f : { ...f, date: t }));
  }, []);

  function updateField(key, value) {
    setForm(f => {
      const next = { ...f, [key]: value };
      if (touched[key] || errors[key]) {
        const message = validateField(key, next, minDate);
        setErrors(e => {
          const copy = { ...e };
          if (message) copy[key] = message;
          else delete copy[key];
          if (key === 'date' && touched.time) {
            const timeMsg = validateField('time', next, minDate);
            if (timeMsg) copy.time = timeMsg;
            else delete copy.time;
          }
          return copy;
        });
      }
      return next;
    });
  }

  const set = key => e => updateField(key, e.target.value);

  function onBlur(key) {
    setTouched(t => ({ ...t, [key]: true }));
    setErrors(e => {
      const message = validateField(key, form, minDate);
      const copy = { ...e };
      if (message) copy[key] = message;
      else delete copy[key];
      return copy;
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const nextErrors = validateForm(form, minDate);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      people: true,
      date: true,
      time: true,
      note: true
    });

    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      const el = document.getElementById(`book-${first}`);
      el?.focus();
      return;
    }

    setStatus('sending');
    try {
      if (RESERVATION_ENDPOINT) {
        const res = await fetch(RESERVATION_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...form,
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            note: form.note.trim()
          })
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        await new Promise(r => setTimeout(r, 650));
      }
      setStatus('done');
      setErrors({});
      setTouched({});
    } catch {
      setStatus('error');
    }
  }

  function resetForm() {
    const t = todayISO();
    setStatus('idle');
    setErrors({});
    setTouched({});
    setForm({
      name: '',
      email: '',
      phone: '',
      people: '1–2',
      date: t,
      time: '08:00',
      note: ''
    });
  }

  function fieldProps(key) {
    const invalid = Boolean(errors[key]);
    return {
      id: `book-${key}`,
      'aria-invalid': invalid || undefined,
      'aria-describedby': invalid ? `book-${key}-error` : undefined,
      onBlur: () => onBlur(key)
    };
  }

  return (
    <section id="visit" className="dlVisit">
      <div className="dlShell">
        <div className="dlVisitTop">
          <span className="dlEyebrow">find us</span>
          <h2>
            <span className="dlHeadLine">some days need coffee.</span>
            <span className="dlHeadLine">most days need both.</span>
          </h2>
        </div>

        <div className="dlVisitGrid">
          <div className="dlVisitInfo">
            <p>{ADDRESS_LINE_1.toLowerCase()}, {ADDRESS_LINE_2.toLowerCase()}</p>
            <div className="dlVisitMeta">
              <span>{HOURS_LINE_1.toLowerCase()} · {HOURS_LINE_2.toLowerCase()}</span>
              <span>closed weekends</span>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a href={MAP_VIEW_URL} target="_blank" rel="noopener noreferrer">open in maps</a>
              <a href={MAP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">get directions</a>
            </div>
            <div className="dlVisitMap">
              <iframe
                title="Map showing Power Park Cafe, Dandenong South"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="dlBook">
            <span className="dlEyebrow">plan ahead</span>
            <h3>claim your favourite corner.</h3>
            <p>weekdays only · 5:00 am – 3:00 pm</p>

            {status === 'done' ? (
              <div className="dlDone">
                <h3>table request received</h3>
                <p>please call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> to confirm your booking.</p>
                <button type="button" className="dlPill dlPillSolid" onClick={resetForm}>
                  make another booking
                </button>
              </div>
            ) : (
              <form className="dlForm" onSubmit={onSubmit} noValidate>
                <label className={`dlField${errors.name ? ' hasError' : ''}`} htmlFor="book-name">
                  name
                  <input
                    {...fieldProps('name')}
                    autoComplete="name"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="your name"
                  />
                  {errors.name && <span id="book-name-error" className="dlFieldError" role="alert">{errors.name}</span>}
                </label>

                <label className={`dlField${errors.email ? ' hasError' : ''}`} htmlFor="book-email">
                  email
                  <input
                    {...fieldProps('email')}
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@email.com"
                  />
                  {errors.email && <span id="book-email-error" className="dlFieldError" role="alert">{errors.email}</span>}
                </label>

                <label className={`dlField${errors.phone ? ' hasError' : ''}`} htmlFor="book-phone">
                  phone (optional)
                  <input
                    {...fieldProps('phone')}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="04…"
                  />
                  {errors.phone && <span id="book-phone-error" className="dlFieldError" role="alert">{errors.phone}</span>}
                </label>

                <label className={`dlField${errors.people ? ' hasError' : ''}`} htmlFor="book-people">
                  people
                  <select {...fieldProps('people')} value={form.people} onChange={set('people')}>
                    {PEOPLE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.people && <span id="book-people-error" className="dlFieldError" role="alert">{errors.people}</span>}
                </label>

                <label className={`dlField${errors.date ? ' hasError' : ''}`} htmlFor="book-date">
                  date
                  <input
                    {...fieldProps('date')}
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={set('date')}
                  />
                  {errors.date && <span id="book-date-error" className="dlFieldError" role="alert">{errors.date}</span>}
                </label>

                <label className={`dlField${errors.time ? ' hasError' : ''}`} htmlFor="book-time">
                  time
                  <input
                    {...fieldProps('time')}
                    type="time"
                    min="05:00"
                    max="14:30"
                    step={900}
                    value={form.time}
                    onChange={set('time')}
                  />
                  {errors.time && <span id="book-time-error" className="dlFieldError" role="alert">{errors.time}</span>}
                </label>

                <label className={`dlField full${errors.note ? ' hasError' : ''}`} htmlFor="book-note">
                  anything else? (optional)
                  <textarea
                    {...fieldProps('note')}
                    rows={3}
                    maxLength={NOTE_MAX}
                    value={form.note}
                    onChange={set('note')}
                    placeholder="birthdays, high chairs, dietary needs…"
                  />
                  {errors.note && <span id="book-note-error" className="dlFieldError" role="alert">{errors.note}</span>}
                </label>

                <button className="dlPill dlPillSolid" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'sending…' : 'get me a table'}
                  <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
                </button>

                {status === 'error' && (
                  <p role="alert" className="dlFormAlert">
                    something went wrong — please call {PHONE_DISPLAY}.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
