import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
addons.setConfig({ theme: create({ base: 'dark', brandTitle: 'Croma DS 0.4.0', colorPrimary: '#088466', colorSecondary: '#12daa8', appBg: '#191919', appContentBg: '#191919', appPreviewBg: '#191919' }) });
