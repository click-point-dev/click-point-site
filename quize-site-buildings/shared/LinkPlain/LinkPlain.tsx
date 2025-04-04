// import styles from './LinkPlain.module.css'

import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkPlane({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<Link
			className={`${className} hover:text-primary1 dark:hover:text-primary2 visited:text-mainColor/50 py-1.5 text-xs transition md:text-sm`}
			href={href}>
			{children}
		</Link>
	);
}
