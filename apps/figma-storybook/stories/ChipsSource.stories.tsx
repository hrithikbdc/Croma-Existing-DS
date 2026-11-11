import {useState,type ReactNode} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {InfoChip,InputChip,Choice} from '@croma/figma-ds';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
function Surface({Theme,children}:{Theme:'dark'|'light';children:ReactNode}){return <div style={{padding:24,background:sourcePreviewSurfaces[Theme==='dark'?'Dark':'Light'],color:sourcePreviewSurfaces[Theme==='dark'?'Light':'Dark'],minWidth:0}}>{children}</div>;}
function Information(){return <div style={{display:'grid',gap:24}}>{([{Theme:'dark',Special:false,id:'144:9064'},{Theme:'dark',Special:true,id:'144:9065'},{Theme:'light',Special:false,id:'144:9070'}] as const).map(c=><section key={c.id}><h3>{c.Theme} / {c.Special?'Special':'Default'}</h3><Surface Theme={c.Theme}><InfoChip Theme={c.Theme} Type={c.Special?'Special':'Default'}>Info chip</InfoChip></Surface></section>)}</div>;}
function Removable({Theme='dark',Label='Input chip',Disabled=false,State='Enabled'}:{Theme?:'dark'|'light';Label?:string;Disabled?:boolean;State?:'Enabled'|'Disabled'|'Hovered'|'Focused'|'Pressed'}){const[removed,setRemoved]=useState(false);return <Surface Theme={Theme}>{removed?<><p role="status">Chip removed.</p><button onClick={()=>setRemoved(false)}>Restore chip</button></>:<InputChip State={State} Theme={Theme} label={Label} disabled={Disabled} onRemove={()=>setRemoved(true)}/>}</Surface>;}
const meta={title:'Components/Chips/Figma examples',parameters:{layout:'padded'},args:{Theme:'dark',Label:'Input chip',Disabled:false,State:'Enabled'},argTypes:{State:{control:'select',options:['Enabled','Disabled','Hovered','Focused','Pressed']},Theme:{control:'select',options:['dark','light']},Label:{control:'text'},Disabled:{control:'boolean'}},render:args=><Removable {...args}/>} satisfies Meta<typeof Removable>;
export default meta;
type Story=StoryObj<typeof meta>;
export const InformationChips:Story={render:()=> <Information/>,parameters:{controls:{disable:true}}};
export const RemoveInputChip:Story={};
export const LightInputChip:Story={args:{Theme:'light'}};
export const LongInputChip:Story={args:{Label:'A longer product label that must still leave the remove control available'}};

function ChoiceExample({Theme,State='Enabled'}:{Theme:'dark'|'light';State?:'Enabled'|'Disabled'|'Hovered'|'Focused'|'Pressed'}){const[value,setValue]=useState('one');return <Surface Theme={Theme}><Choice label="Choice chips" Theme={Theme} State={State} options={[{value:'one',label:'Label'},{value:'two',label:'Label'}]} value={value} onChange={setValue}/></Surface>;}
export const ChoiceChipStates:Story={parameters:{controls:{disable:true}},render:()=> <div style={{display:'grid',gap:24}}>{(['dark','light'] as const).flatMap(Theme=>(['Enabled','Disabled','Hovered','Focused','Pressed'] as const).map(State=><section key={Theme+State}><h3>{Theme} / {State}</h3><ChoiceExample Theme={Theme} State={State}/></section>))}</div>};

export const InputChipStates:Story={parameters:{controls:{disable:true}},render:()=> <div style={{display:'grid',gap:24}}>{(['dark','light'] as const).flatMap(Theme=>(['Enabled','Disabled','Hovered','Focused','Pressed'] as const).map(State=><section key={Theme+State}><h3>{Theme} / {State}</h3><Removable Theme={Theme} State={State}/></section>))}</div>};
