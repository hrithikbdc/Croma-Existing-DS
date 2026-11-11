import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Accordion} from '@croma/figma-ds';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
const description='Descriptive text is a text which says what a person or a thing is like. Its purpose is to describe and reveal a particular person, place, or thing.';
function AccordionExample({Open=false}:{Open?:boolean}){const[open,setOpen]=useState(Open);return <div style={{width:360,maxWidth:'100%',background:sourcePreviewSurfaces.Dark,color:sourcePreviewSurfaces.Light}}><Accordion heading="Accordion title" open={open} onOpenChange={setOpen}><p>{description}</p></Accordion></div>;}
const meta={title:'Components/Accordion/Figma composition',args:{Open:false},argTypes:{Open:{control:'boolean'}},render:args=><AccordionExample key={String(args.Open)} {...args}/>} satisfies Meta<typeof AccordionExample>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Closed:Story={};
export const Open:Story={args:{Open:true}};
