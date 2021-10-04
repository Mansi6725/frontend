import React, { createContext, useContext, useState,FC } from 'react';

interface themeContextType {
	theme: boolean;
	setTheme: (theme: boolean) => void;
}

const initianState: themeContextType = {
	theme: false,
	setTheme: (theme: boolean) => {},
};

const themeContext = createContext(initianState);

const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState(false);

	return (
		<themeContext.Provider value={{ theme, setTheme }}>
			{children}
		</themeContext.Provider>
	);
};

export const useThemeContext = () => useContext(themeContext);

export default ThemeContextProvider;