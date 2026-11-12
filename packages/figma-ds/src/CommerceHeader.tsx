import {useCromaTheme} from './Theme.js';
import {useEffect,useId,useRef,useState,type HTMLAttributes,type ReactNode,type MouseEventHandler} from 'react';
import {Logo} from './Logo.js';
import {Icon} from './Icon.js';

export interface CommerceHeaderAction {label:string;icon?:ReactNode;href?:string;onClick?:MouseEventHandler<HTMLButtonElement|HTMLAnchorElement>;disabled?:boolean;count?:number}
export interface CommerceHeaderLink {label:string;href:string;current?:boolean}
export interface CommerceHeaderProps extends HTMLAttributes<HTMLElement> {
 Theme?:'dark'|'light';logo?:ReactNode;logoHref?:string;homeLabel?:string;
 navigation?:CommerceHeaderLink[];navigationLabel?:string;menuLabel?:string;search?:ReactNode;
 location?:CommerceHeaderAction;account?:CommerceHeaderAction;cart?:CommerceHeaderAction;actions?:ReactNode;
}
function HeaderAction({action}:{action:CommerceHeaderAction}){
 const content=<>{action.icon&&<span className="croma-commerce-header__action-icon" aria-hidden="true">{action.icon}</span>}<span>{action.label}</span>{action.count!==undefined&&<span className="croma-commerce-header__count">{action.count}</span>}</>;
 return action.href&&!action.disabled?<a className="croma-commerce-header__action" href={action.href} onClick={action.onClick}>{content}</a>:<button className="croma-commerce-header__action" type="button" onClick={action.onClick} disabled={action.disabled||!action.onClick}>{content}</button>;
}
/** Editable prototype extension assembled from original assets. Not an exact reconstruction of the raster Header reference. */
export function CommerceHeader({Theme: themeOverride,logo,logoHref='/',homeLabel='Croma home',navigation=[],navigationLabel='Main navigation',menuLabel='Menu',search,location,account,cart,actions,className='',...props}:CommerceHeaderProps){const Theme=useCromaTheme(themeOverride,'dark');
 const[open,setOpen]=useState(false);const root=useRef<HTMLElement>(null),toggle=useRef<HTMLButtonElement>(null);const menuId=useId();
 useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){event.preventDefault();setOpen(false);toggle.current?.focus();}};const outside=(event:PointerEvent)=>{if(event.target instanceof Node&&!root.current?.contains(event.target))setOpen(false);};document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);};},[open]);
 useEffect(()=>{const query=window.matchMedia('(min-width:768px)');const change=()=>{if(query.matches)setOpen(false);};query.addEventListener('change',change);return()=>query.removeEventListener('change',change);},[]);
 return <header {...props} ref={root} className={`croma-commerce-header ${className}`} data-theme={Theme} data-croma-extension="CommerceHeader">
  <div className="croma-commerce-header__inner">
   {navigation.length>0&&<button ref={toggle} type="button" className="croma-commerce-header__menu" aria-label={menuLabel} aria-controls={menuId} aria-expanded={open} onClick={()=>setOpen(value=>!value)}><Icon nodeId={open?'219:35168':'219:34962'} decorative monochrome size={24}/></button>}
   <a className="croma-commerce-header__brand" href={logoHref} aria-label={homeLabel}>{logo??<Logo nodeId={Theme==='dark'?'39:2065':'39:2159'} decorative/>}</a>
   {search&&<div className="croma-commerce-header__search">{search}</div>}
   <div className="croma-commerce-header__actions">
    {location&&<HeaderAction action={{icon:<Icon nodeId="219:35149" decorative monochrome size={24}/>,...location}}/>}
    {account&&<HeaderAction action={account}/>}
    {cart&&<HeaderAction action={{icon:<Icon nodeId="111:2127" decorative monochrome size={24}/>,...cart}}/>}
    {actions}
   </div>
   {navigation.length>0&&<nav id={menuId} aria-label={navigationLabel} className="croma-commerce-header__navigation" data-open={open}><ul>{navigation.map(link=><li key={link.href+link.label}><a href={link.href} aria-current={link.current?'page':undefined} onClick={()=>setOpen(false)}>{link.label}</a></li>)}</ul></nav>}
  </div>
 </header>;
}

export interface BreadcrumbItem {label:string;href?:string}
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {items:BreadcrumbItem[];label?:string;Theme?:'dark'|'light'}
/** Prototype navigation extension. App routing and destination labels belong to the consumer. */
export function Breadcrumb({items,label='Breadcrumb',Theme: themeOverride,className='',...props}:BreadcrumbProps){const Theme=useCromaTheme(themeOverride,'dark');
 return <nav {...props} aria-label={label} className={`croma-breadcrumb ${className}`} data-theme={Theme} data-croma-extension="Breadcrumb"><ol>{items.map((item,index)=><li key={index}>{index>0&&<span className="croma-breadcrumb__separator" aria-hidden="true">/</span>}{index===items.length-1?<span aria-current="page">{item.label}</span>:item.href?<a href={item.href}>{item.label}</a>:<span>{item.label}</span>}</li>)}</ol></nav>;
}
