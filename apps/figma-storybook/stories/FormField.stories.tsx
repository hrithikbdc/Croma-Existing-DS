import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from '@croma/figma-ds';
const meta={
 title:'Components/form field',component:FormField,tags:['autodocs'],
 args:{Label:'Default label'},
 decorators:[(Story)=><div style={{width:298,maxWidth:'100%',paddingBlock:8}}><Story/></div>],
 argTypes:{focusAppearance:{control:'select',options:['source','outer-outline']},State:{control:'select',options:['Default','Active','Hover','Filled','Error','Error 2','Hover 2']},Label:{control:'text'}},
 parameters:{docs:{description:{component:'Form field from the seven states in Figma set827:82201. Uses the original border artwork,54px control height and source text values. Labels float on focus or entry; errors link to the input. Uses the supplied Switzer Variable font.'}}}
} satisfies Meta<typeof FormField>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Interactive:Story={};
export const Error:Story={args:{errorText:'Enter your preferred contact email'}};
export const Disabled:Story={args:{disabled:true}};
export const Controlled:Story={render:function ControlledField(args){const[value,setValue]=useState('');return <div style={{maxWidth:380}}><FormField {...args} value={value} onChange={event=>setValue(event.target.value)}/><p aria-live="polite">Entered: {value||'Nothing yet'}</p></div>}};
export const LongLabel:Story={args:{Label:'Your preferred contact email address'},parameters:{docs:{description:{story:'Content-resizing stress case; not an additional Figma variant.'}}}};

export const PreviousFocusAppearance:Story={name:'Previous focus outline — alternate',args:{focusAppearance:'outer-outline'},parameters:{docs:{description:{story:'User-approved alternate focus presentation. The source-border version remains the default.'}}}};
