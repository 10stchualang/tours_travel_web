const withCSS = require("@zeit/next-css");

const webpackConfig = (config) => {
  config.node = {
    fs: "empty",
  };

  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 100000,
        name: "[name].[ext]",
      },
    },
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

const config = { webpack: webpackConfig };

module.exports = withCSS(config);
