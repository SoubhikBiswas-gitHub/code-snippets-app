import React from 'react';
interface CopyButtonProps {
    code: string;
}
const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        alert('Copied to clipboard!');
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Copy to Clipboard
        </button>
    );
};

export default CopyButton;
