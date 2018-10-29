const webpack = require('webpack');
const config = require('./webpack.config');

const callback = (() => {
  var lastHash = null;
    /**
     * @param err
     * @param {object} stats
     * @return {undefined}
     */
  return function (err, stats) {
    if (err) {
      console.error(err);
      if (!watch) {
          process.on("exit", () => process.exit(1));
      }
    }

    if (stats.hash !== lastHash) {
      lastHash = stats.hash;
      console.log(
        stats.toString({
          colors: true,

          json: false,
          cached: false,
          cachedAssets: false,

          modules: true,
          chunkModules: false,
          chunks: false
        }) + "\n" + new Date().getSeconds() + "\n"
      );
    }
  }
})();

const compiler = webpack(config);

compiler.watch({
  ggregateTimeout: 300,
  poll: true,
  ignored: ['node_modules'],
}, callback);