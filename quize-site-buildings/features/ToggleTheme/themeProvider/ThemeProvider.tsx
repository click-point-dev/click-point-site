'use client';
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { ThemeType } from './themeProvider.d';

const themeContext = createContext<ThemeType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [isDark, setTheme] = useState<boolean>(true);

	const handleToggleTheme = useCallback(() => setTheme(prev => !prev), []);
	const contextValue = useMemo<ThemeType>(
		() => ({ isDark, handleToggleTheme }),
		[isDark, handleToggleTheme]
	);

	return (
		<themeContext.Provider value={contextValue}>
			{children}
		</themeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(themeContext);
	if (!context) {
		throw new Error(
			'useStateData must be used within a StateContextProvider'
		);
	}
	return context;
}
