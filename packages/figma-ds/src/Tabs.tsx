import { useEffect, useId, useRef, type CSSProperties, type ReactNode } from 'react';

export interface TabItem { value: string; label: string; content: ReactNode; disabled?: boolean; icon?: ReactNode }
export interface TabsProps {
  label: string;
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  Theme?: 'dark' | 'light';
  Layout?: 'Fixed' | 'Scrollable';
  Alignment?: 'Stretch' | 'Start' | 'Center';
  /** Source-dependent leading offset for scrollable tabs; no inferred numeric offset. */
  scrollableInset?: number;
  /** Supply the applicable source icon-to-label gap when using icon tabs. */
  iconGap?: number;
  maxTabWidth?: number;
}

/** Equal-width tabs: written geometry with actual Figma figure label and indicator bindings. */
export function Tabs({ label, items, value, onChange, Theme = 'dark', Layout='Fixed', Alignment='Stretch', scrollableInset, iconGap, maxTabWidth }: TabsProps) {
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const enabled = items.flatMap((item, index) => item.disabled ? [] : [index]);
  const active = items.find(item => item.value === value && !item.disabled)?.value ?? items[enabled[0]]?.value;
  useEffect(()=>{if(Layout==='Scrollable'){const index=items.findIndex(item=>item.value===active);refs.current[index]?.scrollIntoView({block:'nearest',inline:'nearest'});}},[active,Layout,items]);
  const style={'--croma-tabs-scroll-inset':scrollableInset===undefined?undefined:`${scrollableInset}px`,'--croma-tabs-icon-gap':iconGap===undefined?undefined:`${iconGap}px`,'--croma-tabs-max-tab-width':maxTabWidth===undefined?undefined:`${maxTabWidth}px`} as CSSProperties;
  return <div data-layout={Layout} data-alignment={Alignment} style={style} data-croma-component="Tabs" data-theme={Theme} data-croma-source-node={Theme === 'dark' ? '278:66348' : '278:66360'}>
    <div role="tablist" aria-label={label}>
      {items.map((item, index) => <button key={item.value} ref={node => { refs.current[index] = node; }}
        type="button" id={`${uid}-tab-${index}`} role="tab" aria-selected={item.value === active}
        aria-controls={`${uid}-panel-${index}`} tabIndex={item.value === active ? 0 : -1}
        disabled={item.disabled} onClick={() => onChange(item.value)}
        onKeyDown={event => {
          if (!enabled.length) return;
          const position = enabled.indexOf(index);
          const rtl = getComputedStyle(event.currentTarget).direction === 'rtl';
          let next: number | undefined;
          if (event.key === 'ArrowRight') next = enabled[(position + (rtl ? -1 : 1) + enabled.length) % enabled.length];
          if (event.key === 'ArrowLeft') next = enabled[(position + (rtl ? 1 : -1) + enabled.length) % enabled.length];
          if (event.key === 'Home') next = enabled[0];
          if (event.key === 'End') next = enabled.at(-1);
          if (next !== undefined) { event.preventDefault(); refs.current[next]?.focus(); onChange(items[next].value); }
        }}>{item.icon&&<span className="croma-tabs-icon" aria-hidden="true">{item.icon}</span>}<span className="croma-tabs-label">{item.label}</span></button>)}
    </div>
    {items.map((item, index) => <div key={item.value} role="tabpanel" id={`${uid}-panel-${index}`}
      aria-labelledby={`${uid}-tab-${index}`} tabIndex={0} hidden={item.value !== active}>{item.content}</div>)}
  </div>;
}
