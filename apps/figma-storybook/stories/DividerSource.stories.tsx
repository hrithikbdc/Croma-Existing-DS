import type {Meta,StoryObj} from '@storybook/react-vite';
import {DividerLine} from '@croma/figma-ds';
import {sourcePreviewSurfaces} from '../../figma-prototype/src/IconCatalogue';
const meta={title:'Components/Divider/Figma states',parameters:{controls:{disable:true}},render:()=> <div style={{display:'grid',gap:24}}>{(['dark','light'] as const).flatMap(Theme=>([{Size:'1px',Type:'w/o text'},{Size:'4px',Type:'w/o text'},{Size:'1px',Type:'w/ text'}] as const).map(c=><section key={Theme+c.Size+c.Type}><h3>{Theme} / {c.Size} / {c.Type}</h3><div data-divider-host style={{width:360,maxWidth:'100%',paddingBlock:24,background:sourcePreviewSurfaces[Theme==='dark'?'Dark':'Light']}}><DividerLine {...c} Theme={Theme} text={c.Type==='w/ text'?'Divider text':undefined}/></div></section>))}</div>} satisfies Meta;
export default meta;
export const AllSixCases:StoryObj<typeof meta>={};
