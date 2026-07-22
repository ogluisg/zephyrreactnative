const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * Dev (`npm start` / `npm run ios`) uses plain Metro so the mini app can run
 * standalone without Module Federation shared-runtime errors (RUNTIME-006).
 *
 * Zephyr deploy (`npm run bundle:ios`) sets ZC=1 and loads metro.zephyr.config.js
 * with Module Federation + zephyr-metro-plugin.
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: { useWatchman: false },
};

const isZephyrBundle = Boolean(process.env.ZC);

module.exports = isZephyrBundle
  ? require('./metro.zephyr.config.js')()
  : mergeConfig(getDefaultConfig(__dirname), config);
