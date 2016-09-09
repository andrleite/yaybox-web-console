const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins:[
    new webpack.DefinePlugin({
      'process.env' : {
        'KUBE_API_URL' : JSON.stringify(process.env.KUBE_API_URL),
        'KUBE_API_PORT' : process.env.KUBE_API_PORT,
        'KUBE_API_TOKEN' : JSON.stringify(process.env.KUBE_API_TOKEN)
      }
    })
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
