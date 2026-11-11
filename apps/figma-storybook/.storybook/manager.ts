import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import {version} from '../package.json';
addons.setConfig({ theme: create({ base: 'dark', brandTitle: `Croma DS ${version}`, colorPrimary: '#088466', colorSecondary: '#12daa8', appBg: '#191919', appContentBg: '#191919', appPreviewBg: '#191919' }) });
