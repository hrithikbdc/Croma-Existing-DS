import type {Meta,StoryObj} from '@storybook/react-vite';
import {ToggleSwitch,Checkbox} from '@croma/figma-ds';
function ResetCases(){return <form>{(['dark','light']as const).map(Theme=><section key={Theme}><ToggleSwitch label={`${Theme} toggle unchecked`} Theme={Theme}/><ToggleSwitch label={`${Theme} toggle checked`} Theme={Theme} defaultChecked/><Checkbox label={`${Theme} checkbox unchecked`} Theme={Theme}/><Checkbox label={`${Theme} checkbox checked`} Theme={Theme} defaultChecked/></section>)}<button type="reset">Reset selections</button></form>;}
const meta={title:'Components/Behaviour prototypes/Form reset',component:ResetCases}satisfies Meta<typeof ResetCases>;export default meta;type Story=StoryObj<typeof meta>;export const NativeReset:Story={};
