import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		dirs: ['app', 'entities', 'features', 'shared', 'widgets'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	output: 'export',
	distDir: './build',
};

export default nextConfig;
