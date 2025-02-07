/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "node-cjs",
    serverNodeBuiltinsPolyfill: {
      modules: {
        crypto: true,
        stream: true
      }
    },
    // ... your other config options
  };