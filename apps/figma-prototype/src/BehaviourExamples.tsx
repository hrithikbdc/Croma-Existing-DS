import { useState } from 'react';
import {sourcePreviewSurfaces} from './IconCatalogue';
import { Accordion, Checkbox, Dropdown, Filter, PopUp, RadioGroup, SearchBar, Tabs, ToggleSwitch } from '@croma/figma-ds';
export function BehaviourExamples(){
 const[checked,setChecked]=useState(false);const[updates,setUpdates]=useState(false);const[filter,setFilter]=useState(false);const[method,setMethod]=useState('delivery');const[tab,setTab]=useState('overview');const[open,setOpen]=useState(false);const[query,setQuery]=useState('');const[result,setResult]=useState('');
 const options=[{value:'delivery',label:'Delivery'},{value:'collection',label:'Collection'}];
 return <section className="behaviour-examples" aria-label="Behaviour examples"><h2>Try the components</h2><p>Changes stay in this demo. Components are being completed one family at a time.</p>
 <Checkbox Theme="light" label="Include accessories" checked={checked} onChange={event=>setChecked(event.target.checked)}/>
 <ToggleSwitch Theme="light" label="Receive example updates" checked={updates} onChange={event=>setUpdates(event.target.checked)}/>
 <Filter selected={filter} onSelectedChange={setFilter}>Available nearby</Filter>
 <RadioGroup Theme="light" label="Fulfilment choice" options={options} value={method} onChange={setMethod}/>
 <Dropdown label="Fulfilment dropdown" options={options} value={method} onChange={event=>setMethod(event.target.value)}/>
 <div style={{background:sourcePreviewSurfaces.Dark,color:sourcePreviewSurfaces.Light}}><Accordion heading="How this example works"><p>Checkboxes, selections, search and navigation use local React state. Nothing is sent to a service.</p></Accordion></div>
 <Tabs Theme="light" label="Example sections" value={tab} onChange={setTab} items={[{value:'overview',label:'Overview',content:<p>Overview panel</p>},{value:'details',label:'Details',content:<p>Details panel</p>}]}/>
 <button type="button" onClick={()=>setOpen(true)}>Open example popup</button>
 <PopUp open={open} onClose={()=>setOpen(false)} title="Example popup"><p>Escape and Close dismiss this popup.</p></PopUp>
 <SearchBar Theme="light" label="Example search" value={query} onChange={setQuery} onSubmit={setResult}/>
 <p role="status">{result?`Example query: ${result}`:'No query submitted.'}</p>
 </section>;
}
