import type {Meta, StoryObj} from '@storybook/react-vite';
import {FormField, type FormFieldState} from '@croma/figma-ds';
const states: FormFieldState[] = ['Default','Active','Hover','Filled','Error','Error 2','Hover 2'];
function FieldStates(){return <div style={{display:'flex',flexWrap:'wrap',gap:40,padding:24}}>{states.map(State=><section key={State} style={{width:298,maxWidth:'100%'}}><h3 style={{fontFamily:'var(--croma-font-family)',fontSize:14,margin:'0 0 24px',color:'var(--croma-review-foreground)'}}>{State}</h3><FormField State={State} Label="Label*" defaultValue={State==='Filled'||State==='Hover 2'?'Entered text':undefined} errorText={State==='Error'||State==='Error 2'?'Error message':undefined}/></section>)}</div>;}
const meta={title:'Components/Form Field/Figma states',component:FieldStates,parameters:{layout:'fullscreen'}} satisfies Meta<typeof FieldStates>;
export default meta;
type Story=StoryObj<typeof meta>;
export const AllSevenStates:Story={};
