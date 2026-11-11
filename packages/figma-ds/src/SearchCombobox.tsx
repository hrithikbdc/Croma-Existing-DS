import {useEffect,useLayoutEffect,useId,useRef,useState,type CSSProperties,type InputHTMLAttributes} from 'react';
const searchArtwork={dark:new URL('./assets/search/leading-dark.svg',import.meta.url).href,light:new URL('./assets/search/leading-light.svg',import.meta.url).href};
export interface VariantSuggestion {id:string;model:string;brand?:string;storage?:string;finish?:string;description?:string;disabled?:boolean}
export interface SearchComboboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>,'value'|'onChange'|'onSelect'|'onSubmit'|'size'> {
 label:string;query:string;onQueryChange:(query:string)=>void;suggestions:VariantSuggestion[];onSelect:(suggestion:VariantSuggestion)=>void;onSubmit?:(query:string)=>void;selectedId?:string;
 brands?:{value:string;label:string}[];brand?:string;onBrandChange?:(value:string)=>void;brandLabel?:string;
 loading?:boolean;error?:string;onRetry?:()=>void;emptyText?:string;Theme?:'dark'|'light';helpText?:string;resultsLabel?:string;
}
/** New Croma prototype extension. Filtering, async fetching and product identity stay with the consumer. */
export function SearchCombobox({label,query,onQueryChange,suggestions,onSelect,onSubmit,selectedId,brands,brand,onBrandChange,brandLabel='Brand',loading=false,error,onRetry,emptyText='No matching variants',Theme='dark',helpText,resultsLabel='Matching phones',id:suppliedId,disabled=false,className='',onFocus,onBlur,onKeyDown,onCompositionStart,onCompositionEnd,...inputProps}:SearchComboboxProps){
 const uid=useId(),id=suppliedId??uid;const root=useRef<HTMLDivElement>(null),input=useRef<HTMLInputElement>(null),composing=useRef(false);const[open,setOpen]=useState(false),[active,setActive]=useState(-1);
 const[above,setAbove]=useState(false),[available,setAvailable]=useState(320);
 const visible=open&&!disabled;const choices=loading||error?[]:suggestions;const enabled=choices.flatMap((s,i)=>s.disabled?[]:[i]);
 useLayoutEffect(()=>{if(!visible)return;const place=()=>{const r=root.current?.querySelector('.croma-search-combobox__anchor')?.getBoundingClientRect();if(!r)return;const below=innerHeight-r.bottom-4,top=r.top-4,flip=below<Math.min(320,innerHeight/2)&&top>below;setAbove(flip);setAvailable(Math.max(0,flip?top:below));};place();addEventListener('resize',place);addEventListener('scroll',place,true);return()=>{removeEventListener('resize',place);removeEventListener('scroll',place,true);};},[visible]);
 useEffect(()=>{setActive(-1);},[query,brand,suggestions]);
 useEffect(()=>{if(!visible)return;const close=(e:PointerEvent)=>{if(e.target instanceof Node&&!root.current?.contains(e.target)){setOpen(false);setActive(-1);}};document.addEventListener('pointerdown',close);return()=>document.removeEventListener('pointerdown',close);},[visible]);
 useEffect(()=>{if(active>=0&&visible)root.current?.querySelector(`[data-suggestion-index="${active}"]`)?.scrollIntoView({block:'nearest'});},[active,visible]);
 const choose=(i:number)=>{const s=choices[i];if(!s||s.disabled)return;onSelect(s);setOpen(false);setActive(-1);input.current?.focus();};
 return <div ref={root} className={`croma-search-combobox ${className}`} data-croma-component="Search combobox" data-provenance="prototype-extension" data-theme={Theme} data-disabled={disabled} data-popup-above={above} style={{'--sc-available-height':available+'px'} as CSSProperties} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node|null)){setOpen(false);setActive(-1);}}}>
  <label className="croma-search-combobox__label" htmlFor={id}>{label}</label>
  <div className="croma-search-combobox__anchor">
  <div className="croma-search-combobox__group">
   {brands&&<label className="croma-search-combobox__brand"><span>{brandLabel}</span><select aria-label={brandLabel} value={brand??''} disabled={disabled||!onBrandChange} onChange={e=>{onBrandChange?.(e.target.value);setActive(-1);setOpen(false);}}>{brands.map(b=><option key={b.value} value={b.value}>{b.label}</option>)}</select></label>}
   <div className="croma-search-combobox__entry"><img src={searchArtwork[Theme]} width={15} height={15} alt=""/>
    <input {...inputProps} ref={input} id={id} role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded={visible} aria-controls={visible?id+'-list':undefined} aria-activedescendant={visible&&active>=0&&choices[active]&&!choices[active].disabled?`${id}-option-${active}`:undefined} aria-describedby={[inputProps['aria-describedby'],helpText?id+'-help':undefined].filter(Boolean).join(' ')||undefined} value={query} disabled={disabled} onChange={e=>{onQueryChange(e.target.value);setActive(-1);setOpen(true);}} onFocus={e=>{onFocus?.(e);if(!e.defaultPrevented)setOpen(true);}} onBlur={onBlur}
    onCompositionStart={e=>{composing.current=true;onCompositionStart?.(e);}} onCompositionEnd={e=>{composing.current=false;onCompositionEnd?.(e);}}
    onKeyDown={e=>{onKeyDown?.(e);if(e.defaultPrevented||composing.current||e.nativeEvent.isComposing||e.keyCode===229)return;
     if(e.key==='Escape'){if(visible)e.preventDefault();setOpen(false);setActive(-1);return;}
     if(e.key==='Tab'){setOpen(false);setActive(-1);return;}
     if(e.key==='ArrowDown'||e.key==='ArrowUp'||(visible&&(e.key==='Home'||e.key==='End'))){e.preventDefault();setOpen(true);if(!enabled.length)return;const at=enabled.indexOf(active);setActive(e.key==='Home'?enabled[0]:e.key==='End'?enabled.at(-1)!:e.key==='ArrowUp'?enabled[!visible||at<=0?enabled.length-1:at-1]:enabled[!visible?0:(at+1)%enabled.length]);return;}
     if(e.key==='Enter'){if(visible&&active>=0){e.preventDefault();choose(active);}else if(onSubmit){e.preventDefault();onSubmit(query);setOpen(false);}}
    }}/>
    {query&&<button className="croma-search-combobox__clear" type="button" aria-label={`Clear ${label.toLocaleLowerCase()}`} disabled={disabled} onClick={()=>{onQueryChange('');setActive(-1);setOpen(true);input.current?.focus();}}>×</button>}
   </div>
  </div>
  {visible&&<div className="croma-search-combobox__popup">
   {!loading&&!error&&<div className="croma-search-combobox__results-heading" aria-live="polite">{resultsLabel} ({choices.length} {choices.length===1?'match':'matches'})</div>}
   <div id={id+'-list'} role="listbox" aria-label={`${label} suggestions`} aria-busy={loading||undefined} className="croma-search-combobox__list">
    {choices.map((s,i)=><div key={s.id} id={`${id}-option-${i}`} role="option" aria-selected={selectedId===s.id} aria-disabled={s.disabled||undefined} data-suggestion-index={i} data-active={active===i} className="croma-search-combobox__option" onPointerDown={e=>e.preventDefault()} onPointerMove={()=>{if(!s.disabled)setActive(i);}} onClick={()=>choose(i)}><span className="croma-search-combobox__model">{s.model}</span>{(s.storage||s.finish)&&<span className="croma-search-combobox__meta">{s.storage&&<span>{s.storage}</span>}{s.finish&&<span>{s.finish}</span>}</span>}{s.description&&<span className="croma-search-combobox__description">{s.description}</span>}</div>)}
   </div>
   {(loading||error||!choices.length)&&<div className="croma-search-combobox__status" role="status">{loading?'Searching…':error??emptyText}{!loading&&error&&onRetry&&<button type="button" onClick={onRetry}>Try again</button>}</div>}
  </div>}
  </div>
  {helpText&&<p id={id+'-help'} className="croma-search-combobox__help">{helpText}</p>}
 </div>;
}
