// host-app/src/main.jsx
import { init } from '@module-federation/runtime';

init({
  name: 'host_app',
  remotes: [
    {
      name: 'auth_mfe',
      entry: 'http://localhost:5001/remoteEntry.js',
      type: 'module'
    }
  ],
  // ◄ FIX: The runtime engine requires object structures with a 'version' and 'get' provider
  shared: {
    react: {
      version: '19.2.6',
      scope: 'default',
      lib: () => import('react'),
      shareConfig: {
        singleton: true,
        requiredVersion: '^19.2.6',
      },
    },
    'react-dom': {
      version: '19.2.6',
      scope: 'default',
      lib: () => import('react-dom'),
      shareConfig: {
        singleton: true,
        requiredVersion: '^19.2.6',
      },
    }
  }
});

// Boot the React tree safely
import('./bootstrap.jsx');