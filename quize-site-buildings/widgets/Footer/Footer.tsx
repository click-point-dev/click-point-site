// import styles from './Footer.module.css'

import { ReactNode } from 'react';

export default function Footer({ children }: { children: ReactNode }) {
	return <footer className='pt-14 pb-6 md:pt-16'>{children}</footer>;
}
