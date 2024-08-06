const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "fs": false,
        "constants": require.resolve("constants-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify"),
        "buffer": require.resolve("buffer/"),
    };
    return config;
};
