import type {Meta,StoryObj} from '@storybook/react-vite';
import {Tooltip,type TooltipPosition} from '@croma/figma-ds';
import source from '../../../packages/figma-ds/evidence/tooltip-source.json';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
const cases=source.variants.map(v=>({key:`${v.Theme} / ${v.name} / ${v.id}`,source:v}));
interface Args {Case:string;Open:boolean;Title:string;Copy:string}
const meta={title:'Components/Tooltip/Figma variants',args:{Case:cases[0].key,Open:true,Title:'Title',Copy:'Copy'},argTypes:{Case:{control:'select',options:cases.map(c=>c.key)},Open:{control:'boolean'},Title:{control:'text'},Copy:{control:'text'}},parameters:{layout:'fullscreen'},render:args=>{const variant=cases.find(c=>c.key===args.Case)?.source??cases[0].source;return <main style={{minHeight:680,boxSizing:'border-box',padding:24,background:sourcePreviewSurfaces[variant.Theme==='dark'?'Dark':'Light'],color:sourcePreviewSurfaces[variant.Theme==='dark'?'Light':'Dark']}}><p style={{margin:0,fontSize:14}}>{variant.Theme} / {variant.name}</p><p style={{fontSize:14}}><a href={`https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=${variant.id.replace(':','-')}`} target="_blank" rel="noreferrer" style={{color:'inherit'}}>Figma {variant.id}</a></p><div style={{height:520,display:'grid',placeItems:'center'}}><Tooltip key={args.Case} label="Try tooltip" title={args.Title} description={args.Copy} Theme={variant.Theme as 'dark'|'light'} Position={variant.Position as TooltipPosition} Beak={variant.Beak as 'On'|'Off'} Stroke={variant.Stroke as 'On'|'Off'} Open={args.Open?true:undefined}/></div><p style={{fontSize:14}}>Choose one of the 52 source variants. Turn Open off to try hover, focus and Escape.</p></main>;}} satisfies Meta<Args>;
export default meta;
type Story=StoryObj<typeof meta>;
export const SourceVariants:Story={};
export const Interaction:Story={args:{Open:false}};
