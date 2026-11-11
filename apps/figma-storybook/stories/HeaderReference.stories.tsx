import type {Meta,StoryObj} from '@storybook/react-vite';
const meta={title:'Components/Header/Original image reference',parameters:{controls:{disable:true}},render:()=> <main><h2>Original Figma Header reference</h2><p>The source supplies an image, not an editable Header component. The separate code composition helper remains under review.</p><div style={{width:941,maxWidth:'100%',aspectRatio:'941 / 52'}}><img src="/source/header-reference.png" alt="Original Croma Header reference from Figma" style={{display:'block',width:'100%',height:'100%',objectFit:'cover'}}/></div><p>Figma image node248:59641. Reference only.</p></main>} satisfies Meta;
export default meta;
export const Original:StoryObj<typeof meta>={};
