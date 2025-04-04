'use client';
// import styles from './ToggleTheme.module.css'
//fix get htmlElement with ref

import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

import { addClasses } from 'shared/libs';

export default function ToggleTheme() {
	function handleToggleTheme() {
		const htmlElement = document.documentElement;
		addClasses(htmlElement, 'dark');
	}
	return (
		<Switch
			checkedChildren={<SunOutlined />}
			unCheckedChildren={<MoonOutlined />}
			className='ml-auto'
			onClick={handleToggleTheme}
		/>
	);
}
