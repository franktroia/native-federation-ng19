const { withNativeFederation } = require('@angular-architects/native-federation/config');
const { sharedModules } = require('../../shared-modules');

module.exports = withNativeFederation({
  name: 'remote',

  exposes: {
    './provider': './apps/remote/src/app/index.ts',
    './routes': './apps/remote/src/app/remote-routes.ts',
  },

  shared: sharedModules,

  skip: [],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
