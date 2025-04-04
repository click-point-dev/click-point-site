'use client';
import { createContext, ReactNode, useContext } from 'react';
import { ThemeType } from './themeProvider.d';

const initialTheme: ThemeType = { theme: 'dark' };

const themeContext = createContext<ThemeType>(initialTheme);

export function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<themeContext.Provider value={initialTheme}>
			{children}
		</themeContext.Provider>
	);
}

export function useThemeProvider() {
	return useContext(themeContext);
}
