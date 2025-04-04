// import styles from './Footer.module.css'

import { ReactNode } from 'react';

export default function Footer({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<footer className={`${className} pb-6 pt-14 md:pt-16`}>{children}</footer>
	);
}
