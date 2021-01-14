/* config-overrides.js */
const { override, addWebpackAlias, disableEsLint, addLessLoader, overrideDevServer, watchAll } = require('customize-cra')

const path = require('path')

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        importLoaders: true,
        modifyVars: {}
      },
    }),
    addWebpackAlias({
      'react': path.resolve(__dirname, './node_modules/react'),
      'antd-mobile': path.resolve(__dirname, './node_modules/antd-mobile'),
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    // watchAll(),

  )
}
