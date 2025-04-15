// import styles from './LinkNav.module.css'

import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkNav({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div>
			<Link
				href={href}
				className={`${className} group/item relative overflow-hidden py-2 uppercase`}>
				<span className='absolute inset-0 -translate-x-full border-b transition group-hover/item:translate-x-0'></span>
				<span>{children}</span>
			</Link>
		</div>
	);
}
