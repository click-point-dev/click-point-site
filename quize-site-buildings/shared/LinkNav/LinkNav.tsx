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
				className={`${className} group/item relative inline-block overflow-hidden py-2 uppercase leading-none`}>
				<span className='absolute inset-0 -translate-x-[110%] border-b transition duration-300 group-hover/item:translate-x-0'></span>
				<span>{children}</span>
			</Link>
		</div>
	);
}
