import {forwardRef,useCallback,useEffect,useLayoutEffect,useId,useRef,useState,type CSSProperties,type SelectHTMLAttributes} from 'react';
import {dropdownArtwork} from './dropdown-artwork.js';
import {formDropdownArtwork,formDropdownSourceIds} from './form-dropdown-artwork.js';
export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>,'multiple'|'size'> {
 Branch?:'Default'|'Form';
 /** User-approved alternate; source border treatment is the default. */
 focusAppearance?:'source'|'outer-outline';
 label:string;
 options:{value:string;label:string;disabled?:boolean}[];
 State?:'Default'|'Hover'|'selected'|'Option 1';
 Visible?:'No'|'Yes'|'Selected'|'Hover';
}
const sourceCases={'Default|No':'1715:79530','Hover|No':'1715:79540','selected|Yes':'1715:79550','Option 1|Selected':'1715:79561','Option 1|Yes':'1715:79573','Option 1|Hover':'1715:79585'} as const;
export const Dropdown=forwardRef<HTMLSelectElement,DropdownProps>(function Dropdown({Branch='Default',focusAppearance='source',label,options,State,Visible,value,defaultValue,id:suppliedId,onChange,onKeyDown,onPointerDown,onMouseDown,onClick,onBlur,onFocus,style,className='',disabled=false,...props},ref){
 const uid=useId(),id=suppliedId??uid;const native=useRef<HTMLSelectElement|null>(null),root=useRef<HTMLDivElement|null>(null);
 const initial=defaultValue??(State==='Option 1'?options[0]?.value:'')??'';
 const[local,setLocal]=useState(String(initial));const[expanded,setExpanded]=useState(false);const[hovered,setHovered]=useState(false);const[active,setActive]=useState(-1);
 const[above,setAbove]=useState(false);const[availableHeight,setAvailableHeight]=useState(320);
 const search=useRef({text:'',time:0});const forced=State!==undefined||Visible!==undefined;
 const suppliedState=State??'Default',suppliedVisible=Visible??(suppliedState==='selected'||suppliedState==='Option 1'?'Yes':'No');
 const forcedId=sourceCases[`${suppliedState}|${suppliedVisible}` as keyof typeof sourceCases];
 if(forced&&!forcedId)throw new Error(`No Figma Dropdown variant: State=${suppliedState}, Visible=${suppliedVisible}`);
 const selected=String(value!==undefined?value:local);const filled=options.some(o=>o.value===selected)&&selected!=='';
 const open=!disabled&&(forced?forcedId==='1715:79550'||forcedId==='1715:79561':expanded);
 const canonicalSourceId=forced?forcedId:open?filled?'1715:79561':'1715:79550':filled?hovered?'1715:79585':'1715:79573':hovered?'1715:79540':'1715:79530';
 const sourceId=Branch==='Form'?formDropdownSourceIds[canonicalSourceId]:canonicalSourceId;const floating=Branch==='Form'&&!['1715:79530','1715:79540'].includes(canonicalSourceId);
 const art=Branch==='Form'?formDropdownArtwork[canonicalSourceId]:dropdownArtwork[canonicalSourceId];const shown=options.find(o=>o.value===selected)?.label??(State==='Option 1'?options[0]?.label:undefined)??label;
 const enabled=options.map((o,i)=>o.disabled?-1:i).filter(i=>i>=0);
 const attach=useCallback((node:HTMLSelectElement|null)=>{native.current=node;if(typeof ref==='function')ref(node);else if(ref)ref.current=node;},[ref]);
 useLayoutEffect(()=>{if(!open)return;const place=()=>{const r=root.current?.querySelector('.croma-dropdown__control')?.getBoundingClientRect();if(!r)return;const below=window.innerHeight-r.bottom-1,top=r.top-1;const flip=below<Math.min(options.length*44,320,window.innerHeight/2)&&top>below;setAbove(flip);setAvailableHeight(Math.max(0,flip?top:below));};place();window.addEventListener('resize',place);window.addEventListener('scroll',place,true);return()=>{window.removeEventListener('resize',place);window.removeEventListener('scroll',place,true);};},[open,options.length]);
 useEffect(()=>{if(!open)return;const outside=(e:PointerEvent)=>{if(e.target instanceof Node&&!root.current?.contains(e.target))setExpanded(false);};document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside);},[open]);
 useEffect(()=>{const form=native.current?.form;if(!form||value!==undefined)return;const reset=(event:Event)=>setTimeout(()=>{if(!event.defaultPrevented){setLocal(native.current?.value??'');setExpanded(false);}},0);form.addEventListener('reset',reset);return()=>form.removeEventListener('reset',reset);},[value]);
 useEffect(()=>{if(open&&active>=0)root.current?.querySelector(`[data-option-index="${active}"]`)?.scrollIntoView({block:'nearest'});},[open,active]);
 const begin=()=>{setActive(Math.max(enabled[0]??-1,options.findIndex(o=>o.value===selected&&!o.disabled)));setExpanded(true);};
 const commit=(index:number)=>{const option=options[index],select=native.current;if(!select||!option||option.disabled)return;select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));setExpanded(false);};
 return <div ref={root} className="croma-dropdown" data-croma-component="Dropdown" data-source-id={sourceId} data-dropdown-branch={Branch} data-focus-appearance={focusAppearance} data-floating={floating} data-open={open} data-popup-above={above} data-disabled={disabled} style={{'--croma-dropdown-available-height':availableHeight+'px'} as CSSProperties} onPointerEnter={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)}>
  <div className="croma-dropdown__control">
   <select {...props} id={id} ref={attach} disabled={disabled} className={`croma-dropdown__native ${className}`} style={{...style,opacity:0}} value={value} defaultValue={value===undefined?initial:undefined} aria-label={props['aria-label']??label} aria-expanded={open} aria-controls={open?id+'-options':undefined} aria-activedescendant={open&&active>=0?id+'-option-'+active:undefined}
    onChange={e=>{setLocal(e.currentTarget.value);setExpanded(false);onChange?.(e);}}
    onPointerDown={e=>{onPointerDown?.(e);if(e.defaultPrevented||disabled)return;e.preventDefault();e.currentTarget.focus();if(open)setExpanded(false);else begin();}}
    onMouseDown={e=>{onMouseDown?.(e);e.preventDefault();}} onClick={e=>{onClick?.(e);e.preventDefault();}}
    onFocus={onFocus} onBlur={e=>{onBlur?.(e);setExpanded(false);}}
    onKeyDown={e=>{onKeyDown?.(e);if(e.defaultPrevented)return;
     if(e.key==='Tab'){setExpanded(false);return;}
     if(e.key==='Escape'){if(open){e.preventDefault();setExpanded(false);}return;}
     if(e.key==='Enter'||e.key===' '){e.preventDefault();if(open)commit(active);else begin();return;}
     if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();if(!enabled.length)return;let next=active;if(!open){begin();next=options.findIndex(o=>o.value===selected&&!o.disabled);}
      const at=enabled.indexOf(next);next=e.key==='Home'?enabled[0]:e.key==='End'?enabled.at(-1)!:e.key==='ArrowUp'?enabled[at<=0?enabled.length-1:at-1]:enabled[(at+1)%enabled.length];setActive(next);return;}
     if(e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey){e.preventDefault();const now=Date.now();search.current={text:(now-search.current.time<700?search.current.text:'')+e.key.toLocaleLowerCase(),time:now};const next=options.findIndex(o=>!o.disabled&&o.label.toLocaleLowerCase().startsWith(search.current.text));if(next>=0){setActive(next);setExpanded(true);}}
    }}>
    {!options.some(o=>o.value==='')&&<option value="" hidden>{label}</option>}{options.map(o=><option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
   </select>
   {floating&&<span className="croma-dropdown__floating-label" aria-hidden="true">{label}</span>}
   <span className="croma-dropdown__value" aria-hidden="true">{floating&&!filled&&State!=='Option 1'?'':shown}</span>
   <span className="croma-dropdown__border" aria-hidden="true"><img className="croma-dropdown__left" src={art.Left} width={18} height={56} alt=""/><img className="croma-dropdown__right" src={art.Right} width={18} height={56} alt=""/>{Branch==='Form'?<span className="croma-dropdown__form-top"><span className="croma-dropdown__notch">{label}</span><span style={{backgroundImage:`url("${art['top line']}")`}}/></span>:<span className="croma-dropdown__top" style={{backgroundImage:`url("${art['top line']}")`}}/>}<span className="croma-dropdown__bottom" style={{backgroundImage:`url("${art['bottom line']}")`}}/></span>
   <img className="croma-dropdown__arrow" src={art['Icons/Arrows']} width={16} height={16} alt="" aria-hidden="true"/>
  </div>
  {open&&<div id={id+'-options'} role="listbox" aria-label={label} className="croma-dropdown__list">{options.map((o,i)=><div key={o.value} id={id+'-option-'+i} role="option" aria-selected={selected===o.value} aria-disabled={o.disabled||undefined} data-option-index={i} data-active={active===i} className="croma-dropdown__option" onPointerDown={e=>e.preventDefault()} onPointerEnter={()=>{if(!o.disabled)setActive(i);}} onClick={()=>commit(i)}>{o.label}</div>)}</div>}
 </div>;
});

/** Source form Dropdown840:82414, distinct from Default Dropdown1715:79529. */
export const FormDropdown=forwardRef<HTMLSelectElement,Omit<DropdownProps,'Branch'>>(function FormDropdown(props,ref){return <Dropdown {...props} ref={ref} Branch="Form"/>;});
