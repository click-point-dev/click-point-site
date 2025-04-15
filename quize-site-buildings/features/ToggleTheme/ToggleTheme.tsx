'use client';
import styles from './ToggleTheme.module.css';
import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useThemeContext } from './themeProvider';
import { useEffect, useRef } from 'react';

export default function ToggleTheme({ className }: { className?: string }) {
	const { isDark, handleToggleTheme } = useThemeContext();
	const html = useRef<HTMLElement>(document.documentElement);
	// const [userTheme, setUserTheme] = useState(theme);

	useEffect(() => {
		html.current?.classList.toggle('dark', isDark);
		html.current?.classList.toggle('light', !isDark);
	}, [isDark]);

	return (
		<Switch
			checkedChildren={<SunOutlined />}
			unCheckedChildren={<MoonOutlined />}
			className={`${styles.toggleTheme} ${className}`}
			onClick={handleToggleTheme}
		/>
	);
}
