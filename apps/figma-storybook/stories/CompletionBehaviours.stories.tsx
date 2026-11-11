import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {ChipGroup,InputChip,Steppers,PopUp,Button,MenuPopover,type MenuSection} from '@croma/figma-ds';
const meta={title:'Components/Acceptance fixes/Interaction compositions',parameters:{layout:'padded'}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
function Chips(){const[values,setValues]=useState(['Delivery','Collection','Accessories']);return <div><ChipGroup label="Remove options">{values.map(label=><InputChip key={label} Theme="light" label={label} onRemove={()=>setValues(values.filter(v=>v!==label))}/>)}</ChipGroup><p role="status">{values.length} options remaining</p><button onClick={()=>setValues(['Delivery','Collection','Accessories'])}>Restore options</button></div>;}
export const RemovalFocus:Story={render:()=> <Chips/>};
function Navigation(){const[current,setCurrent]=useState(1);return <><Steppers Theme="light" label="Checkout progression" steps={[{label:'Delivery',description:'Address'},{label:'Payment',description:'Method'},{label:'Review',description:'Confirm'},{label:'Complete',disabled:true}]} current={current} Mode="Navigation" onStepChange={setCurrent}/><p role="status">Step {current+1}</p></>;}
export const NavigableSteps:Story={render:()=> <Navigation/>};
function Temporary({atBottom=false}:{atBottom?:boolean}){const[value,setValue]=useState('none');const sections:MenuSection[]=[{id:'main',title:'Section title',items:[{id:'one',label:'Delivery',onSelect:()=>setValue('Delivery')},{id:'disabled',label:'Unavailable',disabled:true},{id:'two',label:'Collection',onSelect:()=>setValue('Collection')}]}];return <><div style={atBottom?{position:'fixed',bottom:0,left:0}:undefined}><MenuPopover label="Fulfilment choices" trigger="Choose fulfilment" sections={sections}/></div><p role="status">Selected: {value}</p></>;}
export const TemporaryNavigationMenu:Story={render:()=> <Temporary/>};
function Actions({rtl=false}:{rtl?:boolean}){const[open,setOpen]=useState(false),[choice,setChoice]=useState('none');return <div dir={rtl?'rtl':'ltr'}><Button Type="Filled" Size="Large" Theme="light" onClick={()=>setOpen(true)}>Open confirmation</Button><PopUp open={open} onClose={()=>setOpen(false)} title="Confirmation" dismissAction={<Button Type="Text" Size="Small" Theme="light" onClick={()=>{setChoice('Dismiss');setOpen(false);}}>Dismiss</Button>} confirmAction={<Button Type="Filled" Size="Small" Theme="light" onClick={()=>{setChoice('Confirm');setOpen(false);}}>Confirm</Button>}><p>Content</p></PopUp><p role="status">Action: {choice}</p></div>;}
export const PopupActions:Story={render:()=> <Actions/>};
export const PopupActionsRtl:Story={render:()=> <Actions rtl/>};

export const TemporaryMenuNearBottom:Story={render:()=> <Temporary atBottom/>};
