import type {Meta,StoryObj} from '@storybook/react-vite';
import {IconCatalogue,iconFamilies} from '../../figma-prototype/src/IconCatalogue';
const meta={title:'Foundations/Original iconography',component:IconCatalogue,args:{Surface:'Both',Family:'All',Search:''},argTypes:{Surface:{control:'select',options:['Both','Light','Dark']},Family:{control:'select',options:['All',...iconFamilies]},Search:{control:'text'}},parameters:{docs:{description:{component:'All359 original source icon components, selected by exact node ID. The native SVGs retain their path, fill, dimensions and variant names. Surface controls change only the preview canvas. Source bytes and effective rendered dimensions are independently checked.'}}}} satisfies Meta<typeof IconCatalogue>;
export default meta;
type Story=StoryObj<typeof meta>;
export const AllOriginalAssets:Story={};
