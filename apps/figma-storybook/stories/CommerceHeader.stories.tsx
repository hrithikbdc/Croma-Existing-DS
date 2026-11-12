import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {CommerceHeader,Breadcrumb} from '@croma/figma-ds';
import {SearchBar} from '@croma/figma-ds';

function HeaderExample({Theme='dark',long=false}:{Theme?:'dark'|'light';long?:boolean}){
 const[query,setQuery]=useState(''),[status,setStatus]=useState('Ready');
 return <div style={{minHeight:520,background:Theme==='dark'?'#191919':'#f9f9f9',color:Theme==='dark'?'#f9f9f9':'#191919'}}>
  <CommerceHeader Theme={Theme} logoHref="#home" navigation={[{label:'Phones',href:'#phones',current:true},{label:'Televisions',href:'#televisions'},{label:'Home appliances',href:'#appliances'}]}
   search={<SearchBar label="Header search" value={query} onChange={setQuery} onSubmit={()=>setStatus(`Search: ${query}`)}/>}
   location={{label:long?'Choose a delivery location with a deliberately long locality name':'Choose location',onClick:()=>setStatus('Location opened')}}
   account={{label:'Account',onClick:()=>setStatus('Account opened')}}
   cart={{label:'Cart',count:2,onClick:()=>setStatus('Cart opened')}}/>
  <main style={{padding:24,maxWidth:1320,marginInline:'auto'}}>
   <Breadcrumb Theme={Theme} items={[{label:'Home',href:'#home'},{label:'Phones',href:'#phones'},{label:long?'Exchange a phone with a deliberately long model and storage description':'Exchange a phone'}]}/>
   <h1 style={{fontSize:24}}>Editable commerce header</h1>
   <p>This is a prototype extension using original Croma logo/icon assets and current DS values. It is not a reconstruction of the raster Header reference.</p>
   <output role="status">{status}</output>
  </main>
 </div>;
}
const meta={title:'Extensions/Commerce header and breadcrumb',component:CommerceHeader,parameters:{layout:'fullscreen',docs:{description:{component:'New editable prototype composition. Logo, navigation, search and action content are supplied as props; the application owns routing, account, location and cart data. Mobile navigation is nonmodal, opens from Menu and closes on Escape, outside click or destination selection. Container margins and breakpoint reuse existing Grid rules; header arrangement is a proposed extension.'}}}} satisfies Meta<typeof CommerceHeader>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Dark:Story={render:()=> <HeaderExample/>};
export const Light:Story={render:()=> <HeaderExample Theme="light"/>};
export const LongContent:Story={render:()=> <HeaderExample long/>};
export const BreadcrumbExamples:Story={render:()=> <div style={{padding:24,display:'grid',gap:24}}><Breadcrumb items={[{label:'Home',href:'#home'},{label:'Phones',href:'#phones'},{label:'Exchange'}]}/><div style={{background:'#f9f9f9',padding:16}}><Breadcrumb Theme="light" items={[{label:'Home',href:'#home'},{label:'Exchange'}]}/></div><Breadcrumb items={[{label:'Exchange'}]}/></div>};
