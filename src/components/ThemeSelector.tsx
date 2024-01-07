import React from 'react';
import * as PrismStyles from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ThemeSelectorProps {
    setTheme: (theme: typeof PrismStyles[keyof typeof PrismStyles]) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ setTheme }) => {
    const themes = PrismStyles;
    return (
        <select
            onChange={(e) => setTheme(themes[e.target.value as keyof typeof themes])}
            className="border border-gray-300 rounded py-2 px-4 mb-4"
        >
            {Object.keys(themes).map((themeName) => (
                <option key={themeName} value={themeName}>
                    {themeName.replace(/([A-Z])/g, ' $1').trim()}
                </option>
            ))}
        </select>
    );
};

export default ThemeSelector;
