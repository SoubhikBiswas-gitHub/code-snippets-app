import React from 'react';
import { supportedLanguages } from '../constants/supportedLanguages';
interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {



    return (
        <select
            className="border border-gray-300 rounded py-2 px-4 mb-2"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
        >
            {supportedLanguages.map((lang) => (
                <option key={lang} value={lang}>
                    {lang.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
