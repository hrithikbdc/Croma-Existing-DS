import {forwardRef,useEffect,useRef,useState,type ButtonHTMLAttributes,type CSSProperties,type ReactNode} from 'react';

export type LocalBadgeVariant='Default'|'New'|'Deal'|'Sustainable'|'Light';
const badgeSources={Default:'304:72591',New:'304:72593',Deal:'304:72599',Sustainable:'304:72608',Light:'307:72622'} as const;
const badgeArtwork={New:new URL('./assets/local-primitives/badge-new.svg',import.meta.url).href,Deal:new URL('./assets/local-primitives/badge-deal.svg',import.meta.url).href,Sustainable:new URL('./assets/local-primitives/badge-sustainable.svg',import.meta.url).href};
/** Separate authored local Label set304:72592, not the written Text Badges family. */
export function LocalBadge({Property1='Default',children='Label',className='',style}:{Property1?:LocalBadgeVariant;children?:ReactNode;className?:string;style?:CSSProperties}){
 const artwork=Property1==='New'||Property1==='Deal'||Property1==='Sustainable'?badgeArtwork[Property1]:undefined;
 return <span className={'croma-local-badge '+className} style={style} data-croma-component="Local Label" data-property-1={Property1} data-croma-source-node={badgeSources[Property1]}>{artwork&&<span className="croma-local-badge-icon" aria-hidden="true"><img src={artwork} alt="" width={Property1==='Deal'?32:16} height={Property1==='Deal'?32:16}/></span>}<span className="croma-local-badge-label">{children}</span></span>;
}

export type SourceOptionState='Default'|'Hover'|'Selected'|'selected hover';
const optionSources:Record<SourceOptionState,string>={Default:'845:82251',Hover:'845:82253',Selected:'845:82255','selected hover':'907:82273'};
export interface SourceOptionProps extends ButtonHTMLAttributes<HTMLButtonElement>{State?:SourceOptionState;selected?:boolean;children?:ReactNode}
export const SourceOption=forwardRef<HTMLButtonElement,SourceOptionProps>(function SourceOption({State,selected=false,children='Option',className='',onPointerEnter,onPointerLeave,...props},ref){
 const[hovered,setHovered]=useState(false);const state=State??(selected?(hovered?'selected hover':'Selected'):(hovered?'Hover':'Default'));
 return <button {...props} ref={ref} type={props.type??'button'} className={'croma-source-option '+className} data-croma-component="Local Option" data-state={state} data-croma-source-node={optionSources[state]} onPointerEnter={event=>{if(event.pointerType!=='touch')setHovered(true);onPointerEnter?.(event);}} onPointerLeave={event=>{setHovered(false);onPointerLeave?.(event);}}>{children}</button>;
});
export interface SourceListItem {value:string;label:string;disabled?:boolean}
/** List845:82271; its items retain the native Option44px authored row geometry. */
export function SourceList({label,items,value,onChange,className='',style}:{label:string;items:SourceListItem[];value?:string;onChange:(value:string)=>void;className?:string;style?:CSSProperties}){
 const refs=useRef<(HTMLButtonElement|null)[]>([]);const enabled=items.flatMap((item,index)=>item.disabled?[]:[index]);const active=items.findIndex(item=>item.value===value&&!item.disabled);const focusIndex=active<0?enabled[0]:active;
 const typeahead=useRef('');const timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 return <div role="listbox" aria-label={label} className={'croma-source-list '+className} style={style} data-croma-component="Local List" data-croma-source-node="845:82271">{items.map((item,index)=><SourceOption key={item.value} ref={node=>{refs.current[index]=node;}} role="option" aria-selected={item.value===value} disabled={item.disabled} tabIndex={index===focusIndex?0:-1} selected={item.value===value} onClick={()=>onChange(item.value)} onKeyDown={event=>{let next:number|undefined;const at=enabled.indexOf(index);if(event.key==='ArrowDown')next=enabled[(at+1)%enabled.length];else if(event.key==='ArrowUp')next=enabled[(at+enabled.length-1)%enabled.length];else if(event.key==='Home')next=enabled[0];else if(event.key==='End')next=enabled.at(-1);else if(event.key.length===1&&!event.altKey&&!event.ctrlKey&&!event.metaKey&&event.key!==' '){typeahead.current+=event.key.toLocaleLowerCase();if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>{typeahead.current='';},500);next=[...enabled.filter(i=>i>index),...enabled.filter(i=>i<=index)].find(i=>items[i].label.toLocaleLowerCase().startsWith(typeahead.current));}if(next!==undefined){event.preventDefault();refs.current[next]?.focus();onChange(items[next].value);}}}>{item.label}</SourceOption>)}</div>;
}
/** Original names remain stable even where numbered states are equivalent interaction phases. */
export const sourcePrimitiveMappings={
 Accordion:{Open:{node:'468:82715',consumer:'Accordion with leading/trailing source icon slots'},Close:{node:'468:82721',consumer:'Accordion with leading/trailing source icon slots'}},
 Cursor:{Visible:{node:'827:82251',consumer:'native focused text caret'},Invisible:{node:'827:82249',consumer:'native unfocused text caret'}},
 Container:{Close:{node:'549:83701',consumer:'BottomSheet Drag closed',sheetNode:'549:83711',sheetY:858},Open:{node:'549:83703',consumer:'BottomSheet Drag open',sheetNode:'549:83717',sheetY:364},State3:{node:'550:83915',consumer:'BottomSheet Close closed',sheetNode:'550:83916',sheetY:858},State4:{node:'550:83923',consumer:'BottomSheet Close open',sheetNode:'550:83924',sheetY:364},State5:{node:'557:83996',consumer:'Drag sheet expanded fullscreen with external close',sheetNode:'557:83997',sheetY:0,visualAcceptance:'live high-fidelity context557:83996 and exactclose asset verified; browser acceptance tracked separately'}}
} as const;
