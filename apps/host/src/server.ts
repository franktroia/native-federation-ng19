console.log('Starting SSR for Shell');

(async () => {
  await import('./bootstrap-server');
})();
