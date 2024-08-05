const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "fs": false,
            "constants": require.resolve("constants-browserify"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/"),
            "path": require.resolve("path-browserify"),
            "buffer": require.resolve("buffer/")
        }
    },
    // Other configuration options if necessary
};