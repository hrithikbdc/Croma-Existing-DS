import {mswLoader} from 'msw-storybook-addon/csf3';
import {setupWorker} from 'msw/browser';
import type { CSSProperties } from 'react';
import {CromaProvider} from '@croma/figma-ds';
import type { Preview } from '@storybook/react-vite';
import '@croma/figma-foundations/fonts.css';
import '@croma/figma-foundations/tokens.css';
import '@croma/figma-foundations/typography.css';
import '@croma/figma-ds/styles.css';
import './catalogue.css';
const preview: Preview = {
  loaders: [mswLoader(async()=>{const worker=setupWorker();await worker.start({quiet:true,onUnhandledRequest:'bypass',serviceWorker:{url:new URL('mockServiceWorker.js',document.baseURI).pathname}});return worker;})],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: { options: { light: { name: 'Light', value: '#f9f9f9' }, dark: { name: 'Croma website · #191919', value: '#191919' }, sourceDark: { name: 'Figma dark/background · #212121', value: '#212121' } } },
    options: { storySort: { order: ['Developers', 'React API', 'Actual Figma DS', 'Foundations', 'Components', 'Extensions', 'Prototype extensions'] } },
    a11y: { test: 'error', manual: typeof window!=='undefined' && new URLSearchParams(window.location.search).has('ciA11y') }
  },
  globalTypes: {cromaTheme:{description:'Inherited component theme; explicit source variants take priority',toolbar:{title:'Component theme',icon:'circlehollow',items:['dark','light'],dynamicTitle:true}}},
  initialGlobals: { backgrounds: { value: 'dark' }, cromaTheme:'dark' },
  decorators: [(Story, context) => {
    const light = context.globals.backgrounds?.value === 'light';
    const canvas = light ? '#f9f9f9' : context.globals.backgrounds?.value === 'sourceDark' ? '#212121' : '#191919';
    return <><style>{`html, body { background-color: ${canvas}; }`}</style><div className="croma-figma-story" style={{'--croma-review-foreground': light ? '#191919' : '#f9f9f9'} as CSSProperties}><CromaProvider theme={context.globals.cromaTheme??'dark'} applyDocument={false} unstyled><Story /></CromaProvider></div></>;
  }]
};
export default preview;
