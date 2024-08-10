import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.toml' },
			},
		},
		globalSetup: './test/global-setup.ts',
	},
	// ssr: {
	// 	resolve: {
	// 		conditions: ['import']
	// 	}
	// }
});
