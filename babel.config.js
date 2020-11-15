module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MyAwesomeWebpackPlugin()
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
