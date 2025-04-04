'use client';
import styles from './ToggleTheme.module.css';
//fix get htmlElement with ref

import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useThemeProvider } from './themeProvider';
import { useEffect, useState } from 'react';

export default function ToggleTheme({ className }: { className?: string }) {
	const { theme: currentTheme } = useThemeProvider();

	const [theme, setTheme] = useState(currentTheme);

	function handleToggleTheme() {
		setTheme(() => (theme === 'dark' ? 'light' : 'dark'));
	}

	useEffect(() => {
		const html = document.parentElement;
		html?.classList.toggle(theme, !theme);
	}, [theme, setTheme]);

	return (
		<Switch
			checkedChildren={<SunOutlined />}
			unCheckedChildren={<MoonOutlined />}
			className={`${styles.toggleTheme} ${className}`}
			onClick={handleToggleTheme}
		/>
	);
}
