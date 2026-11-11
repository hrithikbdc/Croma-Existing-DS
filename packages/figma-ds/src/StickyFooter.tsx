import { useLayoutEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';
export interface StickyFooterProps extends HTMLAttributes<HTMLElement> {
  /** Supply children for a custom footer; omit them for the authored Price and CTA composition. */
  price?: ReactNode;
  installment?: ReactNode;
  action?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onInstallmentClick?: () => void;
  sticky?: boolean;
  /** Separate the source overview overlay from the source short-page/footer-flow pattern. */
  Mode?:'Sticky'|'Fixed'|'Flow';
}
/** Editable footer278:59574; copied Search tables on this page do not define its layout. */
export function StickyFooter({children,price='₹21,999 or',installment='₹1,365/mo*',action,actionLabel='Add to cart',onAction,onInstallmentClick,sticky=true,Mode,className='',...props}:StickyFooterProps){
  return <footer {...props} className={'croma-sticky-footer '+className} data-croma-component="Sticky Footer" data-croma-source-node="278:59574" data-sticky={sticky} data-footer-mode={Mode??(sticky?'Sticky':'Flow')}>
    {children!==undefined?children:<div className="croma-sticky-footer-row">
      <div className="croma-sticky-footer-price"><div className="croma-sticky-footer-price-value">{price}</div>
        {installment!==null&&(onInstallmentClick?<button type="button" className="croma-sticky-footer-installment" onClick={onInstallmentClick}>{installment}</button>:<span className="croma-sticky-footer-installment">{installment}</span>)}
      </div>
      <div className="croma-sticky-footer-action">{action??<button type="button" className="croma-sticky-footer-cta" onClick={onAction}>{actionLabel}</button>}</div>
    </div>}
  </footer>;
}

/** Page-shell composition for visible guideline278:63640: short pages fill the viewport,
 * long pages place the footer after their content. The footer geometry stays source-scoped. */
export function StickyFooterLayout({children,footer,className='',style,...props}:HTMLAttributes<HTMLDivElement>&{footer:ReactNode}){const slot=useRef<HTMLDivElement>(null);const[reserved,setReserved]=useState<number|undefined>(undefined);useLayoutEffect(()=>{const node=slot.current?.querySelector<HTMLElement>('[data-croma-component="Sticky Footer"]');if(!node)return;const measure=()=>setReserved(node.dataset.footerMode==='Fixed'?node.getBoundingClientRect().height:undefined);measure();const observer=new ResizeObserver(measure);observer.observe(node);return()=>observer.disconnect();},[footer]);return <div {...props} className={'croma-sticky-footer-layout '+className} style={style} data-croma-source-node="278:63640"><main className="croma-sticky-footer-layout-content">{children}</main><div ref={slot} className="croma-sticky-footer-layout-footer" style={reserved===undefined?undefined:{height:reserved}}>{footer}</div></div>;}
