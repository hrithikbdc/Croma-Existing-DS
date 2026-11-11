import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {SearchCombobox,type SearchComboboxProps,type VariantSuggestion} from '../../../packages/figma-ds/src/SearchCombobox';
import '../../../packages/figma-ds/src/search-combobox.css';
const variants:VariantSuggestion[]=[{id:'one',model:'Example phone 12',brand:'Example',storage:'128 GB',finish:'Midnight',description:'Model and variant are separate fields'},{id:'unavailable',model:'Example phone 13',brand:'Example',storage:'256 GB',finish:'Blue',disabled:true,description:'Unavailable for this prototype'},{id:'two',model:'Another phone Pro',brand:'Another',storage:'256 GB',finish:'Silver'}];
function Example({Theme='dark',loading,error,empty=false,narrow=false,long=false}:Partial<SearchComboboxProps>&{empty?:boolean;narrow?:boolean;long?:boolean}){
 const[query,setQuery]=useState(''),[brand,setBrand]=useState('all'),[selected,setSelected]=useState<VariantSuggestion>(),[retry,setRetry]=useState(0);
 const options=empty?[]:variants.filter(v=>(brand==='all'||v.brand===brand)&&`${v.model} ${v.storage} ${v.finish}`.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map(v=>long?{...v,model:v.model+' with a long model name that wraps across narrow screens'}:v);
 return <div style={{width:narrow?288:600,maxWidth:'100%',padding:16,boxSizing:'border-box',minHeight:440,background:Theme==='dark'?'#191919':'#f9f9f9',color:Theme==='dark'?'#f9f9f9':'#191919'}}><p>New prototype extension · fictional device data</p><SearchCombobox Theme={Theme} label="Find your phone" query={query} onQueryChange={v=>{setQuery(v);setSelected(undefined);}} placeholder="Model or storage" brand={brand} brands={[{value:'all',label:'All brands'},{value:'Example',label:'Example'},{value:'Another',label:'Another'}]} onBrandChange={v=>{setBrand(v);setSelected(undefined);}} suggestions={options} selectedId={selected?.id} onSelect={s=>{setSelected(s);setQuery(s.model);}} loading={loading} error={error} onRetry={()=>setRetry(n=>n+1)} helpText="Choose the exact storage and finish."/><output aria-label="Chosen variant">{selected?`${selected.model}, ${selected.storage}, ${selected.finish}`:'No variant selected'}</output>{retry>0&&<p>Retry requested {retry}</p>}<button type="button" style={{marginTop:16}}>Continue</button></div>;
}
const meta={title:'Extensions/Search combobox',parameters:{docs:{description:{component:'New DS-based prototype extension, not an original Figma component. Consumer owns filtering, asynchronous requests and selected product identity. Query and optional brand are controlled; changing either should invalidate a previously selected product. Keyboard arrows skip disabled rows; Enter commits an active variant; Escape/Tab dismiss without selecting. Options show model, nonbreaking storage and finish. Dark/light colours reuse the current Croma palette; composition geometry is proposed.'}}}} satisfies Meta;
export default meta;type Story=StoryObj<typeof meta>;
export const VariantSuggestions:Story={render:()=> <Example/>};
export const Light:Story={render:()=> <Example Theme="light"/>};
export const NarrowLongContent:Story={render:()=> <Example narrow long/>};
export const Loading:Story={render:()=> <Example loading/>};
export const Empty:Story={render:()=> <Example empty/>};
export const Error:Story={render:()=> <Example error="Could not load variants"/>};
