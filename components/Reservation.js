'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, CalendarCheck, CalendarDays, ChevronDown, CircleCheck, Clock3, Coffee, Heart, MapPin, Users } from 'lucide-react';
import useReveal from './useReveal';
import FieldSelect from './FieldSelect';
import { RESERVATION_ENDPOINT } from '../lib/siteConfig';

// 5:00 AM → 2:30 PM, every 30 minutes (weekday cafe hours)
const TIMES = (() => {
  const out = [];
  for (let m = 300; m <= 870; m += 30) {
    const h = Math.floor(m / 60);
    out.push(`${h % 12 || 12}:${m % 60 ? '30' : '00'} ${h < 12 ? 'AM' : 'PM'}`);
  }
  return out;
})();

const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8];

const perks = [
  { Icon: Users, text: 'Team lunch or catch-up' },
  { Icon: Coffee, text: 'Morning coffee before work' },
  { Icon: Heart, text: 'A quiet table to recharge' }
];

const strip = [
  { Icon: MapPin, title: 'Discovery Road', sub: 'Dandenong South VIC' },
  { Icon: Clock3, title: 'Mon – Fri', sub: '5:00 AM – 3:00 PM' },
  { Icon: Coffee, title: 'Great Coffee', sub: 'Freshly brewed every morning' },
  { Icon: Users, title: 'Friendly Team', sub: 'Service with a smile' }
];

function todayISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function prettyDate(iso) {
  if (!iso) return '';
  return new Date(`${iso}T00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Reservation() {
  const [ref, visible] = useReveal(0.12);
  const [minDate, setMinDate] = useState('');
  const [form, setForm] = useState({ date: '', time: '8:00 AM', guests: '2', note: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  useEffect(() => {
    const t = todayISO();
    setMinDate(t);
    setForm(f => (f.date ? f : { ...f, date: t }));
  }, []);

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.date) return;
    setStatus('sending');
    try {
      if (RESERVATION_ENDPOINT) {
        const res = await fetch(RESERVATION_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form)
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        await new Promise(r => setTimeout(r, 700));
      }
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="reservation" ref={ref} className={`rsSection ${visible ? 'isIn' : ''}`}>
      <div className="rsInner">
        <header className="rsHead">
          <div className="rsHeadCopy">
            <p className="rsEyebrow rv" style={{ '--d': '.05s' }}>Reservations</p>
            <h2>
              <span className="rsLine"><span style={{ '--d': '.1s' }}>Save a seat</span></span>
              <span className="rsLine"><span style={{ '--d': '.22s' }}>on Discovery Road.</span></span>
            </h2>
          </div>
          <p className="rsLead rv" style={{ '--d': '.35s' }}>
            Book a table at Power Park Cafe for coffee, breakfast or lunch — we will hold a spot for you during weekday hours.
          </p>
        </header>

        <ul className="rsPerks rv" style={{ '--d': '.42s' }}>
          {perks.map(({ Icon, text }) => (
            <li key={text}>
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="rsBoard">
          <figure className="rsPhoto rv" style={{ '--d': '.2s' }}>
            <img src="/images/sections/res-interior.jpg" alt="" />
            <figcaption>
              <span>A table waiting</span>
              <strong>for your next break.</strong>
            </figcaption>
          </figure>

          <div className="rsCard rv" style={{ '--d': '.3s' }}>
            {status === 'done' ? (
              <div className="rsDone">
                <span className="rsDoneIcon"><CalendarCheck size={34} strokeWidth={1.4} /></span>
                <h3>Table request received</h3>
                <p>{prettyDate(form.date)} · {form.time} · {form.guests} {Number(form.guests) === 1 ? 'person' : 'people'}</p>
                <p className="rsDoneNote">Please call <a href="tel:+61397065282">(03) 9706 5282</a> to confirm your table.</p>
                <button type="button" className="rsGhost" onClick={() => setStatus('idle')}>Make another booking</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="rsPanelHead rsF" style={{ '--i': 0 }}>
                  <span>Book a table</span>
                  <small>Weekdays · 5 AM – 3 PM</small>
                </div>

                <label className="rsField rsF" style={{ '--i': 1 }}>
                  <CalendarDays size={24} strokeWidth={1.4} />
                  <span><small>DATE</small>
                    <input type="date" required min={minDate} value={form.date} onChange={set('date')} />
                  </span>
                  <ChevronDown size={18} className="rsChev" />
                </label>

                <div style={{ '--i': 2 }} className="rsSelWrap rsF">
                  <FieldSelect
                    icon={<Clock3 size={24} strokeWidth={1.4} />}
                    label="TIME"
                    value={form.time}
                    options={TIMES.map(t => ({ value: t, label: t }))}
                    onChange={v => setForm(f => ({ ...f, time: v }))}
                  />
                </div>

                <div style={{ '--i': 3 }} className="rsSelWrap rsF">
                  <FieldSelect
                    icon={<Users size={24} strokeWidth={1.4} />}
                    label="GUESTS"
                    value={form.guests}
                    options={GUESTS.map(g => ({ value: String(g), label: `${g} ${g === 1 ? 'Person' : 'People'}` }))}
                    onChange={v => setForm(f => ({ ...f, guests: v }))}
                  />
                </div>

                <label className="rsNote rsF" style={{ '--i': 4 }}>
                  <span className="rsNoteHead"><CircleCheck size={18} strokeWidth={1.4} /> SPECIAL REQUEST (OPTIONAL)</span>
                  <textarea rows={3} value={form.note} onChange={set('note')} placeholder="e.g. Birthday, high chair, dietary requirements..." />
                </label>

                <button className="rsBtn rsF" style={{ '--i': 5 }} type="submit" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending…' : 'Reserve Now'}</span> <ArrowRight size={20} />
                </button>
                {status === 'error' && <p className="rsError" role="alert">Something went wrong — please call (03) 9706 5282.</p>}
                <p className="rsFine rsF" style={{ '--i': 6 }}><CalendarCheck size={18} strokeWidth={1.3} /> Free to book · Call (03) 9706 5282 to confirm</p>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="rsStrip">
        <div className="rsStripInner">
          {strip.map(({ Icon, title, sub }, i) => (
            <div key={title} className="rsStripItem rv" style={{ '--d': `${0.2 + i * 0.1}s` }}>
              <Icon size={28} strokeWidth={1.4} />
              <span><b>{title}</b><small>{sub}</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
