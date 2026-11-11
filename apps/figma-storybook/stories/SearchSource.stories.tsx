import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {SearchBar} from '@croma/figma-ds';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
function SearchExample({Theme='dark',Filled=true}:{Theme?:'dark'|'light';Filled?:boolean}){const[value,setValue]=useState(Filled?'Search Tata Neu':'');const[result,setResult]=useState('');return <div style={{width:360,maxWidth:'100%',padding:'24px 0',background:sourcePreviewSurfaces[Theme==='dark'?'Dark':'Light'],color:sourcePreviewSurfaces[Theme==='dark'?'Light':'Dark']}}><SearchBar Theme={Theme} label="Search" placeholder="Search Tata Neu" value={value} onChange={setValue} onSubmit={setResult}/><p role="status" style={{padding:'0 16px',fontSize:14}}>{result?`Searched: ${result}`:'Type a query and press Enter.'}</p></div>;}
const meta={title:'Components/Search Bar/Figma composition',args:{Theme:'dark',Filled:true},argTypes:{Theme:{control:'select',options:['dark','light']},Filled:{control:'boolean'}},render:args=><SearchExample key={args.Theme+String(args.Filled)} {...args}/>} satisfies Meta<typeof SearchExample>;
export default meta;
type Story=StoryObj<typeof meta>;
export const SearchAndClear:Story={};
export const Light:Story={args:{Theme:'light'}};
export const Empty:Story={args:{Filled:false}};
