/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "./*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],
  docs: {},
  framework: {
    name: "@storybook/react-vite",
    options: {
      
    }
  },
};
export default config;
