import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */

	eslint: {
		dirs: ['app', 'entities', 'features', 'shared', 'widgets'],
	},
	output: 'export',
	distDir: './build',
};

export default nextConfig;
