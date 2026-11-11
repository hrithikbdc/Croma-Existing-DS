import {useRef,useState} from 'react';
import {PrototypeTheme,PrototypeField,PrototypeButton,SurfaceCard,PlainSection,HelpDisclosure,SelectionPillGroup,ActionGroup,CompositionDialog} from '@croma/figma-ds';
export default {title:'Prototype extensions/Design hygiene',parameters:{layout:'fullscreen'}};
function Hygiene({Theme='dark'}:{Theme?:'dark'|'light'}){
 const [finish,setFinish]=useState(''),[power,setPower]=useState(''),[issues,setIssues]=useState<string[]>([]),[error,setError]=useState(false),[revision,setRevision]=useState(0),ref=useRef<HTMLInputElement>(null);
 return <PrototypeTheme Theme={Theme}><main style={{maxWidth:880,margin:'auto',padding:24,display:'grid',gap:24}}>
 <PlainSection title="Phone details">
  <SelectionPillGroup label="Finish" value={finish} onValueChange={setFinish} options={[{value:'yes',label:'Black'},{value:'no',label:'White'}]}/>
  <SelectionPillGroup label="Does your phone stay on without a charger?" variant="card" value={power} onValueChange={setPower} options={[{value:'yes',label:'Yes'},{value:'no',label:'No — it only stays on while plugged in'}]}/>
  <SelectionPillGroup label="Select any damage or faults" variant="card" mode="multiple" value={issues} onValueChange={setIssues} options={[{value:'none',label:'No issues'},{value:'scratches',label:'Screen scratches'},{value:'glass',label:'Cracked glass'},{value:'charging',label:'Charging or button issue',description:'A longer description checks that paired cards grow together.'}]}/>
 </PlainSection>
 <SurfaceCard title="Your exchange estimate" status="Exchange estimate ready" supporting="Prototype fixture. Values and eligibility are supplied by the screen." actions={<><PrototypeButton appearance="quiet">Edit exchange</PrototypeButton><PrototypeButton appearance="quiet">Remove exchange</PrototypeButton></>}>
  <p>Apple iPhone 13 · 128 GB</p>
  <PlainSection title="IMEI number">
   <PrototypeField ref={ref} label="Enter IMEI 1" placeholder="15-digit IMEI" help="Dual-SIM phone? Enter IMEI 1. We check it at delivery." error={error?'Enter a 15-digit IMEI.':undefined}/>
   <div><HelpDisclosure title="Where do I find the IMEI?"><p>Dial *#06# on your phone or check its device settings.</p></HelpDisclosure>
   <HelpDisclosure title="Why do I need to enter an IMEI?"><p>It identifies the phone you have chosen to exchange.</p></HelpDisclosure></div>
  </PlainSection>
  <SurfaceCard title="Before you apply exchange" supporting="Your phone is checked at delivery."><p>Check the model and storage you have selected.</p></SurfaceCard>
 </SurfaceCard>
 <ActionGroup align="between"><PrototypeButton appearance="quiet" onClick={()=>ref.current?.focus()}>Focus IMEI</PrototypeButton><PrototypeButton onClick={()=>setError(!error)}>Toggle validation message</PrototypeButton><PrototypeButton onClick={()=>setRevision(revision+1)}>Rerender selection</PrototypeButton></ActionGroup>
 <output aria-label="Render count">{revision}</output>
 </main></PrototypeTheme>;
}
export const Dark={render:()=> <Hygiene/>};
export const Light={render:()=> <Hygiene Theme="light"/>};
export const Narrow={render:()=> <div style={{maxWidth:320}}><Hygiene/></div>};
export const ExplicitSwatches={render:function Swatches(){const[value,setValue]=useState('black');return <PrototypeTheme><div style={{padding:24}}><SelectionPillGroup label="Finish with explicit swatches" value={value} onValueChange={setValue} options={[{value:'black',label:'Black',swatch:'#191919'},{value:'white',label:'White',swatch:'#f9f9f9'}]}/></div></PrototypeTheme>;}};
export const DialogActions={render:function DialogActions(){const[open,setOpen]=useState(false);return <PrototypeTheme><PrototypeButton onClick={()=>setOpen(true)}>Open review</PrototypeButton><CompositionDialog title="Review your exchange" open={open} onClose={()=>setOpen(false)} footer={<ActionGroup align="between"><PrototypeButton appearance="quiet" onClick={()=>setOpen(false)}>Back</PrototypeButton><PrototypeButton>Continue with this phone and review my exchange estimate</PrototypeButton></ActionGroup>}><SurfaceCard title="Phone to exchange"><p>Apple iPhone 13 · 128 GB</p></SurfaceCard></CompositionDialog></PrototypeTheme>;}};
