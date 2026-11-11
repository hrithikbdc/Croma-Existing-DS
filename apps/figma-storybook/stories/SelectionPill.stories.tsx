import {useState} from 'react';
import {SelectionPillGroup} from '../../../packages/figma-ds/src/SelectionPill';
import '../../../packages/figma-ds/src/selection-pill.css';
export default{title:'Prototype extensions/Selection pills',parameters:{docs:{description:{component:'User-approved selection contract from exchange review annotations1/17. Same geometry in selected/unselected states; selected green text/stroke with neutral grey fill. Existing source Choice/Filter families remain separate.'}}}};
function Example({Theme='dark',variant='pill',multiple=false}:{Theme?:'dark'|'light';variant?:'pill'|'card';multiple?:boolean}){const[value,setValue]=useState('black'),[values,setValues]=useState<string[]>([]);const options=variant==='pill'?[{value:'black',label:'Black'},{value:'white',label:'White'},{value:'disabled',label:'Unavailable',disabled:true}]:[{value:'none',label:'No issues'},{value:'scratch',label:'Scratches'},{value:'disabled',label:'Unavailable',disabled:true}];return <div style={{padding:24,background:Theme==='dark'?'#191919':'#fff',color:Theme==='dark'?'#fff':'#191919'}}>{multiple?<SelectionPillGroup label="Phone condition" mode="multiple" value={values} onValueChange={setValues} options={options} Theme={Theme} variant={variant}/>:<SelectionPillGroup label="Finish" value={value} onValueChange={setValue} options={options} Theme={Theme} variant={variant}/>}<output>{multiple?values.join(','):value}</output></div>;}
export const Dark={render:()=> <Example/>};
export const Light={render:()=> <Example Theme="light"/>};
export const ConditionCards={render:()=> <Example multiple variant="card"/>};
export const Narrow={render:()=> <div style={{width:288,maxWidth:'100%'}}><Example multiple variant="card"/></div>};
