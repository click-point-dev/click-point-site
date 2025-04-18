// import styles from './Button.module.css'

// import tw from 'twin.macro';
import { TypesButton } from './TypesButton';

// let classes = /*tw*/ ` bg-red-500`;
const tw = (s: TemplateStringsArray) => s[0];

const styles = {
	type: {
		primary: tw`bg-primary1 uppercase hover:text-primary1-hover-revers hover:bg-primary1-hover font-medium text-zinc-50 `,
		secondary: tw`bg-transparent font-medium uppercase  text-primary1 dark:text-inherit dark:hover:text-primary1-hover hover:text-primary1-hover-revers hover:bg-primary1 ring-1 hover:ring-0`,
		secondary2: tw`bg-transparent font-medium uppercase  text-primary1-hover dark:text-inherit dark:hover:text-mainColorRevers hover:text-primary1-hover-revers hover:bg-primary1-hover ring-1 hover:ring-0`,
		secondary3: tw`bg-transparent font-medium uppercase  text-mainColor dark:hover:text-primary1 hover:bg-primary1-disable ring-1 ring-gray5 hover:ring-primary1`,
		ghost: tw`text-primary1 hover:text-primary1-hover dark:text-primary2 dark:hover:text-mainColor`,
	},
	size: {
		'l-64': tw`text-base px-10 py-4 md:py-[24px]`,
		'l-56': tw`text-sm md:px-8 md:py-5 py-3 px-5`,
		'm-48': tw`text-sm md:px-7 px-5 md:py-4 py-2.5`,
		's-40': tw`text-sm px-6 py-[13px]`,
		's-32': tw`text-[10px] px-5 py-[11px]`,
		'm-16': tw`text-base`,
		's-14': tw`text-sm`,
		's-10': tw`text-[10px]`,
	},
};

export function Button({
	title = 'Заказать услугу',
	type = 'primary',
	size = 'l-64',
	disabled = false,
}: TypesButton) {
	return (
		<div className='flex justify-center'>
			<button
				disabled={disabled}
				className={`cursor-pointer rounded-full leading-none transition duration-300 ${styles.type[type]} ${styles.size[size]} active:scale-[98%]`}>
				{title}
			</button>
		</div>
	);
}
