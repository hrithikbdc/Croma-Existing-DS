import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', 'msw-storybook-addon'],
  framework: { name: '@storybook/react-vite', options: {} },
  core: { disableTelemetry: true },
  docs: { defaultName: 'Usage and source' },
  async viteFinal(config) {
    return {
      ...config,
      // Keep original Figma SVG bytes intact instead of Vite rewriting data URLs.
      build: { ...config.build, assetsInlineLimit: 0, cssMinify: false },
      optimizeDeps: {
        ...config.optimizeDeps,
        exclude: [...new Set([
          ...(config.optimizeDeps?.exclude ?? []),
          '@croma/figma-ds',
          '@croma/figma-foundations'
        ])]
      }
    };
  }
};
export default config;
