module.exports = {
 entry: {
  app: ["./src/index.js"]
    },
 output: {
        filename: "./dist/app.js"
 },
    resolve: {
        extensions: ['.js', '.jsx']
    },
 module: {
  loaders: [
   {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    query: {
       presets: ['es2015', 'react']
    }
   }
  ]
 }
};