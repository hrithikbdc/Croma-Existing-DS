import { useId, useRef, type ReactNode } from 'react';
const leadingArtwork={dark:new URL('./assets/search/leading-dark.svg',import.meta.url).href,light:new URL('./assets/search/leading-light.svg',import.meta.url).href};
const localLeadingArtwork=new URL('./assets/search/local-leading.svg',import.meta.url).href;
const closeArtwork=new URL('./assets/chips/input-remove-dark.svg',import.meta.url).href;
// Approved prototype composition: fresh clear glyphE81F/12px differs from archived mainE84E/16px.
// The original chip close shape is reused as an alpha mask; this is not claimed to be the exact current Search font glyph.
export interface SearchBarProps {label:string;value:string;onChange:(value:string)=>void;onSubmit:(value:string)=>void;placeholder?:string;icon?:ReactNode;clearIcon?:ReactNode;Theme?:'dark'|'light';SourceBranch?:'Library'|'Local';showClear?:boolean}
export function SearchBar({label,value,onChange,onSubmit,placeholder,icon,clearIcon,Theme='dark',SourceBranch='Library',showClear}:SearchBarProps){
  const local=SourceBranch==='Local';const actualPlaceholder=placeholder??(local?'What are you looking for today?':'Search');
  const uid=useId();const input=useRef<HTMLInputElement>(null);
  return <form data-croma-component="Search bar" data-theme={Theme} data-source-branch={SourceBranch} data-croma-source-node={local?'294:72589':Theme==='dark'?'245:44147':'245:44166'} role="search" onSubmit={event=>{event.preventDefault();onSubmit(value);}}>
    <label className="croma-search-visually-hidden" htmlFor={uid}>{label}</label>
    <div className="croma-spec-search-container"><span className="croma-search-icon" aria-hidden="true">{icon??<img src={local?localLeadingArtwork:leadingArtwork[Theme]} width={local?24:15} height={local?24:15} alt="" data-croma-source-node={local?'245:44135':Theme==='dark'?'141:5375':'245:43009'}/>}</span>
      <input ref={input} id={uid} type="search" placeholder={actualPlaceholder} value={value} onChange={event=>onChange(event.target.value)}/>
      {value&&(showClear??!local)&&<button type="button" className="croma-search-clear" data-has-icon="true" aria-label="Clear search" onClick={()=>{onChange('');input.current?.focus();}}>{clearIcon??<span className="croma-search-clear-slot" aria-hidden="true"><span className="croma-search-clear-mask" style={{maskImage:`url("${closeArtwork}")`,WebkitMaskImage:`url("${closeArtwork}")`}}/></span>}</button>}
      <button type="submit" tabIndex={-1} className="croma-search-visually-hidden">Search</button>
    </div>
  </form>;
}
