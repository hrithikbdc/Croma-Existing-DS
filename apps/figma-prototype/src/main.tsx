import React, { useState } from 'react';
import '@croma/figma-foundations/fonts.css';
import { createRoot } from 'react-dom/client';
import { Button, FormField,Local } from '@croma/figma-ds';
import '@croma/figma-foundations/tokens.css';
import '@croma/figma-foundations/typography.css';
import '@croma/figma-ds/styles.css';
import './prototype.css';
import { BehaviourExamples } from './BehaviourExamples';
function App(){
 const[name,setName]=useState('');const[submitted,setSubmitted]=useState(false);
 return <main className="prototype-shell">
 <a className="prototype-source" href="https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS">Actual Figma DS · Component integration example</a>
 <h1 data-croma-text-style="Typescale - Mobile/H2">Build with Croma</h1>
 <p>This small form consumes the shared Figma-derived components. Its layout and copy are a demonstration, not a Croma product flow.</p>
 <p className="prototype-status">Uses the supplied Switzer font. Component review notes remain in Storybook.</p>
 <form onSubmit={event=>{event.preventDefault();setSubmitted(true);}}>
 <FormField Label="Your name" value={name} onChange={event=>{setName(event.target.value);setSubmitted(false);}} required autoComplete="name"/>
 <Local.Button Size="Desktop" Type="Primary" type="submit">Continue</Local.Button>
 <Button Size="Large" Type="Outlined" onClick={()=>{setName('');setSubmitted(false);}}>Clear</Button>
 </form>
 <p role="status">{submitted?`Thanks, ${name}. The example form was submitted locally.`:'Nothing is sent to a server.'}</p>
 <aside><h2>Shared components, local workflow</h2><p>The library owns appearance and control behaviour. This app owns field values, submission and confirmation copy.</p></aside>
 <BehaviourExamples/>
 </main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
