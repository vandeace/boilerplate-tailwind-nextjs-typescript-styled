webpack: (config, { isServer }) => {
  if (!isServer) {
    // eslint-disable-next-line
    config.node = { fs: "empty", module: "empty" };
  }
  return config;
};
