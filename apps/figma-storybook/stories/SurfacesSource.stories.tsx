import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {PopUp,BottomSheet,Card,cardSourceExampleMedia} from '@croma/figma-ds';
interface Args{Case:'Mobile Popup'|'Desktop Popup'|'Fullscreen Popup'|'Drag Sheet'|'Close Sheet'}
function Surface({Case}:Args){const[open,setOpen]=useState(true);const sheet=Case.includes('Sheet');return <><button onClick={()=>setOpen(true)}>Open {Case}</button>{sheet?<BottomSheet open={open} onClose={()=>setOpen(false)} title="Title" Type={Case==='Drag Sheet'?'Drag':'Close'} contentTitle={Case==='Close Sheet'?'Title':undefined}><p>Content</p></BottomSheet>:<PopUp open={open} onClose={()=>setOpen(false)} title="Title" Size={Case==='Desktop Popup'?'Desktop':'Mobile'} Type={Case==='Fullscreen Popup'?'Fullscreen':'Default'} dismissOnScrim><p>Content</p></PopUp>}</>;}
const meta={title:'Components/Surfaces/Figma examples',args:{Case:'Mobile Popup'},argTypes:{Case:{control:'select',options:['Mobile Popup','Desktop Popup','Fullscreen Popup','Drag Sheet','Close Sheet']}},parameters:{layout:'fullscreen'},render:args=><Surface key={args.Case} {...args}/>} satisfies Meta<Args>;
export default meta;
type Story=StoryObj<typeof meta>;
export const PopupAndSheet:Story={};
export const DesktopPopup:Story={args:{Case:'Desktop Popup'}};
export const DragSheet:Story={args:{Case:'Drag Sheet'}};
export const CloseSheet:Story={args:{Case:'Close Sheet'}};
export const SourceCard:Story={parameters:{controls:{disable:true},layout:'padded'},render:()=> <div style={{width:328,maxWidth:'100%'}}><Card Variant="With Copy" title="Title" description="Body" media={<img src={cardSourceExampleMedia.src} alt="Source card media" data-croma-source-node={cardSourceExampleMedia.sourceNodeId}/>}/></div>};
export const FullscreenPopup:Story={args:{Case:'Fullscreen Popup'}};
