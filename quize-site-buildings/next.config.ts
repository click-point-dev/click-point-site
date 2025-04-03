import type { NextConfig } from 'next';
import '@ant-design/v5-patch-for-react-19';

const nextConfig: NextConfig = {
	/* config options here */

	eslint: {
		dirs: ['app', 'entities', 'features', 'shared', 'widgets'],
	},
	output: 'export',
	distDir: './build',
};

export default nextConfig;
