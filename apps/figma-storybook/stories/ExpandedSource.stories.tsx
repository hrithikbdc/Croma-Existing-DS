import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Tabs,Tooltip,SearchBar,LocalBadge,SourceOption,SourceList,StickyFooter,StickyFooterLayout,Icon,SourceSheetContainer,type SourceSheetContainerState,NavigationDrawer} from '@croma/figma-ds';
const meta={title:'Components/Expanded source coverage',parameters:{layout:'padded',controls:{disable:true}}} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const LocalLabels:Story={render:()=> <div style={{display:'flex',gap:20,alignItems:'flex-start',flexWrap:'wrap'}}>{(['Default','New','Deal','Sustainable','Light'] as const).map(Property1=><LocalBadge key={Property1} Property1={Property1}/>)}</div>};
export const LocalOptionStates:Story={render:()=> <div style={{display:'flex',gap:20,alignItems:'flex-start'}}>{(['Default','Hover','Selected','selected hover'] as const).map(State=><SourceOption key={State} State={State}/>)}</div>};
function ListExample(){const[value,setValue]=useState('3');return <SourceList label="Source options" items={[1,2,3,4,5].map(value=>({value:String(value),label:`Option ${value}`}))} value={value} onChange={setValue}/>;}
export const LocalList:Story={render:()=> <ListExample/>};
function SearchExample(){const[value,setValue]=useState('');const[result,setResult]=useState('');return <><SearchBar SourceBranch="Local" label="Local search" value={value} onChange={setValue} onSubmit={setResult}/><p role="status">{result}</p></>;}
export const LocalSearch:Story={render:()=> <SearchExample/>};
function ScrollingTabs(){const[value,setValue]=useState('1');return <div style={{width:320,maxWidth:'100%'}}><Tabs label="Scrollable source tabs" Layout="Scrollable" items={['New arrivals','Latest technology','Home appliances','Accessories and offers','More categories'].map((label,index)=>({value:String(index+1),label,content:`${label} content`}))} value={value} onChange={setValue}/></div>;}
export const ScrollableTabs:Story={render:()=> <ScrollingTabs/>,parameters:{docs:{description:{story:'Visible source guidelines define scrolling and content-width tabs. The numeric leading offset is not supplied by the inspected source, so it remains an explicit consumer parameter rather than an invented DS token.'}}}};
function IconTabs(){const[value,setValue]=useState('deals');return <div style={{width:320,maxWidth:'100%'}}><Tabs label="Icon tab composition" items={[{value:'deals',label:'Deals',icon:<Icon nodeId="219:35023" size={16} decorative/>,content:'Deals content'},{value:'all',label:'All products',content:'All products content'}]} value={value} onChange={setValue}/></div>;}
export const IconTabComposition:Story={render:()=> <IconTabs/>,parameters:{docs:{description:{story:'Functional composition demonstrating the new icon slot with original same-file artwork. Tab-specific icon gap and size require a source figure mapping before this composition receives exact visual acceptance.'}}}};
export const InformationTooltip:Story={render:()=> <div style={{padding:80}}><Tooltip Trigger="Information" label="Product information" description="Original source information icon trigger."/></div>};
export const ChildTooltip:Story={render:()=> <div style={{padding:80}}><Tooltip label="Delivery information" trigger={<button type="button">Delivery information</button>} description="The child keeps its accessible name and receives the tooltip description."/></div>};
function FooterFlow({Long=false}:{Long?:boolean}){return <StickyFooterLayout footer={<StickyFooter Mode="Flow"/>}><h2>Source flow footer</h2>{Long?Array.from({length:30},(_,i)=><p key={i}>Page content {i+1}</p>):<p>Short page content</p>}</StickyFooterLayout>;}
export const ShortPageFooter:Story={parameters:{layout:'fullscreen'},render:()=> <FooterFlow/>};
export const LongPageFooter:Story={parameters:{layout:'fullscreen'},render:()=> <FooterFlow Long/>};

function SourceContainerExample(){const[state,setState]=useState<SourceSheetContainerState>('Close');return <><button onClick={()=>setState('Open')}>Open source drag container</button><button onClick={()=>setState('State4')}>Open source close container</button><p role="status">{state}</p><SourceSheetContainer State={state} onStateChange={setState} title="Title"><p>Content</p></SourceSheetContainer></>;}
export const SourceContainers:Story={parameters:{layout:'fullscreen'},render:()=> <SourceContainerExample/>};

function ExpandedContainer(){const[state,setState]=useState<SourceSheetContainerState>('State5');return <><button onClick={()=>setState('State5')}>Open expanded source sheet</button><SourceSheetContainer State={state} onStateChange={setState} title="Placeholder">{[180,131,131,211,211,211].map((height,index)=><div key={index} data-source-placeholder={index+1} style={{height,width:'100%',background:'linear-gradient(rgba(42,42,42,.05),rgba(42,42,42,.05)),#f9f9f9'}}/>)}</SourceSheetContainer></>;}
export const ExpandedSourceContainer:Story={parameters:{layout:'fullscreen'},render:()=> <ExpandedContainer/>};

function DrawerGestureExample(){const[open,setOpen]=useState(true);const[actions,setActions]=useState(0);return <><button onClick={()=>setOpen(true)}>Open gesture drawer</button><p role="status">Selected {actions} times</p><NavigationDrawer open={open} onClose={()=>setOpen(false)} title="Gesture drawer" sections={[{id:'gesture',items:[{id:'target',label:'Gesture target',onSelect:()=>setActions(n=>n+1)}]}]}/></>;}
export const DrawerGestureRegression:Story={parameters:{layout:'fullscreen'},render:()=> <DrawerGestureExample/>};
