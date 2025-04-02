// import styles from './LinkPlane.module.css'

import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkPlane({ children, href }: { children?: ReactNode, href:string }) {
	return <Link className='text-xs md:text-sm py-1.5 dark:hover:text-primary2 hover:text-primary1 transition' href={href}>{children}</Link>;
}
