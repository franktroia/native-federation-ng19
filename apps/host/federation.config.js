const { withNativeFederation } = require('@angular-architects/native-federation/config');
const { sharedModules } = require('../../shared-modules');

module.exports = withNativeFederation({
  shared: sharedModules,

  skip: [],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
