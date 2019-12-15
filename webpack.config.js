const path = require('path')

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              projectReferences: true,
              configFile: path.join(__dirname, 'tsconfig-es6.json')
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
