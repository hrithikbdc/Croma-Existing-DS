import type { CSSProperties } from 'react';
import type { Preview } from '@storybook/react-vite';
import '@croma/figma-foundations/fonts.css';
import '@croma/figma-foundations/tokens.css';
import '@croma/figma-foundations/typography.css';
import '@croma/figma-ds/styles.css';
import './catalogue.css';
const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: { options: { light: { name: 'Light', value: '#f9f9f9' }, dark: { name: 'Croma website · #191919', value: '#191919' }, sourceDark: { name: 'Figma dark/background · #212121', value: '#212121' } } },
    options: { storySort: { order: ['Actual Figma DS', 'Foundations', 'Components', 'Prototype'] } },
    a11y: { test: 'error' }
  },
  initialGlobals: { backgrounds: { value: 'dark' } },
  decorators: [(Story, context) => {
    const light = context.globals.backgrounds?.value === 'light';
    const canvas = light ? '#f9f9f9' : context.globals.backgrounds?.value === 'sourceDark' ? '#212121' : '#191919';
    return <><style>{`html, body { background-color: ${canvas}; }`}</style><div className="croma-figma-story" style={{'--croma-review-foreground': light ? '#191919' : '#f9f9f9'} as CSSProperties}><Story /></div></>;
  }]
};
export default preview;
