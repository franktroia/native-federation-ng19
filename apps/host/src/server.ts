import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {
  await initNodeFederation({
    remotesOrManifestUrl: import.meta.dirname + '/../browser/federation.manifest.json',
    relBundlePath: import.meta.dirname + '/../browser/',
  });

  await import('./bootstrap-server');
})();
