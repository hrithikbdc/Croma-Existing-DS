import type {Meta,StoryObj} from '@storybook/react-vite';
import {LogoCatalogue} from '../../figma-prototype/src/LogoCatalogue';
const meta={title:'Foundations/Original logos',component:LogoCatalogue,args:{Surface:'Both',Search:''},argTypes:{Surface:{control:'select',options:['Both','Light','Dark']},Search:{control:'text'}},parameters:{docs:{description:{component:'All seven original source wordmarks and favicons, selected by exact node ID. No forced square or recolouring; native SVG bytes and effective rendered aspect ratios are checked independently.'}}}} satisfies Meta<typeof LogoCatalogue>;
export default meta;
type Story=StoryObj<typeof meta>;
export const AllOriginalAssets:Story={};
