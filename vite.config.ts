import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
        // configure vite for HMR with Gitpod
        hmr: process.env.GITPOD_WORKSPACE_URL
          ? {
              // removes the protocol and replaces it with the port we're connecting to
              host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
              protocol: 'wss',
              clientPort: 443
            }
          : true
      }
});
