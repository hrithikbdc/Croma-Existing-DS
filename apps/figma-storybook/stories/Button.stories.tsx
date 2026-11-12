import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button,Icon } from '@croma/figma-ds';
const source='https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS?node-id=245-35815';
const meta = {
 title: 'Components/Button', component: Button, tags: ['autodocs'],
 args: { children: 'Call to action', Size: 'Large', Type: 'Filled' },
 decorators: [(Story, context) => <div data-croma-button-tracking={context.parameters.cromaButtonTracking === 'source' ? 'source' : 'croma-local'}><Story /></div>],
 argTypes: { Size: { control: 'select', options: ['Large','Small'] }, Type: { control: 'select', options: ['Filled','Outlined','Text','Icon','Segmented'] } },
 parameters: { docs: { description: { component: `Authority: [written Button specifications](${source}), with same-file scoped saved-property fallback; the local Button set is a separate branch. Large is 40 px; Small is 32 px. Filled/Outlined horizontal padding is 24 px; Text horizontal margin is 8 px. Exact selected-instance bindings fill unwritten values. See the Button acceptance gate for source IDs, actual variants and remaining conflicts. Storybook preview adjustment: regular examples use 0 px letter spacing from the local Croma Button set (393:72921). Original guide tracking keeps the older guide’s authored 2 px spacing. This affects Storybook only; the released Button API and package retain their original guide values. The supplied Switzer Variable font is loaded. Visual acceptance remains pending.` } } }
} satisfies Meta<typeof Button>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Interactive:Story={};
export const OriginalGuideTracking:Story={name:'Original guide tracking · 2 px',parameters:{cromaButtonTracking:'source',docs:{description:{story:'Unmodified authored guide reference: 2 px tracking at Figma nodes 245:35892 and 245:35847. Regular catalogue previews use the Croma local set’s 0 px tracking as a Storybook-only presentation adjustment.'}}}};
export const Small:Story={args:{Size:'Small'}};
export const Outlined:Story={args:{Type:'Outlined'}};
export const Text:Story={args:{Type:'Text'}};
export const OriginalIcon:Story={args:{Type:'Icon',icon:<Icon nodeId="111:2069" decorative size={16} monochrome/>,children:'Contact support'}};
export const Disabled:Story={args:{disabled:true}};
export const LongLabel:Story={args:{children:'Continue with your selected option'},parameters:{docs:{description:{story:'Layout stress case. This copy exceeds the Figma button-copy guideline and is not a source variant.'}}}};
export const WrittenSizes:Story={
 name:'Written sizes',parameters:{controls:{disable:true}},
 render:()=> <div className="croma-catalogue"><h1>Written button sizes</h1><p>These examples exercise only the dimensions explicitly stated in the written specification. Missing colour/type/elevation bindings remain unresolved.</p><div style={{display:'flex',gap:24,flexWrap:'wrap'}}>{(['Large','Small'] as const).map(Size=><div key={Size}><p>{Size}</p><Button Size={Size} Type="Filled">Call to action</Button></div>)}</div></div>
};
