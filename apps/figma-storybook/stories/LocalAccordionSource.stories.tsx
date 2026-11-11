import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {LocalAccordion,ColourAccordion} from '../../../packages/figma-ds/src/Accordion';
const copy='Descriptive text is a text which says what a person or a thing is like. Its purpose is to describe and reveal a particular person, place, or thing.';
function LocalCases(){return <div style={{display:'flex',flexWrap:'wrap',gap:24,padding:24}}>{(['Light','Dark']as const).flatMap(Background=>(['Off','On']as const).flatMap(Title=>(['Close','Open']as const).map(State=><LocalAccordion key={Background+Title+State} Background={Background} Title={Title} defaultState={State} heading="Accordion title"><p>{copy}</p><p>{copy}</p></LocalAccordion>)))}</div>;}
const meta={title:'Components/Accordion/Local source set',component:LocalCases,parameters:{layout:'fullscreen'}} satisfies Meta<typeof LocalCases>;
export default meta;type Story=StoryObj<typeof meta>;
export const AllEightTuples:Story={};
export const ColourSource:Story={render:()=> <ColourAccordion items={[{id:'brands',heading:'The biggest brands',icon:'Sparkle',content:<p>{copy}</p>},{id:'delivery',heading:'Express delivery',icon:'Delivery',defaultOpen:true,content:<p>{copy}</p>},{id:'purchase',heading:'Affordable purchase',icon:'Deal',content:<p>{copy}</p>},{id:'stores',heading:'Service at stores',icon:'Store',content:<p>{copy}</p>}]}/>};
export const Controlled:Story={render:function Controlled(){const[State,setState]=useState<'Open'|'Close'>('Close');return <LocalAccordion State={State} onStateChange={setState} Background="Dark" Title="On" heading="Accordion title"><p>{copy}</p><p>{copy}</p></LocalAccordion>;}};
