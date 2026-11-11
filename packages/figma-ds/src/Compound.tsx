import {useRef,type ReactNode,type HTMLAttributes} from 'react';
import {Button} from './Button.js';
import {PopUp,type PopUpProps} from './Behaviours.js';
const incomplete={'data-acceptance':'unspecified'};
export {Tooltip} from './Tooltip.js';
export type {TooltipProps,TooltipPosition} from './Tooltip.js';
export interface MenuItem {id:string;label:string;href?:string;onSelect?:()=>void;disabled?:boolean;inactive?:boolean;selected?:boolean;icon?:ReactNode;trailingIcon?:ReactNode;message?:ReactNode;children?:MenuItem[];control?:ReactNode}
export interface MenuSection {id:string;title?:string;items:MenuItem[];message?:ReactNode;dividerAfter?:'1'|'2'}
function MenuEntry({item,sub=false,onItemSelect}:{item:MenuItem;sub?:boolean;onItemSelect?:()=>void}){
 const contents=<>{item.icon&&<span className="croma-menu-icon-background"><span className="croma-menu-icon" aria-hidden="true">{item.icon}</span></span>}<span className="croma-menu-label" data-written-typography={sub?'body.x-small-regular':'body.small-regular'}>{item.label}</span>{item.trailingIcon&&<span className="croma-menu-trailing" aria-hidden="true">{item.trailingIcon}</span>}</>;
 return <li data-submenu={sub||undefined} data-disabled={item.disabled||undefined} data-inactive={item.inactive||undefined} data-selected={item.selected||undefined}>{item.children?.length?<details><summary tabIndex={item.disabled?-1:undefined} aria-disabled={item.disabled} onClick={e=>{if(item.disabled)e.preventDefault();}}>{contents}</summary><ul>{item.children.map(child=><MenuEntry key={child.id} item={child} sub onItemSelect={onItemSelect}/>)}</ul></details>:item.control?<div className="croma-menu-control-row">{contents}{item.control}</div>:item.href?<a aria-current={item.selected?'page':undefined} href={item.disabled?undefined:item.href} aria-disabled={item.disabled} tabIndex={item.disabled?-1:undefined} onClick={e=>{if(item.disabled)e.preventDefault();else {item.onSelect?.();onItemSelect?.();}}}>{contents}</a>:<button type="button" aria-current={item.selected?'page':undefined} disabled={item.disabled} onClick={()=>{item.onSelect?.();onItemSelect?.();}}>{contents}</button>}{item.message&&<div className="croma-menu-message" data-written-typography="caption.xx-small-regular">{item.message}</div>}</li>;
}
export function Menu({label,sections,onItemSelect}:{label:string;sections:MenuSection[];onItemSelect?:()=>void}){return <nav {...incomplete} data-croma-component="Menu" aria-label={label}>{sections.map(section=><section key={section.id}>{section.title&&<h3 className="croma-menu-section-title" data-written-typography="body.small-bold">{section.title}</h3>}<ul>{section.items.map(item=><MenuEntry key={item.id} item={item} onItemSelect={onItemSelect}/>)}</ul>{section.message&&<div className="croma-menu-message">{section.message}</div>}{section.dividerAfter&&<hr className="croma-menu-divider" data-variant={section.dividerAfter}/>}</section>)}</nav>;}
export interface QuickLink {id:string;label:string;href:string;icon?:ReactNode}
export {NavigationDrawer,navigationDrawerAccountSections} from './NavigationDrawer.js';
export type {NavigationDrawerProps} from './NavigationDrawer.js';
export function Header({brand,actions,children,...props}:HTMLAttributes<HTMLElement>&{brand?:ReactNode;actions?:ReactNode}){return <header {...props} {...incomplete} data-croma-component="Header">{brand&&<div>{brand}</div>}<div className="croma-header-content">{children}</div>{actions&&<nav aria-label="Header actions">{actions}</nav>}</header>;}
export {Chat} from './Chat.js';
export type {ChatMessage,ChatProps,ChatAction} from './Chat.js';
export {StickyFooter} from './StickyFooter.js';
export type {StickyFooterProps} from './StickyFooter.js';

export function InfoChip({children,Special=false,Type,Theme='dark'}:{children:ReactNode;Special?:boolean;Type?:'Default'|'Special';Theme?:'dark'|'light'}){const special=Type?Type==='Special':Special;return <span {...incomplete} data-croma-component="Info chip" data-theme={Theme} data-type={special?'Special':'Default'} data-special={special}>{children}</span>;}
const inputRemoveArtwork={dark:{enabled:new URL('./assets/chips/input-remove-dark.svg',import.meta.url).href,disabled:new URL('./assets/chips/input-remove-dark-disabled.svg',import.meta.url).href},light:{enabled:new URL('./assets/chips/input-remove-light.svg',import.meta.url).href,disabled:new URL('./assets/chips/input-remove-light-disabled.svg',import.meta.url).href}};
export function InputChip({label,icon,removeIcon,onRemove,disabled,Theme='dark',State='Enabled'}:{label:string;icon?:ReactNode;removeIcon?:ReactNode;onRemove:()=>void;disabled?:boolean;Theme?:'dark'|'light';State?:'Enabled'|'Disabled'|'Hovered'|'Focused'|'Pressed'}){const isDisabled=disabled||State==='Disabled';return <span {...incomplete} data-croma-component="Input chip" data-theme={Theme} data-state={isDisabled?'Disabled':State} data-has-icon={Boolean(icon)}>{icon&&<span className="croma-chip-icon" aria-hidden="true">{icon}</span>}<span className="croma-chip-label">{label}</span><button className="croma-input-chip-remove croma-chip-icon" type="button" aria-label={'Remove '+label} disabled={isDisabled} onClick={onRemove}>{removeIcon??<img alt="" src={inputRemoveArtwork[Theme][isDisabled?'disabled':'enabled']} data-croma-source-node={Theme==='dark'?(isDisabled?'I144:10473;4035:82089;499:14411':'I144:10284;1286:48995;499:14411'):(isDisabled?'I144:10490;4035:83095;499:14411':'I144:10290;4035:83106;499:14411')}/>}</button></span>;}


export function Badge({children,Theme='dark'}:{children:ReactNode;Theme?:'dark'|'light'}){return <span {...incomplete} data-croma-component="Badge" data-theme={Theme}>{children}</span>;}

export function ChipGroup({label,children,onClickCapture,...props}:HTMLAttributes<HTMLDivElement>&{label:string;children:ReactNode}){
 const root=useRef<HTMLDivElement>(null);
 return <div {...props} {...incomplete} ref={root} data-croma-component="Chip group" role="group" aria-label={label} tabIndex={props.tabIndex??-1} onClickCapture={event=>{
  onClickCapture?.(event);if(event.defaultPrevented)return;
  const removed=event.target instanceof Element?event.target.closest<HTMLButtonElement>('.croma-input-chip-remove'):null;
  if(!removed||removed.disabled)return;
  const before=Array.from(root.current?.querySelectorAll<HTMLButtonElement>('.croma-input-chip-remove:not(:disabled)')??[]),index=before.indexOf(removed);
  // Restore a useful focus target only if removal really unmounts the focused control.
  queueMicrotask(()=>requestAnimationFrame(()=>{if(removed.isConnected||!root.current)return;const active=document.activeElement;if(active&&active!==document.body&&active.isConnected)return;const after=Array.from(root.current.querySelectorAll<HTMLButtonElement>('.croma-input-chip-remove:not(:disabled)'));(after[Math.min(index,after.length-1)]??root.current).focus();}));
 }}>{children}</div>;
}

export function Segmented({label,options,value,onChange,className,style,...props}:Omit<HTMLAttributes<HTMLDivElement>,'onChange'> & {label:string;options:{value:string;label:string;disabled?:boolean}[];value:string;onChange:(value:string)=>void}){const refs=useRef<(HTMLButtonElement|null)[]>([]);return <div {...props} {...incomplete} className={className} data-croma-component="Segmented" data-croma-source-node="245:36918" role="group" aria-label={label} style={{...style,gridTemplateColumns:`repeat(${Math.max(1,options.length)}, minmax(0, 1fr))`}}>{options.map((option,index)=><Button key={option.value} ref={node=>{refs.current[index]=node;}} Type="Segmented" State={option.disabled?'Disabled':'Enabled'} Selected={option.value===value} onClick={()=>onChange(option.value)} onKeyDown={e=>{const enabled=options.map((o,i)=>o.disabled?-1:i).filter(i=>i>=0);const at=enabled.indexOf(index);const next=e.key==='ArrowRight'?enabled[(at+1)%enabled.length]:e.key==='ArrowLeft'?enabled[(at+enabled.length-1)%enabled.length]:e.key==='Home'?enabled[0]:e.key==='End'?enabled.at(-1):undefined;if(next!==undefined){e.preventDefault();refs.current[next]?.focus();onChange(options[next].value);}}}>{option.label}</Button>)}</div>;}
