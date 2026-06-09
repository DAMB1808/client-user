const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'zustand' || moduleName.startsWith('zustand/')) {
    const res = require.resolve(moduleName);
    return context.resolveRequest(context, res, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
