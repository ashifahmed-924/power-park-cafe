'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// Custom dropdown (replaces the native <select> popup, which can't be styled).
// options: [{ value, label }]
export default function FieldSelect({ icon, label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const id = useId();

  const selIndex = Math.max(0, options.findIndex(o => String(o.value) === String(value)));
  const current = options[selIndex];

  const openList = () => { setHi(selIndex); setOpen(true); };
  const pick = i => { onChange(options[i].value); setOpen(false); rootRef.current?.querySelector('button')?.focus(); };

  useEffect(() => {
    if (!open) return;
    const onDown = e => { if (!rootRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.children[hi]?.scrollIntoView({ block: 'nearest' });
  }, [open, hi]);

  const onKeyDown = e => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); openList(); }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setHi(h => Math.min(h + 1, options.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi(h => Math.max(h - 1, 0)); }
    else if (e.key === 'Home') { e.preventDefault(); setHi(0); }
    else if (e.key === 'End') { e.preventDefault(); setHi(options.length - 1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(hi); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
    else if (e.key === 'Tab') setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={`rsField rsSelect rsF ${open ? 'isOpen' : ''}`}
      style={{ '--i': 0 }}
      onClick={e => {
        if (listRef.current?.contains(e.target)) return; // option clicks handled by pick()
        if (open) setOpen(false);
        else { openList(); rootRef.current?.querySelector('button')?.focus(); }
      }}
    >
      {icon}
      <span className="rsSelMain">
        <small id={`${id}-l`}>{label}</small>
        <button
          type="button"
          className="rsSelBtn"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-l`}
          onKeyDown={onKeyDown}
          onKeyUp={e => e.key === ' ' && e.preventDefault()}
        >
          {current?.label}
        </button>
      </span>
      <ChevronDown size={18} className="rsChev" />
      <ul ref={listRef} className="rsSelList" role="listbox" aria-labelledby={`${id}-l`} tabIndex={-1}>
        {options.map((o, i) => (
          <li
            key={o.value}
            role="option"
            aria-selected={i === selIndex}
            className={`${i === selIndex ? 'isSel' : ''} ${i === hi ? 'isHi' : ''}`}
            onPointerEnter={() => setHi(i)}
            onClick={() => pick(i)}
          >
            <span>{o.label}</span>
            {i === selIndex && <Check size={16} strokeWidth={2} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
