import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {StickyFooter} from '@croma/figma-ds';
function FooterExample({Width=390}:{Width?:number}){const[count,setCount]=useState(0);return <main style={{width:Width,maxWidth:'100%'}}><StickyFooter sticky={false} onAction={()=>setCount(n=>n+1)}/><p role="status">{count?`Added to cart ${count} time${count===1?'':'s'}.`:'Try Add to cart.'}</p></main>;}
const meta={title:'Components/Sticky Footer/Figma composition',parameters:{layout:'fullscreen'},args:{Width:390},argTypes:{Width:{control:'select',options:[320,390,640]}},render:args=><FooterExample {...args}/>} satisfies Meta<typeof FooterExample>;
export default meta;
type Story=StoryObj<typeof meta>;
export const PriceAndAction:Story={};
export const Narrow:Story={args:{Width:320}};
