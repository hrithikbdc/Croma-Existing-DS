import { useState, type ReactNode } from 'react';
const sourceExpanded=new URL('./assets/accordion/expanded.svg',import.meta.url).href;
const sourceCollapsed=new URL('./assets/accordion/collapsed.svg',import.meta.url).href;
// Original saved artwork245:38553/245:38548 exports11x7 in16px slots.
// Saved glyph IDs E81C/E819 differ from written E816/E813; shape fallback is not a codepoint mapping.
export interface AccordionProps { heading:ReactNode; children:ReactNode; icon?:ReactNode; open?:boolean; defaultOpen?:boolean; onOpenChange?:(open:boolean)=>void }
export function Accordion({heading,children,icon,open,defaultOpen=false,onOpenChange}:AccordionProps){
  const [local,setLocal]=useState(defaultOpen);
  return <details data-croma-component="Accordion" data-theme="dark" data-croma-source-node="245:38719" open={open??local}
    onToggle={event=>{const next=event.currentTarget.open;if(open===undefined)setLocal(next);if(next!==(open??local))onOpenChange?.(next);}}>
    <summary data-has-icon="true" onClick={event=>{if(open!==undefined){event.preventDefault();onOpenChange?.(!open);}}}>
      <span className="croma-accordion-heading">{heading}</span><span className="croma-accordion-icon" aria-hidden="true">{icon??<><img className="croma-accordion-default-collapsed" src={sourceCollapsed} width={11} height={7} alt="" data-croma-source-node="245:38548"/><img className="croma-accordion-default-expanded" src={sourceExpanded} width={11} height={7} alt="" data-croma-source-node="245:38553"/></>}</span>
    </summary><div>{children}</div>
  </details>;
}

const localArrows={Light:{closed:new URL('./assets/accordion/local-closed.svg',import.meta.url).href,open:new URL('./assets/accordion/local-open-base.svg',import.meta.url).href},Dark:{closed:new URL('./assets/accordion/local-dark-closed.svg',import.meta.url).href,open:new URL('./assets/accordion/local-dark-open-base.svg',import.meta.url).href}};
export interface LocalAccordionProps {heading:ReactNode;children:ReactNode;Background?:'Light'|'Dark';Title?:'On'|'Off';sectionTitle?:ReactNode;State?:'Close'|'Open';defaultState?:'Close'|'Open';onStateChange?:(state:'Close'|'Open')=>void}
const localIds={Light:{Off:{Close:'463:83389',Open:'463:83402'},On:{Close:'463:83395',Open:'463:83411'}},Dark:{Off:{Close:'463:83421',Open:'463:83434'},On:{Close:'463:83427',Open:'463:83443'}}} as const;
/** Separate local set463:83388. State is controlled when supplied; defaultState is interactive. */
export function LocalAccordion({heading,children,Background='Light',Title='Off',sectionTitle='Section Title',State,defaultState='Close',onStateChange}:LocalAccordionProps){
 const[local,setLocal]=useState(defaultState);const state=State??local;const update=(next:boolean)=>{const value=next?'Open':'Close';if(State===undefined)setLocal(value);onStateChange?.(value);};
 return <section className="croma-local-accordion" data-source-family="accordion-46383388" data-background={Background} data-title={Title} data-state={state} data-source-id={localIds[Background][Title][state]}>
  {Title==='On'&&<h2 className="croma-local-accordion__section-title">{sectionTitle}</h2>}
  <details open={state==='Open'} onToggle={e=>{if(e.currentTarget.open!==(state==='Open'))update(e.currentTarget.open);}}>
   <summary onClick={e=>{if(State!==undefined){e.preventDefault();update(state!=='Open');}}}><span>{heading}</span><img src={localArrows[Background][state==='Open'?'open':'closed']} alt="" width={16} height={16} className="croma-local-accordion__arrow"/></summary>
   <div className="croma-local-accordion__content">{children}</div>
  </details><div className="croma-local-accordion__divider" aria-hidden="true"/>
 </section>;
}
const colourArtwork={Sparkle:new URL('./assets/accordion/colour-sparkle.svg',import.meta.url).href,Delivery:new URL('./assets/accordion/colour-delivery.svg',import.meta.url).href,Deal:new URL('./assets/accordion/colour-deal.svg',import.meta.url).href,Store:new URL('./assets/accordion/colour-store.svg',import.meta.url).href,arrow:new URL('./assets/accordion/colour-arrow.svg',import.meta.url).href};
const colourBlue=new URL('./assets/accordion/colour-gradient-blue.svg',import.meta.url).href,colourPurple=new URL('./assets/accordion/colour-gradient-purple.svg',import.meta.url).href;
export interface ColourAccordionItem {id:string;heading:ReactNode;content:ReactNode;icon:'Sparkle'|'Delivery'|'Deal'|'Store';defaultOpen?:boolean}
export interface ColourAccordionProps {title?:ReactNode;items:ColourAccordionItem[]}
function ColourAccordionRow({item}:{item:ColourAccordionItem}){const[open,setOpen]=useState(Boolean(item.defaultOpen));return <details open={open} onToggle={e=>setOpen(e.currentTarget.open)}><summary><img src={colourArtwork[item.icon]} width={24} height={24} alt=""/><span>{item.heading}</span><img className="croma-colour-accordion__arrow" src={colourArtwork.arrow} width={24} height={24} alt=""/></summary><div className="croma-colour-accordion__content">{item.content}</div></details>;}
export function ColourAccordion({title='Why Cromā?',items}:ColourAccordionProps){return <section className="croma-colour-accordion" data-source-family="accordion-colour-46882805" data-source-id="468:82805"><h2>{title}</h2><div className="croma-colour-accordion__panel" style={{backgroundImage:`url("${colourBlue}"),url("${colourPurple}")`}}>{items.map(item=><ColourAccordionRow key={item.id} item={item}/>)}</div></section>;}
