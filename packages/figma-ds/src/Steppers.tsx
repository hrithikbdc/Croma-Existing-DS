import {useLayoutEffect,useRef,useState,type CSSProperties,type HTMLAttributes,type ReactNode} from 'react';
export interface StepItem {label:string;description?:string;icon?:ReactNode;number?:ReactNode;href?:string;onSelect?:()=>void;disabled?:boolean}
export interface SteppersProps extends Omit<HTMLAttributes<HTMLElement>,'onChange'> {label:string;steps:(string|StepItem)[];current:number;Orientation?:'Horizontal'|'Vertical';Theme?:'dark'|'light';Mode?:'Progress'|'Navigation';onStepChange?:(index:number)=>void}
/** Fit caller artwork into the written12px slot without changing original SVG dimensions. */
function StepIcon({children}:{children:ReactNode}){
 const content=useRef<HTMLSpanElement>(null);const[scale,setScale]=useState(1);
 useLayoutEffect(()=>{const node=content.current;if(!node)return;const fit=()=>{const width=node.offsetWidth,height=node.offsetHeight;setScale(width&&height?Math.min(1,12/width,12/height):1);};fit();const observer=new ResizeObserver(fit);observer.observe(node);return()=>observer.disconnect();},[children]);
 return <span className="croma-step-icon" aria-hidden="true"><span ref={content} className="croma-step-icon-content" style={{transform:`translate(-50%,-50%) scale(${scale})`}}>{children}</span></span>;
}
export function Steppers({label,steps,current,Orientation='Horizontal',Theme='dark',Mode='Progress',onStepChange,className='',style,...props}:SteppersProps){
 return <nav {...props} className={'croma-source-steppers '+className} data-croma-component="Steppers" data-mode={Mode} data-source-family="stepper-24548010" data-orientation={Orientation} data-theme={Theme} data-source-id={Orientation==='Horizontal'?(Theme==='dark'?'245:48010':'245:48078'):(Theme==='dark'?'245:48052':'245:48120')} aria-label={label} style={{'--croma-step-count':steps.length,...style} as CSSProperties}>
  <ol>{steps.map((entry,i)=>{const step=typeof entry==='string'?{label:entry}:entry;const state=i<current?'Completed':i===current?'Active':'Inactive';return <li key={i} data-step-state={state} aria-current={state==='Active'?'step':undefined}>
   <span className="croma-step-track">{Orientation==='Horizontal'&&<span className="croma-step-path croma-step-path-leading" data-hidden={i===0} data-path-state={i<=current?'Completed':'Inactive'} aria-hidden="true"/>}
    <span className="croma-spec-step-count">{step.icon?<StepIcon>{step.icon}</StepIcon>:<span aria-hidden="true">{step.number??i+1}</span>}{state==='Active'&&<span className="croma-step-active-ring" aria-hidden="true"/>}</span>
    {(Orientation==='Horizontal'||i<steps.length-1)&&<span className="croma-step-path croma-step-path-trailing" data-hidden={i===steps.length-1} data-path-state={i<current?'Completed':'Inactive'} aria-hidden="true"/>}
   </span><span className="croma-step-copy"><span className="croma-step-heading">{Mode==='Navigation'?(step.href?<a className="croma-step-link" href={step.disabled?undefined:step.href} aria-disabled={step.disabled||undefined} tabIndex={step.disabled?-1:undefined} aria-current={state==='Active'?'step':undefined} onClick={event=>{if(step.disabled){event.preventDefault();return;}step.onSelect?.();onStepChange?.(i);}}>{step.label}</a>:<button className="croma-step-link" type="button" disabled={step.disabled||(!step.onSelect&&!onStepChange)} aria-current={state==='Active'?'step':undefined} onClick={()=>{step.onSelect?.();onStepChange?.(i);}}>{step.label}</button>):step.label}</span>{step.description&&<span className="croma-step-description">{step.description}</span>}</span>
  </li>;})}</ol>
 </nav>;
}
