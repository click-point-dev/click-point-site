// import styles from './LinkPlane.module.css'

import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkPlane({
	children,
	href,
}: {
	children?: ReactNode;
	href: string;
}) {
	return (
		<Link
			className='py-1.5 text-xs transition hover:text-primary1 md:text-sm dark:hover:text-primary2'
			href={href}>
			{children}
		</Link>
	);
}
