import {useLayoutEffect,useRef,useState} from 'react';
import type {CSSProperties,HTMLAttributes,ReactNode} from 'react';
const phoneMask=new URL('./assets/devices/414-82817-imgScreenChangeMe.svg',import.meta.url).href;
const phoneBorder=new URL('./assets/devices/414-82817-imgScreenBorder.svg',import.meta.url).href;
const desktopPhoto=new URL('./assets/devices/418-83949-imgMac1.png',import.meta.url).href;
const desktopScreen=new URL('./assets/devices/418-83949-imgFrame6.svg',import.meta.url).href;
export const sourceDeviceFrames=[
 {nodeId:'414:82817',name:'Phone',width:422,height:876,screenNodeId:'414:82821',screenX:16,screenY:16,screenWidth:390,screenHeight:844},
 {nodeId:'418:83949',name:'Desktop',width:2131,height:1773,screenNodeId:'414:82853',screenX:106,screenY:133,screenWidth:1920,screenHeight:1080},
] as const;
export type SourceDeviceFrameId=typeof sourceDeviceFrames[number]['nodeId'];
/** Source casing artwork around an editable content slot. Source geometry scales as one canvas. */
export function DeviceFrame({nodeId,children,className='',style,...props}:HTMLAttributes<HTMLDivElement>&{nodeId:SourceDeviceFrameId;children:ReactNode}){
 const source=sourceDeviceFrames.find(n=>n.nodeId===nodeId);if(!source)throw Error(`Unknown source device frame ${nodeId}`);
 const host=useRef<HTMLDivElement>(null);const[scale,setScale]=useState(1);
 useLayoutEffect(()=>{const el=host.current;if(!el)return;const update=()=>setScale(el.getBoundingClientRect().width/source.width);update();const observer=new ResizeObserver(update);observer.observe(el);return()=>observer.disconnect();},[source.width]);
 const slot:CSSProperties={position:'absolute',left:source.screenX,top:source.screenY,width:source.screenWidth,height:source.screenHeight,overflow:'auto',background:'color(srgb 0.9764705896377563 0.9764705896377563 0.9764705896377563)',...(nodeId==='414:82817'?{maskImage:`url("${phoneMask}")`,WebkitMaskImage:`url("${phoneMask}")`,maskRepeat:'no-repeat',maskSize:'390px 844px'}:{})};
 // The normalized image crop maps the visible rect to the original source image.
 const crop={m00:0.6754358410835266,m02:0.1597464233636856,m11:0.6996830701828003,m12:0.14580032229423523};
 return <div {...props} ref={host} className={`croma-device-frame ${className}`} data-croma-source-node={nodeId} data-croma-device-scale={scale} style={{position:'relative',boxSizing:'border-box',width:source.width,maxWidth:'100%',aspectRatio:`${source.width}/${source.height}`,...style}}><div data-croma-device-canvas style={{position:'absolute',left:0,top:0,width:source.width,height:source.height,transform:`scale(${scale})`,transformOrigin:'top left'}}>
 {nodeId==='414:82817'?<div data-croma-source-node="414:82818" style={{position:'absolute',inset:0,borderRadius:56,background:'color(srgb 0.092777781188488 0.10015152394771576 0.13333334028720856)',boxShadow:'0px 20px 40px 0px color(srgb 0 0.016666671261191368 0.0833333358168602 / 0.30000001192092896), inset 0px 2px 3px 0px color(srgb 0.8125 0.8500000238418579 1 / 0.20000000298023224)',pointerEvents:'none'}}><div style={{position:'absolute',inset:0,border:'0.5px solid black',borderRadius:'inherit',boxSizing:'border-box'}}/></div>:<div data-croma-source-node="414:82852" style={{position:'absolute',left:0,top:7,width:2131,height:1766,overflow:'hidden',pointerEvents:'none'}}><img src={desktopPhoto} alt="" width={2500} height={2000} style={{position:'absolute',maxWidth:'none',width:2131/crop.m00,height:1766/crop.m11,left:-crop.m02*2131/crop.m00,top:-crop.m12*1766/crop.m11}}/></div>}
 {nodeId==='418:83949'&&<img src={desktopScreen} alt="" width={1920} height={1080} style={{position:'absolute',left:106,top:133,maxWidth:'none',pointerEvents:'none'}}/>}
 <div data-croma-device-content data-croma-source-node={source.screenNodeId} style={slot}>{children}</div>
 {nodeId==='414:82817'&&<img src={phoneBorder} alt="" width={391} height={845} style={{position:'absolute',left:15.5,top:15.5,maxWidth:'none',pointerEvents:'none'}}/>}
 </div></div>;
}
