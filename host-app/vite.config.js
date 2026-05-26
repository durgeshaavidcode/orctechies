import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'host_app',
			remotes: {
				auth_mfe: {
					type: 'module',
					name: 'auth_mfe',
					entry: 'http://localhost:5001/remoteEntry.js',
					external: 'http://localhost:5001/assets/remoteEntry.js',
				},
				adminMfe: {
					entry: 'http://localhost:5002/remoteEntry.js',
					external: 'http://localhost:5002/assets/remoteEntry.js',
					format: 'esm',
					from: 'vite',
				},
			},
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
		{
			name: 'force-cors',
			configureServer(server) {
				server.middlewares.use((_req, res, next) => {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
					res.setHeader(
						'Access-Control-Allow-Headers',
						'Origin, X-Requested-With, Content-Type, Accept',
					);
					next();
				});
			},
			configurePreviewServer(server) {
				server.middlewares.use((_req, res, next) => {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
					res.setHeader(
						'Access-Control-Allow-Headers',
						'Origin, X-Requested-With, Content-Type, Accept',
					);
					next();
				});
			},
		},
	],
	optimizeDeps: {
		// exclude: ['authMfe', 'adminMfe']
	},
	server: {
		port: 5000,
		strictPort: true,
		// host: true, // Ensures the host config respects the flag
		historyApiFallback: true,
		cors: true, // Allow micro-frontends to bypass cross-origin blocks
	},
	build: {
		target: 'esnext',
		minify: false,
	},
});
