import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Menu,type MenuSection} from '@croma/figma-ds';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
function MenuExample(){const[selected,setSelected]=useState('selected');const items:MenuSection[]=[{id:'main',title:'Section title',items:[{id:'default',label:'Label',selected:selected==='default',onSelect:()=>setSelected('default')},{id:'selected',label:'Label',selected:selected==='selected',onSelect:()=>setSelected('selected')},{id:'expandable',label:'Label',children:[{id:'nested',label:'Label',onSelect:()=>setSelected('nested')},{id:'disabled',label:'Label',disabled:true}]},{id:'message',label:'Label',message:'Supporting message',onSelect:()=>setSelected('message')}],dividerAfter:'1'}];return <div style={{width:360,maxWidth:'100%',background:sourcePreviewSurfaces.Light,color:sourcePreviewSurfaces.Dark}}><Menu label="Example navigation" sections={items}/><p role="status" style={{padding:16,margin:0}}>Selected: {selected}</p></div>;}
const meta={title:'Components/Menu/Figma examples',parameters:{layout:'padded',controls:{disable:true}},render:()=> <MenuExample/>} satisfies Meta;
export default meta;
type Story=StoryObj<typeof meta>;
export const Navigation:Story={};
