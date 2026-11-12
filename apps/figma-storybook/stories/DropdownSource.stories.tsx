import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Dropdown,FormDropdown} from '@croma/figma-ds';
const options=[1,2,3,4,5].map(n=>({value:String(n),label:`Option ${n}`}));
const cases=[{State:'Default',Visible:'No'},{State:'Hover',Visible:'No'},{State:'selected',Visible:'Yes'},{State:'Option 1',Visible:'Selected'},{State:'Option 1',Visible:'Yes'},{State:'Option 1',Visible:'Hover'}] as const;
function DropdownStates(){return <div style={{display:'flex',flexWrap:'wrap',gap:40,padding:24}}>{cases.map(c=><section key={c.State+c.Visible} style={{width:294,maxWidth:'100%',minHeight:c.State==='selected'||c.Visible==='Selected'?320:100}}><h3 style={{fontSize:14,fontFamily:'var(--croma-font-family)',color:'var(--croma-review-foreground)',margin:'0 0 24px'}}>{c.State} / {c.Visible}</h3><Dropdown {...c} label="Dropdown" options={options}/></section>)}</div>;}
const meta={title:'Components/Dropdown/Figma states',component:FormDropdown,args:{label:'Dropdown',options},argTypes:{label:{control:'text'},disabled:{control:'boolean'},required:{control:'boolean'},focusAppearance:{control:'select',options:['source','outer-outline']},State:{control:false},Visible:{control:false},options:{control:'object'}},parameters:{layout:'fullscreen'}} satisfies Meta<typeof FormDropdown>;
export default meta;
type Story=StoryObj<typeof meta>;
export const AllSixStates:Story={name:'Default Dropdown1715 — six source states',render:()=> <DropdownStates/>,parameters:{controls:{disable:true}}};
export const Interactive:Story={name:'Form dropdown — interactive',render:function InteractiveDropdown(args){const[value,setValue]=useState('');return <div style={{padding:24}}><div style={{width:294,maxWidth:'100%'}}><FormDropdown {...args} value={value} onChange={e=>setValue(e.target.value)}/></div></div>;}};

export const FormSourceBranch:Story={name:'Form Dropdown840 — six source states',parameters:{controls:{disable:true}},render:()=> <div style={{display:'flex',flexWrap:'wrap',gap:40,padding:24}}>{cases.map(c=><section key={c.State+c.Visible} style={{width:294,maxWidth:'100%',minHeight:c.State==='selected'||c.Visible==='Selected'?320:100}}><h3 style={{fontSize:14,margin:'0 0 24px'}}>{c.State} / {c.Visible}</h3><FormDropdown {...c} label="Dropdown" options={options}/></section>)}</div>};

export const PreviousFocusAppearance:Story={name:'Previous focus outline — alternate',render:function PreviousDropdown(args){const[value,setValue]=useState('');return <div style={{padding:24}}><div style={{width:294,maxWidth:'100%'}}><FormDropdown {...args} focusAppearance="outer-outline" value={value} onChange={e=>setValue(e.target.value)}/></div></div>;},parameters:{docs:{description:{story:'User-approved alternate focus presentation. The source-border version remains the default.'}}}};
