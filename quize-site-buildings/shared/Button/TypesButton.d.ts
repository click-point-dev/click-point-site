import { ReactElement } from 'react';

export interface TypesButton {
	title?: string;
	type?: 'primary' | 'secondary' | 'secondary2' | 'secondary3' | 'ghost';
	size?: 'l-64' | 'l-56' | 'm-48' | 's-40' | 's-32' | 'm-16' | 's-14' | 's-10';
	icon?: ReactElement;
	disabled?: boolean;
}

// export enum TypesButton {
// 	title = string,
// 	type = 'primary' | 'secondary' | 'ghost',
// 	size = 'l-64' | 'l-56' | 'm-48' | 's-48' | 's-32',
// 	icon = ReactElement,
// }

// export interface TypesButton {
// 	title?: string;
// 	type?: string;
// 	size?: string;
// 	icon?: ReactElement;
// }
