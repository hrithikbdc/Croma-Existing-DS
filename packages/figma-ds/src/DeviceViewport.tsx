import type {CSSProperties,HTMLAttributes,ReactNode} from 'react';
export const sourceDeviceViewports=[
 {nodeId:'414:82821',name:'Phone screen',width:390,height:844,sourceDevice:'414:82817'},
 {nodeId:'419:82812',name:'Display content',width:1366,height:853,sourceDevice:'414:82823'},
 {nodeId:'414:82837',name:'Laptop screen',width:1440,height:903,sourceDevice:'414:82828'},
 {nodeId:'414:82853',name:'Desktop screen',width:1920,height:1080,sourceDevice:'418:83949'},
] as const;
export type SourceDeviceViewportId=typeof sourceDeviceViewports[number]['nodeId'];
/** Editable content viewport from the Device page. Physical device artwork is intentionally not approximated. */
export function DeviceViewport({nodeId,children,className='',style,...props}:HTMLAttributes<HTMLDivElement>&{nodeId:SourceDeviceViewportId;children:ReactNode}){
 const source=sourceDeviceViewports.find(s=>s.nodeId===nodeId);if(!source)throw Error(`Unknown Device viewport ${nodeId}`);
 return <div {...props} className={`croma-device-viewport ${className}`} data-croma-source-node={nodeId} data-croma-source-device={source.sourceDevice} data-croma-source-width={source.width} data-croma-source-height={source.height} style={{boxSizing:'border-box',width:source.width,maxWidth:'100%',aspectRatio:`${source.width}/${source.height}`,overflow:'auto',position:'relative',...style} as CSSProperties}>{children}</div>;
}
