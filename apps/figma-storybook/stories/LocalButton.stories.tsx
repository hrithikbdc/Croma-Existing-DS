import {useState} from 'react';
import type {Meta,StoryObj} from '@storybook/react-vite';
import {Local} from '@croma/figma-ds';
import registry from '../source/button-variant-registry.json';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
const variants=(registry.branches.find(branch=>branch.id==='local-set')?.variants??[]) as unknown as {sourceName:string;sourceNodeId:string;props:Local.LocalButtonProps}[];
interface Args{Variant:string;Label:string;RightIcon:boolean}
function Playground({Variant,Label,RightIcon}:Args){const variant=variants.find(variant=>variant.sourceName===Variant)??variants[0];const[count,setCount]=useState(0);const light=variant.props.State==='Link on Light'||variant.props.State==='Outlined';return <div style={{padding:24,background:sourcePreviewSurfaces[light?'Light':'Dark'],fontFamily:'var(--croma-font-family)'}}><Local.Button {...variant.props} RightIcon={RightIcon} onClick={()=>setCount(n=>n+1)}>{Label||undefined}</Local.Button><p role="status" style={{color:light?sourcePreviewSurfaces.Dark:sourcePreviewSurfaces.Light}}>{count?`Activated ${count} time${count===1?'':'s'}`:'Try hover, click, Enter or Space.'}</p></div>}
const meta={title:'Components/Button/Local Figma set',render:(args)=><Playground {...args}/>,args:{Variant:'Size=Desktop, Type=Primary, State=Active',Label:'',RightIcon:true},argTypes:{Variant:{control:'select',options:variants.map(variant=>variant.sourceName)},Label:{control:'text'},RightIcon:{name:'Right Icon',control:'boolean'}},parameters:{docs:{description:{component:'The23 actual variants in Figma set393:72921. Desktop/Mobile, Primary/Secondary/Link and authored state names are preserved. This family is separate from the linked Filled/Outlined/Text guide. Switzer Variable is bundled from the supplied Croma font file.'}}}} satisfies Meta<Args>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Interactive:Story={};
export const Mobile:Story={args:{Variant:'Size=Mobile, Type=Primary, State=Active'}};
export const OriginalLinkArtwork:Story={args:{Variant:'Size=Desktop, Type=Link with icon, State=Link on Dark'}};
export const LongLabel:Story={args:{Label:'Continue with the products you have selected'}};
