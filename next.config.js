module.exports = {
  /* config options here */
  webpack(config, { isServer, dev: isDevelopmentMode }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    if (!isDevelopmentMode) {
      config.module.rules.push({
        test: /\.stories.(js|tsx?)/,
        loader: 'ignore-loader',
      });
    }

    return config;
  },
  poweredByHeader: false,
  images: {
    domains: ['unsplash.com'],
  },
};
