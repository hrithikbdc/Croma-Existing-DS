import {useRef} from 'react';
import {BottomSheet,type BottomSheetProps} from './Behaviours.js';
export type SourceSheetContainerState='Close'|'Open'|'State3'|'State4'|'State5';
const cases={Close:{node:'549:83701',type:'Drag',open:false,closed:'Close'},Open:{node:'549:83703',type:'Drag',open:true,closed:'Close'},State3:{node:'550:83915',type:'Close',open:false,closed:'State3'},State4:{node:'550:83923',type:'Close',open:true,closed:'State3'},State5:{node:'557:83996',type:'Drag',open:true,closed:'Close'}} as const;
const expandedClose=new URL('./assets/local-primitives/container-state5-close.svg',import.meta.url).href;
/** Container549:83702, including the source's expanded State5. Numbered names remain stable. */
export function SourceSheetContainer({State='Close',onStateChange,children,closeIcon,...props}:Omit<BottomSheetProps,'open'|'onClose'|'Type'>&{State?:SourceSheetContainerState;onStateChange:(state:SourceSheetContainerState)=>void}){
 const source=cases[State];const gesture=useRef<{x:number;y:number;height:number;pointerId:number}|null>(null);
 return <div data-croma-component="Source Sheet Container" data-source-state={State} data-croma-source-node={source.node}
  onPointerDownCapture={event=>{const target=event.target as HTMLElement;if(event.button!==0||!target.closest('.croma-sheet-handle,.croma-source-expanded-grip'))return;const dialog=event.currentTarget.querySelector('dialog');if(!dialog)return;gesture.current={x:event.clientX,y:event.clientY,height:dialog.getBoundingClientRect().height,pointerId:event.pointerId};if(target.closest('.croma-source-expanded-grip'))target.setPointerCapture(event.pointerId);}}
  onPointerCancelCapture={()=>{gesture.current=null;}}
  onPointerUpCapture={event=>{const start=gesture.current;gesture.current=null;if(!start||event.pointerId!==start.pointerId)return;const dy=event.clientY-start.y;if(Math.abs(dy)<=Math.abs(event.clientX-start.x))return;if(State==='Open'&&dy< -start.height/4){event.preventDefault();event.stopPropagation();onStateChange('State5');}else if(State==='State5'&&dy>start.height/4){event.preventDefault();event.stopPropagation();onStateChange('Close');}}}>
  <BottomSheet {...props} closeIcon={closeIcon} Type={source.type} open={source.open} onClose={()=>onStateChange(source.closed)}>
   {State==='State5'&&<><div className="croma-source-expanded-grip" aria-hidden="true"/><button type="button" className="croma-source-expanded-close" aria-label="Close expanded sheet" onClick={()=>onStateChange('Close')}>{closeIcon??<img src={expandedClose} width={24} height={24} alt="" data-croma-source-node="557:84009"/>}</button></>}
   {children}
  </BottomSheet>
 </div>;
}
