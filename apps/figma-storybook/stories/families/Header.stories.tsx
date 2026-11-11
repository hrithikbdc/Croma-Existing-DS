import type { Meta, StoryObj } from '@storybook/react-vite';
import {AcceptanceHarness,acceptanceCases} from '../../../figma-prototype/src/AcceptanceHarness';
import '../../../figma-prototype/src/acceptance.css';
const family='Header';
const cases=acceptanceCases.filter(test=>test.family===family);
interface Args {Case:string;LongContent:boolean}
const meta={title:'Components/Header/Code composition helper',args:{Case:cases[0]?.id??'',LongContent:false},argTypes:{Case:{control:'select',options:cases.map(test=>test.id),mapping:undefined},LongContent:{control:'boolean'}},render:(args)=> <AcceptanceHarness only={args.Case} stress={args.LongContent}/>,parameters:{docs:{description:{component:'This Header is a code composition helper for brand, content and actions. The actual Figma Header reference is a941×52 raster under248:59562 with7 annotation markers; no editable whole Header was found. This helper is not accepted as a matching Figma Header. The original reference remains part of the source evidence.'}}}} satisfies Meta<Args>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Playground:Story={};
export const StatesAndVariants:Story={parameters:{controls:{disable:true}},render:()=> <AcceptanceHarness family={family}/>};
export const LongContent:Story={args:{LongContent:true},parameters:{docs:{description:{story:'Resizing stress fixture. Long labels are an implementation robustness check, not additional authored Figma copy.'}}}};
