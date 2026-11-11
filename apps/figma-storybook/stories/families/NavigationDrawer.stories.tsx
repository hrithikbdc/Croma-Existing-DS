import type { Meta, StoryObj } from '@storybook/react-vite';
import {AcceptanceHarness,acceptanceCases} from '../../../figma-prototype/src/AcceptanceHarness';
import '../../../figma-prototype/src/acceptance.css';
const family='Navigation Drawer';
const cases=acceptanceCases.filter(test=>test.family===family);
interface Args {Case:string;LongContent:boolean}
const meta={title:'Components/Navigation Drawer/Written states',args:{Case:cases[0]?.id??'',LongContent:false},argTypes:{Case:{control:'select',options:cases.map(test=>test.id),mapping:undefined},LongContent:{control:'boolean'}},render:(args)=> <AcceptanceHarness only={args.Case} stress={args.LongContent}/>,parameters:{docs:{description:{component:'Each fixture maps to an implemented named state or variant. Numeric source properties are measured separately in the acceptance report. Missing semantic values, applicability conflicts remain individual property gaps; hidden whole-table written specifications are included and hidden template rows are excluded; passing geometry does not imply full visual acceptance.'}}}} satisfies Meta<Args>;
export default meta;
type Story=StoryObj<typeof meta>;
export const Playground:Story={};
export const StatesAndVariants:Story={parameters:{controls:{disable:true}},render:()=> <AcceptanceHarness family={family}/>};
export const LongContent:Story={args:{LongContent:true},parameters:{docs:{description:{story:'Resizing stress fixture. Long labels are an implementation robustness check, not additional authored Figma copy.'}}}};
