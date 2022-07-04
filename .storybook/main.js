const path = require('path')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-react-context"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },

  viteFinal: (config) => {
    config = {
      ...config,
      resolve: {
        alias: [{ find: '~', replacement: path.resolve(__dirname, '/src') }]
      },
    }
    return config
  }
}
