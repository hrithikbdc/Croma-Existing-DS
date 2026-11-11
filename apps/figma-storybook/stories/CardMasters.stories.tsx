import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Card} from '@croma/figma-ds';
import {CardSkeleton} from '../../../packages/figma-ds/src/CardSkeleton';
function Masters(){return <div style={{display:'flex',flexWrap:'wrap',gap:24,padding:24}}>{(['dark','light']as const).flatMap(Theme=>(['Elevated','Filled','Outlined']as const).map(Type=><Card key={Theme+Type} Branch="Local" Theme={Theme} Type={Type} style={{width:282.6666564941406,height:128,position:'relative'}}><p style={{position:'absolute',left:16,top:92,margin:0,fontSize:14,fontWeight:400,lineHeight:'20px'}}>{Type}</p></Card>))} </div>;}
const meta={title:'Components/Cards/Local source masters',component:Masters,parameters:{layout:'fullscreen'}}satisfies Meta<typeof Masters>;export default meta;type Story=StoryObj<typeof meta>;
export const BothThemes:Story={};

export const Skeleton:Story={render:()=> <CardSkeleton/>};

export const WholeCardAction:Story={render:function Actions(){const[count,setCount]=useState(0);return <><Card Branch="Local" Theme="light" Type="Filled" title="Open card" onActivate={()=>setCount(n=>n+1)} actions={<button onClick={()=>setCount(n=>n+10)}>Secondary action</button>}>Card content</Card><output aria-live="polite">{count}</output></>;}};
