import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {NavigationDrawer} from '@croma/figma-ds';
function Account(){const[open,setOpen]=useState(true);return <><button onClick={()=>setOpen(true)}>Open My Account</button><NavigationDrawer open={open} title="My Account" onClose={()=>setOpen(false)} SourceBranch="Account"/></>;}
const meta={title:'Components/Navigation Drawer/Account source',parameters:{layout:'fullscreen',controls:{disable:true}},render:()=> <Account/>} satisfies Meta;
export default meta;
export const MyAccount:StoryObj<typeof meta>={};
