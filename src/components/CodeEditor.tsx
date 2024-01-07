import hljs from 'highlight.js';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as PrismStyles from 'react-syntax-highlighter/dist/esm/styles/prism';
import LanguageSelector from './LanguageSelector';

interface CodeEditorProps {
    code: string;
    setCode: (code: string) => void;
    theme: typeof PrismStyles[keyof typeof PrismStyles];
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, theme }) => {
    const [language, setLanguage] = useState('plaintext');

    useEffect(() => {
        const detectedLanguage = hljs.highlightAuto(code).language;
        setLanguage(detectedLanguage || 'plaintext');
    }, [code]);

    return (
        <div>
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                rows={10}
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <div className="p-4 bg-gray-100 rounded mb-4">
                <SyntaxHighlighter language={language} style={theme}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeEditor;
